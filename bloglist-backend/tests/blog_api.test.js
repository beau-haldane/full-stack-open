const mongoose = require('mongoose')
const supertest = require('supertest')
const bcrypt = require('bcrypt')
const helper = require('./test_helper')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blog')
const User = require('../models/user')



describe('When there are initially some blogs saved', () => {
  let token = ''
  let userId = ''
  
  beforeEach(async () => {
    await Blog.deleteMany({})
    await Blog.insertMany(helper.initialBlogs)

    const loginResponse = await api
      .post('/api/login')
      .send({username: 'test', password: 'test'})
      .expect('Content-Type', /application\/json/)

      token = loginResponse.body.token
      userId = loginResponse.body.userId
  })

  test('blogs are returned as json', async () => {
    await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })
  
  test('there are two blogs', async () => {
    const dbBlogs = await helper.blogsInDb()
    expect(dbBlogs).toHaveLength(2)
  })
  
  test('the first blog is about Lord of the Rings', async () => {
    const dbBlogs = await helper.blogsInDb()
    expect(dbBlogs[0].title).toBe('The Lord of the Rings')
  })
  
  test('Each blog has unique ID', async () => {
    const dbBlogs = await helper.blogsInDb()
    expect(dbBlogs.map(b => b.id)).toBeDefined()
  })


  describe('Addition of a blog', () => {
    test('Unspecified likes will default to 0', async () => {
      const newBlog = {
        title:"New Blog",
        author:"viccy",
        url:"www.vicsblog.com"
      }
    
      await api
        .post('/api/blogs')
        .set('Authorization', `bearer ${token}`)
        .send(newBlog)
      const dbBlogs = await helper.blogsInDb()
      expect(dbBlogs[2].likes).toEqual(0)
    })
    
    test('Missing title and URL results in 400 Bad Request', async () => {
      const newBlog = {
        author:"viccy",
        likes: 100
      }
    
      await api
        .post('/api/blogs')
        .set('Authorization', `bearer ${token}`)
        .send(newBlog)
        .expect(400)
    })

    test('Fails when no token is provided', async () => {
      const newBlog = {
        author:"viccy",
        likes: 100
      }
    
      await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(401)
    })
  })

  describe('Updating a blog', () => {
    test('succeeds with status code 200 if id is valid', async () => {
      const blogsAtStart = await helper.blogsInDb()
      const blogToUpdate = blogsAtStart[1]
      const updatedBlog = {
        title: 'New Title',
        author: 'New Author',
        url: "New Url",
        likes: 1234,
        id: blogToUpdate.id
      }

      await api
        .put(`/api/blogs/${blogToUpdate.id}`)
        .send(updatedBlog)
        .expect(200)

      blogsAtEnd = await helper.blogsInDb()

      expect(blogsAtEnd[1]).toEqual(updatedBlog)
    })
  })

  describe('Deletion of a blog', () => {
    test('succeeds with status code 204 if id is valid', async () => {
      const newBlog = {
        title: 'test',
        author: 'test',
        url: 'test',
        likes: 100,
        user: userId
      }
    
      await api
        .post('/api/blogs')
        .set('Authorization', `bearer ${token}`)
        .send(newBlog)   

      const blogsAtStart = await helper.blogsInDb()
      const blogToDelete = blogsAtStart[2]

      await api
        .delete(`/api/blogs/${blogToDelete.id}`)
        .set('Authorization', `bearer ${token}`)
        .expect(204)

      const blogsAtEnd = await helper.blogsInDb()

      expect(blogsAtEnd.length).toEqual(blogsAtStart.length-1)
    })
  })
})

describe('when there is initially one user in db', () => {
  beforeEach(async () => {
    await User.deleteMany({})

    const passwordHash = await bcrypt.hash('test', 10)
    const user = new User({ username: 'test', passwordHash })

    await user.save()
  })

  test('creation succeeds with a fresh username', async () => {
    const usersAtStart = await helper.usersInDb()

    const newUser = {
      username: 'mluukkai',
      name: 'Matti Luukkainen',
      password: 'salainen',
    }

    await api
      .post('/api/users')
      .send(newUser)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const usersAtEnd = await helper.usersInDb()
    expect(usersAtEnd).toHaveLength(usersAtStart.length + 1)

    const usernames = usersAtEnd.map(u => u.username)
    expect(usernames).toContain(newUser.username)
  })

  test('creation fails with proper statuscode and message if username already taken', async () => {
    const usersAtStart = await helper.usersInDb()

    const newUser = {
      username: 'test',
      name: 'Superuser',
      password: 'salainen',
    }

    const result = await api
      .post('/api/users')
      .send(newUser)
      .expect(400)
      .expect('Content-Type', /application\/json/)

    expect(result.body.error).toContain('username must be unique')

    const usersAtEnd = await helper.usersInDb()
    expect(usersAtEnd).toEqual(usersAtStart)
  })
})

afterAll(() => {
  mongoose.connection.close()
})
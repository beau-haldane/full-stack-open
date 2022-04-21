const mongoose = require('mongoose')
const supertest = require('supertest')
const helper = require('./test_helper')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blog')

beforeEach(async () => {
  await Blog.deleteMany({})
  await Blog.insertMany(helper.initialBlogs)
})

describe('When there are initially some blogs saved', () => {
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
      .send(newBlog)
      .expect(400)
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
    const blogsAtStart = await helper.blogsInDb()
    const blogToDelete = blogsAtStart[0]

    await api
      .delete(`/api/blogs/${blogToDelete.id}`)
      .expect(204)

    const blogsAtEnd = await helper.blogsInDb()

    expect(blogsAtEnd.length).toEqual(blogsAtStart.length-1)
  })
})

afterAll(() => {
  mongoose.connection.close()
})
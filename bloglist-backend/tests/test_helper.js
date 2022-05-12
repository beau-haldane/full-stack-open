const Blog = require('../models/blog')
const User = require('../models/user')

const initialBlogs = [
  {
    title:"The Lord of the Rings",
    author:"JRR Tolkien",
    url:"String",
    likes:100
  },
  {
    title:"Some Blog",
    author:"viccy",
    url:"www.vicsblog.com",
    likes:300
  }
]

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}

const usersInDb = async () => {
  const users = await User.find({})
  return users.map(u => u.toJSON())
}

module.exports = {
  initialBlogs, 
  blogsInDb,
  usersInDb
}
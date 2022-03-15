const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://fullstack:${password}@cluster0.deadw.mongodb.net/bloglistApp?retryWrites=true&w=majority`

mongoose.connect(url)

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number
})

const Blog = mongoose.model('Blog', blogSchema)

const blog = new Blog({
  title: 'The Lord of the Rings',
  author: 'JRR Tolkien',
  url: 'String',
  likes: 100
})

blog.save().then(result => {
  console.log('blog saved!')
  mongoose.connection.close()
})
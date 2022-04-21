const http = require('http')
const config = require('./utils/config')
const logger = require('./utils/logger')
const app = require('./app')
const Blog = require('./models/blog')
const blogsRouter = require('./controllers/blogs')

const server = http.createServer(app)

// -- Run Server -- //
server.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})
var _ = require('lodash');

const dummy = (blogs) => {
  return 1
}

// -- Total likes across all blogs -- //
const totalLikes = (blogs) => {
  const totalAmount = blogs.reduce (function(sum, blog) {
    return sum + blog.likes
  }, 0)

  return totalAmount
}

// -- Info about blog with most likes -- //
const favouriteBlog = (blogs) => {
  
  const mostLikes = Math.max(...blogs.map(function(o) { return o.likes; }))

  const favourite = blogs[blogs.map( blog => blog.likes ).indexOf(mostLikes)]

  return {
    title: favourite.title,
    author: favourite.author,
    likes: favourite.likes
  }
}

// -- Info about author with most published blogs -- //
const mostBlogs = (blogs) => {
  const counts = []

  blogs.forEach(element => {
    if (counts.map(b => b.author).includes(element.author)){
      counts[
        counts
          .map( e => e.author )
          .indexOf(element.author)
        ].blogs += 1
    } else {
      counts.push({ author: element.author, blogs: 1 })
    }
  });

  indexOfMostBlogs = counts.map( e => e.blogs ).indexOf(Math.max(...counts.map(function(o) { return o.blogs; })))

  return counts[indexOfMostBlogs]

}

const mostLikes = (blogs) => {

  const counts = []

  blogs.forEach(element => {
    if (counts.map(b => b.author).includes(element.author)){
      counts[
        counts
          .map( e => e.author )
          .indexOf(element.author)
        ].likes += element.likes
    } else {
      counts.push({ author: element.author, likes: element.likes })
    }
  });

  indexOfMostLikes = counts.map( e => e.likes ).indexOf(Math.max(...counts.map(function(o) { return o.likes; })))

  return counts[indexOfMostLikes]

}

module.exports = {
  dummy,
  totalLikes,
  favouriteBlog,
  mostBlogs,
  mostLikes
}


import React from 'react'

const Courses = ({courses}) => (
    courses.map(course => 
      <div key={course.id}>
        <Header course={course.name} />
        <Content parts={course.parts} />
      </div>
    )
  )
  
  
  const Header = ({course}) => (
    <div>
      <h1>{course}</h1>
    </div>
  )
  
  
  const Content = ({parts}) => (
    <div>
      <Part parts={parts} />
      <Total parts={parts} />
    </div>
  )
  
  
  const Part = ({parts}) => (
    parts.map(part =>
      <div key={part.id}>{part.name} {part.exercises}</div>
    )
  )
  
  const Total = ({parts}) => { 
    const total = parts.map(part => part.exercises).reduce(function (previousValue, currentValue) {
      return previousValue + currentValue;
    })
    return <p><b>Total of {total} exercises</b></p>
  }

export default Courses
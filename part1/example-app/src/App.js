import React from 'react'

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <Footer />
    </>
  )
}

const Hello = (props) => {
  return (
    <div id = "hello">
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const Footer = () => {
  return (
    <div id = "footer">
      greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
    </div>
  )
}

export default App
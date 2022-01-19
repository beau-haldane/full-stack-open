import React, { useState } from 'react'

const Header = () => <div><h1>Give Feedback</h1></div>

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const SatisticLine = ({stat, text}) =>(
<tr>
  <td>{text}</td><td>{stat}</td>
</tr>
)

const Average = ({good, neutral, bad}) =>(
  <tr>
    <td>Average</td><td>{(good-bad)/(good+neutral+bad)}</td>
  </tr>
)

const Positive = ({good, neutral, bad}) =>(
  <tr>
    <td>Positive</td><td>{((good)/(good+neutral+bad))*100} %</td>
  </tr>
)

const Statistics = ({good, neutral, bad}) => {
  if (good+neutral+bad === 0){
    return(
      <div>
        No feedback given
      </div>
    )
  }
  return(
    <div>
      <table>
        <tbody>
          <SatisticLine stat={good} text="Good" />
          <SatisticLine stat={neutral} text="Neutral" />
          <SatisticLine stat={bad} text="Bad" />
          <SatisticLine stat={bad+neutral+good} text="All" />
          <Average good={good} neutral={neutral} bad={bad} />
          <Positive good={good} neutral={neutral} bad={bad} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    
    <div>
      <Header />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
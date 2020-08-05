import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = ({title}) => <h1>{title}</h1>

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistic = ({text, value}) => (
  
  <tr>
    <td>{text}</td> 
    <td>{value}</td>
  </tr>
  
)

const Statistics = ({good, neutral, bad, all}) => {
  if (all === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <table>
      <tbody>
        <Statistic text={"good"} value={good} />
        <Statistic text={"neutral"} value={neutral} />
        <Statistic text={"bad"} value={bad} />
        <Statistic text={"all"} value={all} />
        <Statistic text={"average"} value={(good - bad) / all} />
        <Statistic text={"positive"} value={(good / all * 100) + " %"} />
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
    setAll(all + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setAll (all + 1)
  }

  return (
    <div>
      <Display title={"Give feedback"} />

      <Button onClick={handleGoodClick} text={"good"}/>
      <Button onClick={handleNeutralClick} text={"neutral"}/>
      <Button onClick={handleBadClick} text={"bad"}/>

      <Display title={"Statistics"} />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} />


      
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
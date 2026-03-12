import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [score, setScore] = useState(0)

  const plusGood = () => {
    const newValue = good + 1
    setGood(newValue)
    setTotal(newValue + neutral + bad)
    setScore(newValue - bad)
  }

  const plusNeutral = () => {
    const newValue = neutral + 1
    setNeutral(newValue)
    setTotal(newValue + good + bad)
  }

  const plusBad = () => {
    const newValue = bad + 1
    setBad(newValue)
    setTotal(newValue + good + neutral)
    setScore(good - newValue)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={plusGood} text="good" />
      <Button onClick={plusNeutral} text="neutral" />
      <Button onClick={plusBad} text="bad" />
      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        total={total}
        score={score} 
      />
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.onClick}>{props.text}</button>
)

const StatisticLine = (props) => {
  return (
    <>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </>

  )
}

const Statistics = ({ good, bad, neutral, total, score }) => {
  if (total == 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td><h1>Statistics</h1></td>
          </tr>
          <tr>
            <StatisticLine text="good" value={good} />
          </tr>
          <tr>
            <StatisticLine text="neutral" value={neutral} />
          </tr>
          <tr>
            <StatisticLine text="bad" value={bad} />
          </tr>
          <tr>
            <StatisticLine text="all" value={total} />
          </tr>
          <tr>
            <StatisticLine text="average" value={score / total} />
          </tr>
          <tr>
            <StatisticLine text="positive" value={good / total * 100 + "%"} />
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App
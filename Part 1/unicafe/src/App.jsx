import { useState } from 'react'

const App = () => {
    // save clicks of each button to its own state
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
        setTotal(newValue + neutral + good)
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
                neutral={neutral}
                bad={bad}
                total={total}
                score={score}
            />

        </div>
    )
}

const Button = (props) => (
    <button onClick={props.onClick}>{props.text}</button>
)

const Statistics = ({ good, neutral, bad, total, score }) => {
    if (total == 0) {
        return (
            <div>
                <p>No feedback given</p>
            </div>
        )
    }
    
    return (
        <table>
            <tbody>
                <tr>
                    <StatisticLine name="good" value={good}/>
                </tr>
                <tr>
                    <StatisticLine name="neutral" value={neutral}/>
                </tr>
                <tr>
                    <StatisticLine name="bad" value={bad}/>
                </tr>
                <tr>
                    <StatisticLine name="total" value={total}/>
                </tr>
                <tr>
                    <StatisticLine name="average" value={score/total}/>
                </tr>
                <tr>
                    <StatisticLine name="score" value={good/total*100 + "%"}/>
                </tr>
            </tbody>
        </table>
    )
}

const StatisticLine = (props) => {
    return (
        <>
            <td>{props.name}</td>
            <td>{props.value}</td>
        </>
    )
}
export default App
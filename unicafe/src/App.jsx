import { useState } from 'react'

const StatisticLine = (props) => {
    return (
        <tr>
            <td>{props.text} {props.value}</td>
        </tr>
    )
}
const Statistics = (props) => {
    if(props.stats[3]){
        return(
            <div>
                <table>
                    <tbody>
                    <StatisticLine text="good" value ={props.stats[0]} />
                    <StatisticLine text="neutral" value ={props.stats[1]} />
                    <StatisticLine text="bad" value ={props.stats[2]} />
                    <StatisticLine text="all" value ={props.stats[3]} />
                    <StatisticLine text="average" value ={props.stats[4]} />
                    <StatisticLine text="positive" value ={props.stats[5]} />
                    </tbody>
                </table>
            </div>
        )
    } else
        return (
            <p>No feedback given</p>
        )

}

const Button = (props) => {
    return (
        <button onClick={props.onClick}>
            {props.name}
        </button>
    )
}
const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const all =  good + neutral + bad
    const average = (good + bad*-1)/all
    const positive = (good/all)*100 + '%'
    const stats = [good, neutral, bad, all, average, positive]

    const handleGoodFeedback = () => setGood(good + 1)
    const handleNeutralFeedback = () => setNeutral(neutral + 1)
    const handleBadFeedback = () => setBad(bad + 1)


    return (
        <div>
            <h1>give feedback</h1>
            <Button onClick={handleGoodFeedback} name='good'/>
            <Button onClick={handleNeutralFeedback} name='neutral'/>
            <Button onClick={handleBadFeedback} name='bad'/>
            <h1>statistics</h1>
            <Statistics stats={stats}/>
        </div>
    )
}

export default App
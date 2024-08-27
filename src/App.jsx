import { useState } from 'react'

const StatisticLine = (props) => {
    return (
        <>
            <tr>
                <td>{props.text} {props.value}</td>
            </tr>
        </>
    )
}

const Button = (props) => {
    return (
        <div>
            <button onClick={props.onClick}>{props.text} </button>
        </div>
    )
}

const Statistics = (props) => {
    if(props.all > 0) {
        return (
            <div>
                <table>
                    <tbody>
                    <StatisticLine text={"good"} value={props.good}/>
                    <StatisticLine text={"neutral"} value={props.neutral}/>
                    <StatisticLine text={"bad"} value={props.bad}/>
                    <StatisticLine text={"all"} value={props.all}/>
                    <StatisticLine text={"average"} value={props.average}/>
                    <StatisticLine text={"positive"} value={props.positive+"%"}/>
                    </tbody>
                </table>
            </div>
        )
    }
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0);

    const handleGoodClick = () =>{
        setGood(good+1);
        setAll(all+1);
    }
    const handleNeutralClick = () =>{
        setNeutral(neutral+1);
        setAll(all+1);
    }
    const handleBadClick = () =>{
        setBad(bad+1);
        setAll(all+1);
    }

    const average = all > 0 ? (good - bad )/ all : 0;
    const positive = all > 0 ? (good / all)*100 : 0;

    return (
        <div>
            <h2>give feedback</h2>
            <div>
                <Button text={"good"} onClick={handleGoodClick}/>
                <Button text={"neutral"} onClick={handleNeutralClick}/>
                <Button text={"bad"} onClick={handleBadClick}/>
            </div>
            <div>
                <h2>statistics</h2>
                <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    all={all}
                    average={average}
                    positive={positive}
                />
            </div>
        </div>
    )
}

export default App
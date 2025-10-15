import { useEffect, useState } from "react"

function Study () {
   const [ hours, setHours ] = useState(0)
   const [ minutes, setMinutes] = useState(0)
   const [ seconds, setSeconds ] = useState(0)
   let timer; 
    
   useEffect(() => {
       
    timer = setInterval(() => {

    }, 1000)
   })


 return(
    <div className="timer-div">
    <div className="timer-intro">
        <h1>Study Timer</h1>
        <p>The Pomodoro technique is highly effective for studying because it helps improve focus
             and productivity while preventing burnout. By breaking study time into short, timed 
             intervals you train your brain to concentrate deeply without distractions.</p>
    </div>
    <div className="preset-timers">
        <button className="pom-timer">Deep Work</button>
        <button className="pom-timer">Balanced</button>
        <button className="pom-timer">Classic</button>
    </div>
    <div className="timer">
        <h1 className="time hours">00:25:00</h1>
    </div>
    <div className="timer-btn">
        <button onClick={() => { onBreak() }}>Break</button>
        <button onClick={() => { onPause() }}>Pause</button>
        <button onClick={() => { onStart() }}>Start</button>
    </div>
    {/* <div className="add-timer">
        <div className="add-timer-btn-div">
            <button clanssName="add-timer-btn">Add timer</button>
        </div>
        <div className="dif-timers">
            <div className="timer">
                <h1>timer 1</h1>
            </div>
        </div>
    </div> */}
    </div>
 )

}
export default  Study 
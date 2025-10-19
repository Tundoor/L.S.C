import { useEffect, useRef, useState } from "react"

function formatTime(totalSeconds) {
  const hrs = Math.floor(totalSeconds / 3600)
  const mins = Math.floor((totalSeconds % 3600) / 60)
  const secs = totalSeconds % 60
  const pad = (n) => String(n).padStart(2, "0")
  return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`
}

function Study() {
  // total seconds remaining
  const [secondsLeft, setSecondsLeft] = useState(25 * 60) // default 25m
  const [isRunning, setIsRunning] = useState(false)
  const timerRef = useRef(null)

  // Preset handlers
  const setPreset = (minutes) => {
    setIsRunning(false)
    clearInterval(timerRef.current)
    setSecondsLeft(minutes * 60)
  }

  // Start the countdown
  const onStart = () => {
    if (isRunning) return
    setIsRunning(true)
  }

  // Pause the countdown
  const onPause = () => {
    setIsRunning(false)
  }

  // Break (short break 5 minutes)
  const onBreak = () => {
    setIsRunning(false)
    clearInterval(timerRef.current)
    setSecondsLeft(5 * 60)
  }

  // Reset to default 25:00
  const onReset = () => {
    setIsRunning(false)
    clearInterval(timerRef.current)
    setSecondsLeft(25 * 60)
  }

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setSecondsLeft((s) => {
          if (s <= 1) {
            clearInterval(timerRef.current)
            setIsRunning(false)
            return 0
          }
          return s - 1
        })
      }, 1000)
    }

    return () => clearInterval(timerRef.current)
  }, [isRunning])

  return (
    <div className="timer-div">
      <div className="timer-intro">
        <h1>Study Timer</h1>
        <p>
          The Pomodoro technique helps improve focus by breaking work into
          short, timed intervals. Use presets or custom controls below.
        </p>
      </div>

      <div className="preset-timers">
        <button className="pom-timer" onClick={() => setPreset(50)}>Deep Work (50m)</button>
        <button className="pom-timer" onClick={() => setPreset(40)}>Balanced (40m)</button>
        <button className="pom-timer" onClick={() => setPreset(25)}>Classic (25m)</button>
      </div>

      <div className="timer">
        <h1 className="time hours">{formatTime(secondsLeft)}</h1>
      </div>

      <div className="timer-btn">
        <button onClick={onBreak}>Break (5m)</button>
        {isRunning ? (
          <button onClick={onPause}>Pause</button>
        ) : (
          <button onClick={onStart}>Start</button>
        )}
        <button onClick={onReset}>Reset</button>
      </div>
    </div>
  )
}

export default Study

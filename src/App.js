import "./styles.css";

import useTimer from "./useTimer";

export default function App() {
  const { isRunning, start, stop, seconds } = useTimer(5);

  return (
      <div className="App">
        <h1>useTimer custom hook</h1>
        <h2>{isRunning ? seconds : "No Timer Running"}</h2>
        <button onClick={start} disabled={isRunning}>
          Start Timer
        </button>
        <button onClick={stop} disabled={!isRunning}>
          Stop Timer
        </button>
      </div>
  );
}

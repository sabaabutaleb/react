import { useState } from "react";
import "./style.css";
// day.toDateString();
export default function App() {
  //keeptracking of counter and steps;

  const [step, setStep] = useState(1);
  const [counter, setCounter] = useState(0);
  let show = false;
  console.log(show);
  let day = new Date();
  day.setDate(day.getDate() + counter);
  return (
    <div className="App">
      <div className="row">
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => {
            setStep(Number(e.target.value));
            show = true;
          }}
        />
        <h3>{step}</h3>
      </div>
      <div className="row">
        <button onClick={() => setCounter((c) => c - step)}>-</button>
        <input
          value={counter}
          onChange={(e) => {
            setCounter(Number(e.target.value));
            show = true;
          }}
        ></input>
        <button onClick={() => setCounter((c) => c + step)}>+</button>
      </div>
      <div className="center">
        <span>
          {counter === 0 && `Today is:`}
          {counter > 0 && `${counter}day from today is : `}
          {counter < 0 && `${Math.abs(counter)} days ago from Today is: `}
        </span>
        <span>{day.toDateString()}</span>
      </div>
      {step !== 1 || counter !== 0 ? (
        <button
          className={!show ? "hidden" : ""}
          onClick={() => {
            setStep(1);
            setCounter(0);
          }}
        >
          Reset
        </button>
      ) : null}
    </div>
  );
}

import { useState } from "react";
import "./style.css";
// day.toDateString();
export default function App() {
  //keeptracking of counter and steps;

  const [step, setStep] = useState(1);
  const [counter, setCounter] = useState(0);
  let day = new Date();
  day.setDate(day.getDate() + counter);
  return (
    <div className="App">
      <div className="row">
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <h3>Steps:{step}</h3>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div className="row">
        <button onClick={() => setCounter((c) => c - step)}>-</button>
        <h3>Counter:{counter}</h3>
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
    </div>
  );
}

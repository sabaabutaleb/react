import { type } from "@testing-library/user-event/dist/type";
import { useReducer, useState } from "react";
function reducer(state, action) {
  // if (action.type === "inc") return state.count + state.step;
  // if (action.type === "dec") return state.count - state.step;
  // if (action.type === "setCounter") return state.count;
  // if (action.type === "setStep") return state.step;
  // if (action.type === "reset") return initialState;
  // console.log(state, action);
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + state.step };
    case "dec":
      return { ...state, count: state.count - state.step };
    case "setCounter":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "reset":
      return initialState;
    default:
      throw new Error("Unknown error😮😮");
  }
}
const initialState = { count: 0, step: 1 };
function DateCounter() {
  // const [count, setCount] = useState(0);
  // const [count, dispatcher] = useReducer(reducer, 0);
  const [state, dispatcher] = useReducer(reducer, initialState);
  // const [step, setStep] = useState(1);
  const { count, step } = state;
  console.log(count, step);

  // This mutates the date object.
  const date = new Date("june 06 2024");
  date.setDate(date.getDate() + count);

  const dec = function () {
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
    dispatcher({ type: "dec" });
  };

  const inc = function () {
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
    dispatcher({ type: "inc" });
  };

  const defineCount = function (e) {
    // setCount(Number(e.target.value));
    dispatcher({ type: "setCounter", payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    // setStep(Number(e.target.value));
    dispatcher({ type: "setStep", payload: Number(e.target.value) });
  };

  const reset = function () {
    // setCount(0);
    // setStep(1);
    dispatcher({ type: "reset", payload: initialState });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;

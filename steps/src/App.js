import React, { useState } from "react";
import "./index.css";

function App() {
  const [step, setStep] = useState(1);
  function handlePrevious() {
    step > 1 && setStep((step) => step - 1);
    console.log(step);
  }
  function handleNext() {
    step < 3 && setStep((step) => step + 1);
    console.log(step);
  }
  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>
      <div className="message">
        {step === 1 && `Step ${step}: Learn React ⚛️`}
        {step === 2 && `Step ${step}: Apply for jobs 💼`}
        {step === 3 && `Step ${step}: Invest your new income 🤑`}
      </div>
      <div className="buttons">
        <button
          className="buttons button"
          style={{ backgroundColor: " #7950f2", color: " #fff" }}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          className="buttons button span"
          style={{ backgroundColor: "#7950f2", color: " #fff" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;

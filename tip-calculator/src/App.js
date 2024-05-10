import { useState } from "react";
import "./App.css";

function App() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState("");
  const [percentage2, setPercentage2] = useState("");

  function handleReset() {
    setBill("");
    setPercentage1("");
    setPercentage2("");
  }
  return (
    <div className="App">
      <Bill bill={bill} onSetBill={(e) => setBill(Number(e.target.value))} />
      <TipPercentge
        bill={bill}
        myPercentage={Number((e) => e.target.value)}
        onSelect={(e) =>
          setPercentage1((Number(bill) * Number(e.target.value)) / 100)
        }
      />
      <TipPercentge
        bill={bill}
        myPercentage={Number((e) => e.target.value)}
        onSelect={(e) =>
          setPercentage2((Number(bill) * Number(e.target.value)) / 100)
        }
      />
      <Message
        onSetBill={setBill}
        bill={bill}
        percentage={percentage1 + percentage2}
      >
        {" "}
        {`Your total is: $${
          +bill + percentage1 + percentage2
        } (bill $${bill} and tip $${percentage1 + percentage2})`}
      </Message>
      <Reset onHandleReset={handleReset} />
    </div>
  );
}

function Bill({ onSetBill, bill }) {
  return (
    <>
      <h2>How much is your bill? </h2>
      <input
        placeholder="enter bill amount"
        value={bill}
        onChange={onSetBill}
      ></input>
    </>
  );
}
function TipPercentge({ onSelect, myPercentage }) {
  return (
    <>
      <h2>Are you satisfied? </h2>
      <select onChange={onSelect} defaultValue={myPercentage}>
        <option value="0">Disatisfied 0%</option>
        <option value="5">Fair 5%</option>
        <option value="10">Good 10%</option>
        <option value="15">Satisfied 15%</option>
      </select>
    </>
  );
}

function Message({ children }) {
  return <div>{children}</div>;
}
function Reset({ onHandleReset }) {
  return (
    <div>
      <button onClick={onHandleReset}>Reset</button>
    </div>
  );
}

export default App;

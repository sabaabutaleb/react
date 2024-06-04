import { useEffect, useState } from "react";

// const API = `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`;
const API = `https://api.frankfurter.app/latest?amount=`;

export default function App() {
  const [value, setValue] = useState("100");
  const [valueFrom, setValueFrom] = useState("EUR");
  const [valueTo, setValueTo] = useState("USD");
  const [convertedValue, setConvertedValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function convert() {
      setIsLoading(true);
      const res = await fetch(`${API}${value}&from=${valueFrom}&to=${valueTo}`);
      const data = await res.json();
      // setValue((value) => data.rates);
      console.log(data.rates[valueTo]);
      setConvertedValue(data.rates[valueTo]);
      setIsLoading(false);
    }
    if (valueFrom === valueTo) return setConvertedValue(value);
    convert();
  }, [value, valueFrom, valueTo, setConvertedValue]);
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <select value={valueFrom} onChange={(e) => setValueFrom(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={valueTo} onChange={(e) => setValueTo(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      {isLoading ? (
        <p>"Loading..."</p>
      ) : (
        <p>
          {convertedValue} {valueTo}
        </p>
      )}
    </div>
  );
}

import { useState } from "react";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const opt = ["/", "*", "+", "-", "."];

  const updateCal = (val) => {
    if( opt.includes(val) && calc === "" || opt.includes(val) 
    && opt.includes(calc.slice(-1))){
      return
    }
    setCalc(calc + val);
    if(!opt.includes(val)){
      setResult(eval(calc+val).toString())
    }
  };

  const calculate = ()=>{
    if(calc === ""){
      return ;
    }
    setCalc(eval(calc).toString());
  }
  const deleteLast =()=>{
    if(calc === ""){
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value)
  }

  const displayDigit = () => {
    const digit = [];

    for (let i = 1; i < 10; i++) {
      digit.push(
        <button onClick={() => updateCal(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return digit;
  };
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>({result})</span> : ""}
          {calc || "0"}
        </div>
        <div className="operator">
          <button onClick={() => updateCal("/")}>/</button>
          <button onClick={() => updateCal("*")}>*</button>
          <button onClick={() => updateCal("-")}>-</button>
          <button onClick={() => updateCal("+")}>+</button>
          <button onClick={deleteLast}>DEL</button>
        </div>
        <div className="digits">
          {displayDigit()}
          <button onClick={() => updateCal("0")}>0</button>
          <button onClick={() => updateCal(".")}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;

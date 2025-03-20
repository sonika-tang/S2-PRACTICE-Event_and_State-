import React from "react";
import { useState } from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);
  /* You will need some function to handle the key pressed and button events */
  const handleNum1 = (state) =>{
    setNum1(state.target.value)
  }

  const handleNum2 = (state) => {
    setNum2(state.target.value)
  }

  const handleCompute = () => {
    const parseNum1 = parseFloat(num1);
    const parseNum2 = parseFloat(num2);
    if (isNaN(parseNum1) || isNaN(parseNum2)){
      setResult("Invalid")
    } else{
      setResult(parseNum1 + parseNum2)
    }
  }

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input value={num1} onChange={handleNum1}/>

      <label>B =</label>
      <input value={num2} onChange={handleNum2}/>

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input value={result !== null ? result : ""} disabled style={{ color: isNaN(result) ? "red" : "black" }}/>
      <button onClick={handleCompute}>Compute</button>
    </main>
  );
}

export default App;

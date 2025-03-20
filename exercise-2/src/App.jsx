import React from "react";
function App() {
  /* You will need to use a boolean state to keep the value of the text entered */
  const [state, setState] = React.useState("");

  /* You will need a function to handle a key pressed on the first input and update the state*/
  return (
    <main>
      <h1>Upper Case Converter</h1>

      <label>Enter any text !</label>
      <input
        type="text"
        value ={state}
        onChange={(even)=> setState(even.target.value)} />

      <p>
        <label>Here is the text in upper case</label>

        {/* This input will need to display the text entered in lower case */}
        <input disabled type="text" value={state.toUpperCase()}/>
      </p>
    </main>
  );
}

export default App;

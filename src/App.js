import React, { useState } from "react";

import { ballClock, results } from "./function";
import "./App.css";

function App() {
  const [form, setValues] = useState({ input: "" });

  const handleChange = e =>
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });

  const handleSubmit = e => {
    e.preventDefault();
    ballClock(form.input);
    setValues({ ...form, input: "" });
  };

  return (
    <div className="App">
      <h1>Ball Clock</h1>
      <form onSubmit={e => handleSubmit(e)}>
        <input
          className="input"
          type="input"
          name="input"
          placeholder="Input Ball Count"
          value={form.input}
          onChange={handleChange}
        ></input>
        <button className="button" type="submit">
          Submit
        </button>
      </form>
      <br />

      <h3>{results}</h3>
    </div>
  );
}

export default App;

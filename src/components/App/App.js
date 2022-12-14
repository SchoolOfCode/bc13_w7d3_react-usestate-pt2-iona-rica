import React from "react";
import "./App.css";
import Input from "../Input";
import Item from "../Item";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  function handleChange(event) {
    setText(event.target.value);
    console.log(text);
  }

  return (
    <div className="App">
      <h1>Rica & Iona amazing font Checker</h1>
      <Input duck={handleChange}> </Input>
      <Item userText={text} font="monospace" />
      <Item userText={text} font="quicksand" />
      <Item userText={text} font="monospace" />
      <Item userText={text} font="bebas neue" />
    </div>
  );
}

export default App;

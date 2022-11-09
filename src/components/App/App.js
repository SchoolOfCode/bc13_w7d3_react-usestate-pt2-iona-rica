import React from "react";
import "./App.css";
import Input from "../Input";
import Item from "../Item";
import { useState } from "react";

function App() {

const [text, setText] = useState("")

function handleChange(event) {
   setText(event.target.value)
   console.log(text) 
}

  return (
    <div className="App">
      <h1>Rica & Iona amazing font Checker</h1>
      <Input onChange={handleChange}> </Input>
      <Item />
      <Item />
      <Item />
    </div>
  );
}

export default App;


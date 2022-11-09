import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App/App";

const fs = require("fs");

describe("Task 2", () => {
  it("2.1 - App.js should return both Input and Item components", () => {
    let isReactElementInput = false;
    try {
      var appComp = fs.readFileSync("./src/components/App/app.js", "utf8");
      // 1. reads the whole file App.js
      let afterReturn = appComp.split('className="App">')[1];
      // 2. splits after the word return className="App">
      afterReturn.includes("Input") &&
        afterReturn.includes("Item") &&
        (isReactElementInput = true);
      // 3. checks if the Input and Item are in the doc
    } catch (error) {
      console.error("There is No File Called '/App/App.js' please make one ");
    }
    render(<App />);
    let input = document.querySelector("input");
    let li = document.querySelector("li");

    expect(isReactElementInput).toBeTruthy();
    expect(input).toBeInTheDocument();
    expect(li).toBeInTheDocument();
  });

  it('2.5 - should hand a "text" useState down as props to the Item component', () => {
    var inputComp = fs.readFileSync("./src/components/Item/index.js", "utf8");
    //1. reads the file Item

    let props = inputComp.split("(")[1].split(")")[0].toLowerCase();
    //2. splits at the function param
    expect(props.includes("text") || props.includes("props.text")).toBeTruthy();
  });
});

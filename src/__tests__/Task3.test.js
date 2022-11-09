import React from "react";

import { render, fireEvent, screen } from "@testing-library/react";
import fs from "fs";
// const { default: App } = require('../components/App/App')
import App from "../components/App/App";
import Input from "../components/Input/index";
import Item from "../components/Item";

describe("Task3", () => {
  it('3.1 - should hand a "font" useState down as props to the element style Atribute', () => {
    let font = "Helevetica";
    let text = "random text";
    render(<Item text={text} font={font} />);
    let li = screen.getByText(text);

    expect(li).toHaveStyle(`
    font-family: ${font}
    `);
  });

  it("3.2 - should render two elements or more with different fonts", () => {
    render(<App />);
    let fontStyles = [];
    document
      .querySelectorAll("li")
      .forEach((li) => fontStyles.push(li.style.fontFamily));
    //1. get the liTags and grab the style attribute with each font family

    let uniqueFonts = [...new Set(fontStyles)];
    //2. remove any duplicates
    expect(uniqueFonts.length > 1).toBeTruthy();
    //3. check it there is more then one fontfamily
  });

  it("3.3 - should render two elements or more with textcontent", () => {
    // 1. render App.js to get both input and Lis
    // 2. get input component and change the value of said input with (fireEvent)
    // a. investigate queryselector and screen.query
    // 3. expect the input to contain value off var
    // 4. expect the lis to be in the document with text value
    //
    render(<App />);

    let input = document.querySelector("input");

    let text = "testing123456789testing";
    fireEvent.change(input, { target: { value: text } });
    let lis = screen.getAllByText(text);
    lis.forEach((li) => {
      expect(li).toHaveTextContent(text);
    });

    expect(input).toHaveValue(text);
  });
});

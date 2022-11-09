import React from "react";

import Input from "../components/Input/index";
import Item from "../components/Item";

describe("Task 1", () => {
  // ---------------------------------------

  it("1.5a - Create a fuctional component called Input inside the file 'Input/index.js file and return an input tag'", () => {
    const isValidElement = React.isValidElement(<Input />);
    // check is it a valid react element

    let props = { handleChange: () => "" };

    let retrunedType = Input(props).type;
    // check
    expect(retrunedType).toEqual("input");
    expect(isValidElement).toBeTruthy();
  });

  it("1.5b - Create a fuctional component called Item inside the file 'Item/index.js file and return an <li> tag'", () => {
    const isValidElement = React.isValidElement(<Item />);
    let props = { text: "", font: "" };
    let returnedType = Item(props).type; //gets the element type that is returned from component

    expect(returnedType).toEqual("li");
    expect(isValidElement).toBeTruthy();
  });
});

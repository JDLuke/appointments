import React from "react";
import {form, initializeReactContainer, render, field } from "./reactTestExtensions";
import {CustomerForm} from "../src/CustomerForm";

describe("CustomerForm", () => {
  const blankCustomer = { firstName: "" }
  beforeEach(() => {
    initializeReactContainer();
  });

  it("renders a form", () => {
    render(<CustomerForm original={blankCustomer}/>);
    expect(form()).not.toBeNull();
  })

  it("renders the first name field as a text box", () => {
    render(<CustomerForm original={blankCustomer}/>);
    const name = field('firstName')
    expect(name).not.toBeNull();
    expect(name.tagName).toEqual("INPUT");
    expect(name.type).toEqual("text");
  })

  it("includes the existing first name value", () => {
    const customer = {firstName: "Ashley"};
    render(<CustomerForm original={customer} />)
    expect(field('firstName').value).toEqual("Ashley");
  })
});
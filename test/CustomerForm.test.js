import React from "react";
import {form, initializeReactContainer, render} from "./reactTestExtensions";
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
    const field = form().elements.firstName
    expect(field).not.toBeNull();
    expect(field.tagName).toEqual("INPUT");
    expect(field.type).toEqual("text");
  })

  it("includes the existing first name value", () => {
    const customer = {firstName: "Ashley"};
    render(<CustomerForm original={customer} />)
    const field = form().elements.firstName;
    expect(field.value).toEqual("Ashley");
  })
});
import React from "react";
import {form, initializeReactContainer, render, field, element, click, submit} from "./reactTestExtensions";
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
    expect(field('firstName')).not.toBeNull();
    expect(field('firstName').tagName).toEqual("INPUT");
    expect(field('firstName').type).toEqual("text");
  })

  it("includes the existing first name value", () => {
    const customer = {firstName: "Ashley"};
    render(<CustomerForm original={customer} />)
    expect(field('firstName').value).toEqual("Ashley");
  })

  it("renders a label for the first name field", () => {
    render(<CustomerForm original={blankCustomer} />);
    const label = element("label[for=firstName]");
    expect(label).not.toBeNull();
  })

  it("assigns an id that matches the label id to the first name field", () => {
    render(<CustomerForm original={blankCustomer} />);
    expect(field("firstName").id).toEqual("firstName");
  })

  it("renders 'First name' as the first name label content", () => {
    render(<CustomerForm original={blankCustomer} />);
    const label = element("label[for=firstName]");
    expect(label).toContainText("First name");
  })

  it("renders a submit button", () => {
    render(<CustomerForm original={blankCustomer} />);
    const button = element("input[type=submit]");
    expect(button).not.toBeNull();
  })

  it("saves existing first name when submitted", () => {
    expect.hasAssertions();

    const customer = {firstName: "Ashley"};
    render(<CustomerForm original={customer} onSubmit={({firstName})=>expect(firstName).toEqual("Ashley")} />);

    const button = element("input[type=submit]");
    click(button);

  })

  it("prevents the default action when submitting the form", () => {
    render(<CustomerForm original={blankCustomer} onSubmit={()=>{}} />);
    const event = submit(form());
    expect(event.defaultPrevented).toBe(true);
  })
});
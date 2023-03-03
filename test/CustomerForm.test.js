import React from "react";
import {
  form,
  initializeReactContainer,
  render,
  field,
  element,
  click,
  submit,
  submitButton, change
} from "./reactTestExtensions";
import {CustomerForm} from "../src/CustomerForm";

describe("CustomerForm", () => {
  const blankCustomer = {firstName: "", lastName: "", phoneNumber: ""}
  beforeEach(() => {
    initializeReactContainer();
  });

  it("renders a form", () => {
    render(<CustomerForm original={blankCustomer}/>);
    expect(form()).not.toBeNull();
  })
  const itRendersAsATextBox = (fieldName) =>
    it("renders as a text box", () => {
      render(<CustomerForm original={blankCustomer}/>);
      expect(field(fieldName)).not.toBeNull();
      expect(field(fieldName).tagName).toEqual("INPUT");
      expect(field(fieldName).type).toEqual("text");
    })
  const itIncludesTheExistingValue = (fieldName, existing) =>
    it("includes the existing value", () => {
      const customer = {[fieldName]: existing};
      render(<CustomerForm original={customer}/>)
      expect(field(fieldName).value).toEqual(existing);
    })
  const itRendersALabelForTheField = (fieldName, text) => {
    it("renders a label for the field", () => {
      render(<CustomerForm original={blankCustomer}/>);
      const label = element(`label[for=${fieldName}]`);
      expect(label).not.toBeNull();
    })
    it("renders the label content", () => {
      render(<CustomerForm original={blankCustomer}/>);
      const label = element(`label[for=${fieldName}]`);
      expect(label).toContainText(text);
    })
  }
    const itAssignsAMatchingId = (fieldName) =>
    it("assigns an id that matches the label id", () => {
      render(<CustomerForm original={blankCustomer}/>);
      expect(field(fieldName).id).toEqual(fieldName);
    })
  const itSavesNewValueWhenSubmitted = (fieldName, newValue) =>
    it("saves the new value when submitted.", () => {
      expect.hasAssertions();
      render(<CustomerForm original={blankCustomer} onSubmit={(customer) => expect(customer[fieldName]).toEqual(newValue)}/>);
      change(field(fieldName), newValue);
      click(submitButton());
    })
  //This is an important pattern!
  const itSubmitsExistingValue = (fieldName, originalValue) =>
    it("saves existing value when submitted", () => {
      expect.hasAssertions();
      const customer = {[fieldName]: originalValue};
      render(<CustomerForm original={customer} onSubmit={(customer) => expect(customer[fieldName]).toEqual(originalValue)}/>);
      click(submitButton());
    })

  describe("first name field", () => {
    itRendersAsATextBox('firstName');
    itIncludesTheExistingValue('firstName', 'Ashley');
    itRendersALabelForTheField('firstName', 'First name');
    itAssignsAMatchingId('firstName');
    itSubmitsExistingValue('firstName', "Ashley");
    itSavesNewValueWhenSubmitted('firstName', 'Jamie');
  });

  describe("last name field", () => {
    itRendersAsATextBox('lastName')
    itIncludesTheExistingValue('lastName', 'Ashley');
    itRendersALabelForTheField('lastName', 'Last name');
    itAssignsAMatchingId('lastName');
    itSubmitsExistingValue('lastName', "Ashley");
    itSavesNewValueWhenSubmitted('lastName', 'Jamie');
  })

  describe("phone number field", () => {
    const fieldName = 'phoneNumber';
    itRendersAsATextBox(fieldName)
    itIncludesTheExistingValue(fieldName, '1234567');
    itRendersALabelForTheField(fieldName, 'Telephone Number');
    itAssignsAMatchingId(fieldName);
    itSubmitsExistingValue(fieldName, "1234567");
    itSavesNewValueWhenSubmitted(fieldName, '7654321');
  })


  it("renders a submit button", () => {
    render(<CustomerForm original={blankCustomer}/>);
    expect(submitButton()).not.toBeNull();
  })



  // And so is this.
  it("prevents the default action when submitting the form", () => {
    render(<CustomerForm original={blankCustomer} onSubmit={() => {
    }}/>);
    const event = submit(form());
    expect(event.defaultPrevented).toBe(true);
  })


});
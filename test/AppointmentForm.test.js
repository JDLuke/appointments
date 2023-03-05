import React from "react";
import {field, form, initializeReactContainer, render} from "./reactTestExtensions";
import {AppointmentForm} from "../src/AppointmentForm";


describe("AppointmentForm", () => {
  beforeEach(() => {
    initializeReactContainer();
  })
  it("renders an appointment form", () => {
    render(<AppointmentForm/>);
    expect(form()).not.toBeNull();
  })

  describe("service field", () => {
    it("renders as a select box", () => {
      render(<AppointmentForm />);
      expect(field("service")).not.toBeNull();
      expect(field("service").tagName).toEqual("SELECT")
    });
  })
})
import React from "react";
import {form, initializeReactContainer, render} from "./reactTestExtensions";
import {AppointmentForm} from "../src/AppointmentForm";


describe("AppointmentForm", () => {
  beforeEach(() => {
    initializeReactContainer();
  })
  it("renders an appointment form", () => {
    render(<AppointmentForm/>)
    expect(form()).not.toBeNull();
  })
})
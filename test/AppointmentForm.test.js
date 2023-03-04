import React from "react";
import {initializeReactContainer, render} from "./reactTestExtensions";
import {AppointmentForm} from "../src/AppointmentForm";


describe("AppointmentForm", () => {
  beforeEach(() => {
    initializeReactContainer();
  })
  it("renders an appointment form", () => {
    render(<AppointmentForm/>)
  })
})
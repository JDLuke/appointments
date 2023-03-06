import React from "react";
import {field, form, initializeReactContainer, render} from "./reactTestExtensions";
import {AppointmentForm} from "../src/AppointmentForm";


describe("AppointmentForm", () => {
  const labelsOfAllOptions = (element) => Array.from(element.childNodes, (node)=>node.textContent);
  beforeEach(() => {
    initializeReactContainer();
  })
  it("renders an appointment form", () => {
    render(<AppointmentForm selectableServices={[]}/>);
    expect(form()).not.toBeNull();
  })

  describe("service field", () => {
    it("renders as a select box", () => {
      render(<AppointmentForm selectableServices={[]}/>);
      expect(field("service")).not.toBeNull();
      expect(field("service").tagName).toEqual("SELECT")
    });
  })
  it("has a blank value as the first value", () => {
    render(<AppointmentForm selectableServices={[]}/>);
    const firstOption = field("service").childNodes[0];
    expect(firstOption.value).toEqual("");
  })
  it("lists all salon services", () => {
    const services = ["Cut", "Dry"];

    render(<AppointmentForm selectableServices={services} />);
    expect(labelsOfAllOptions(field("service"))).toEqual(expect.arrayContaining(services))
  })
})
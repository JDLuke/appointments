import React from "react";
import {element, field, form, initializeReactContainer, render} from "./reactTestExtensions";
import {AppointmentForm} from "../src/AppointmentForm";


describe("AppointmentForm", () => {
  const findOption = (selectBox, textContent) => {
    const options = Array.from(selectBox.childNodes);
    return options.find(option => option.textContent === textContent)
  }
  const labelsOfAllOptions = (element) => Array.from(element.childNodes, (node)=>node.textContent);

  const blankAppointment = { service: "" };

  beforeEach(() => {
    initializeReactContainer();
  })
  it("renders an appointment form", () => {
    render(<AppointmentForm original={blankAppointment}/>);
    expect(form()).not.toBeNull();
  })

  describe("service field", () => {
    it("renders as a select box", () => {
      render(<AppointmentForm original={blankAppointment}/>);
      expect(field("service")).not.toBeNull();
      expect(field("service").tagName).toEqual("SELECT")
    });

    it("has a blank value as the first value", () => {
      render(<AppointmentForm original={blankAppointment}/>);
      const firstOption = field("service").childNodes[0];
      expect(firstOption.value).toEqual("");
    });

    it("lists all salon services", () => {
      const services = ["S1", "S2"];

      render(<AppointmentForm selectableServices={services}  original={blankAppointment}/>);
      expect(labelsOfAllOptions(field("service"))).toEqual(expect.arrayContaining(services))
    });

    it("pre-selects the existing value", () => {
      const services = ["Cut", "Dry"];
      const appointment = {service: "Dry"};
      render(<AppointmentForm selectableServices={services} original={appointment} />);
      const option = findOption(field("service"), "Dry");
      expect(option.selected).toBe(true)
    });
  });
  describe("time slot table", () => {
    it("renders a table for time slots with an id", () => {
      render(<AppointmentForm original={blankAppointment} />);
      expect(element("table#time-slots")).not.toBeNull();
    })
  })
});
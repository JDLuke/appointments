import React from "react";
import {click, elements, initializeReactContainer, render, textOf, typesOf} from "./reactTestExtensions";
import {Appointment, AppointmentsDayView} from "../src/AppointmentsDayView";

describe('Appointment', () => {
  beforeEach(() => {
    initializeReactContainer();
  })
  it('renders the customer first name', () => {
    const customer = {firstName: 'Ashley'};
    render(<Appointment customer={customer}/>);
    expect(document.body.textContent).toContain('Ashley');
  })

  it('renders a second customer first name', () => {
    const customer = {firstName: 'Michael'};
    render(<Appointment customer={customer}/>);
    expect(document.body.textContent).toContain('Michael');
  })

  it('renders the customer last name', () => {
    const customer = {lastName: 'Jones'};
    render(<Appointment customer={customer}/>);
    expect(document.body.textContent).toContain('Jones')
  })

  it('renders a second customer last name', () => {
    const customer = {lastName: 'Simpson'};
    render(<Appointment customer={customer}/>);
    expect(document.body.textContent).toContain('Simpson')
  })
  it('renders the customers stylist', () => {
    const customer = {stylist: 'Bill'};
    render(<Appointment customer={customer}/>);
    expect(document.body.textContent).toContain('Bill')
  })
})

describe('AppointmentsDayView', () => {
  const today = new Date();
  const secondButton = elements("button")[1];
  const twoAppointments = [
    {startsAt: today.setHours(12, 0), customer: {firstName: "Ashley"}},
    {startsAt: today.setHours(13, 0), customer: {firstName: "Jordan"}}
  ];

  beforeEach(() => {
    initializeReactContainer();
  })
  it("renders a div with the right id", () => {
    render(<AppointmentsDayView appointments={[]}/>);
    expect(document.querySelector("div#appointmentsDayView")).not.toBeNull();
  });

  it("renders an ol element to display appointments", () => {
    render(<AppointmentsDayView appointments={[]}/>);
    const listElement = document.querySelector("ol");
    expect(listElement).not.toBeNull();
  })

  it("renders an li for each appointment", () => {
    render(<AppointmentsDayView appointments={twoAppointments}/>);
    expect(textOf(elements("ol > li"))).toHaveLength(2);
  })

  it("renders the time of each appointment", () => {
    render(<AppointmentsDayView appointments={twoAppointments}/>);
    expect(textOf(elements("li"))).toEqual(["12:00", "13:00"]);
  })

  it("initially shows a message saying there are no appointments today", () => {
    render(<AppointmentsDayView appointments={[]}/>);
    expect(document.body).toContainText("There are no appointments scheduled for today.")
  })

  it("selects the first appointment by default", () => {
    render(<AppointmentsDayView appointments={twoAppointments}/>);
    expect(document.body).toContainText("Ashley")
  })

  it("has a button element in each list item", () => {
    render(<AppointmentsDayView appointments={twoAppointments}/>);
    expect(typesOf(elements("li > *"))).toEqual(["button", "button"]);
  })

  it("renders another appointment when selected", () => {
    render(<AppointmentsDayView appointments={twoAppointments}/>);
    click(secondButton());
    expect(document.body).toContainText("Jordan")
  })
})
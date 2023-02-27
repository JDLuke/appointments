import React from "react";
import ReactDOM from "react-dom/client"
import {act} from "react-dom/test-utils"

import {Appointment, AppointmentsDayView} from "../src/AppointmentDayView";

describe('Appointment', () => {
  let container;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.replaceChildren(container)
  })
  const render = component => {
    act(() => ReactDOM.createRoot(container).render(component))
  }

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
})

describe('AppointmentsDayView', () => {
  let container;

  const today = new Date();
  const twoAppointments = [
    {startsAt: today.setHours(12, 0), customer: {firstName: "Ashley"}},
    {startsAt: today.setHours(13, 0), customer: {firstName: "Jordan"}}
  ];

  beforeEach(() => {
    container = document.createElement("div");
    document.body.replaceChildren(container)
  })
  const render = component => {
    act(() => ReactDOM.createRoot(container).render(component))
  }

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
    const listChildren = document.querySelectorAll("ol > li");
    expect(listChildren).toHaveLength(2);
  })

  it("renders the time of each appointment", () => {
    render(<AppointmentsDayView appointments={twoAppointments}/>);
    const listChildren = document.querySelectorAll("li");
    expect(listChildren[0].textContent).toEqual("12:00");
    expect(listChildren[1].textContent).toEqual("13:00");
  })

  it("initially shows a message saying there are no appointments today", () => {
    render(<AppointmentsDayView appointments={[]}/>);
    expect(document.body.textContent).toContain("There are no appointments scheduled for today.")
  })

  it("selects the first appointment by default", () => {
    render(<AppointmentsDayView appointments={twoAppointments}/>);
    expect(document.body.textContent).toContain("Ashley")
  })

  it("has a button element in each list item", () => {
    render(<AppointmentsDayView appointments={twoAppointments}/>);
    const buttons = document.querySelectorAll("li > button");
    expect(buttons).toHaveLength(2);
  })

  it("renders another appointment when selected", () => {
    render(<AppointmentsDayView appointments={twoAppointments}/>);
    const button = document.querySelectorAll("button")[1];
    act(() => button.click());
    expect(document.body.textContent).toContain("Jordan")
  })
})
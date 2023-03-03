import React from "react";
import ReactDOM from "react-dom/client";
// import {AppointmentsDayView} from "./AppointmentsDayView";
// import {sampleAppointments} from "./sampleData";
import {CustomerForm} from "./CustomerForm";

const original = {firstName: 'Joe', lastName: 'Wong'}
const update = val => console.debug(val)
ReactDOM.createRoot(document.getElementById("root"))
// .render(<AppointmentsDayView appointments={sampleAppointments} />);
.render(<CustomerForm onSubmit={update} original={original} />)
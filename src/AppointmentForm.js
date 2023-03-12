import React from "react";

const TimeSlotTable = () => <table id="time-slots" />

export const AppointmentForm = ({selectableServices, original}) => (
  <form>
    <select name="service" value={original.service}>
      <option />
        {selectableServices.map(service=>(
            <option key={service}>{service}</option>
            ))}
    </select>
      <TimeSlotTable />
  </form>
);

AppointmentForm.defaultProps = {
    selectableServices: [
        "Cut",
        "Blow-Dry",
        "Cut & Color",
        "Beard Trim",
        "Cut & Beard Trim",
        "Extensions",
    ]
};

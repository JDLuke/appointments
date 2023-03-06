import React from "react";
export const AppointmentForm = ({selectableServices}) => (
  <form>
    <select name="service">
      <option />
        {selectableServices.map(service=>(
            <option key={service}>{service}</option>
            ))}
    </select>
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

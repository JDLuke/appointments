import React, {useState} from 'react'

const appointmentTimeOfDay = (startsAt) => {
  const [h, m] = new Date(startsAt)
    .toTimeString()
    .split(":");
  return `${h}:${m}`;
}
export const Appointment = ({customer}) => {
  return (<table>
    <tbody>
    <tr>
      <td>{customer.firstName}</td>
    </tr>
    <tr>
      <td>{customer.lastName}</td>
    </tr>
    <tr>
      <td>{customer.stylist}</td>
    </tr>
    </tbody>
  </table>)
}

export const AppointmentsDayView = ({appointments}) => {
  const [selectedAppointment, setSelectedAppointment] = useState(0)
  return (<div id="appointmentsDayView">
      <table>
        <tbody>
        <tr>
          <td>
            <ol>
              {appointments.map((appointment, i) => (<li key={appointment.startsAt}>
                <button
                  type="button"
                  onClick={() => setSelectedAppointment(i)}
                >
                  {appointmentTimeOfDay(appointment.startsAt)}
                </button>
              </li>))}
            </ol>
          </td>
          <td>
            {appointments.length === 0 ? (<p>There are no appointments scheduled for today.</p>) : (
              <Appointment {...appointments[selectedAppointment]} />)}</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}

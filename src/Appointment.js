import React from 'react'
export const Appointment = ({ customer }) => customer.firstName;

export const AppointmentsDayView = ({appointments}) => (
    <div id="appointmentsDayView">
        <ol>
            {appointments.map((appointment) => (<li key={appointment.startsAt} />))}
        </ol>
    </div>);

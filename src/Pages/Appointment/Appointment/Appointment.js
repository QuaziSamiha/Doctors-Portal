import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    return (
        <div>
            <Navigation />
            <AppointmentHeader />
            <AvailableAppointment />
            <h1>this is appointment</h1>
        </div>
    );
};

export default Appointment;
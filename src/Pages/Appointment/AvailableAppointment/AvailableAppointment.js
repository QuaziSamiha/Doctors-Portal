import { Grid, Typography } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        space: 10,
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM - 10.00 AM',
        space: 8,
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '09.00 AM - 10.00 AM',
        space: 9,
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '06.00 AM - 07.00 AM',
        space: 10,
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '06.00 AM - 07.00 AM',
        space: 10,
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '07.00 AM - 08.00 AM',
        space: 10,
    }
]
const AvailableAppointment = ({ date }) => {
    return (
        <div>
            <Typography sx={{ color: 'info.main', mb: 2 }} variant='h5' gutterBottom component='div'>
                Available Appointments on {date.toDateString()}
            </Typography>
            <Grid container spacing={2}>
                {
                    bookings.map((booking, index) => <Booking
                        key={index}
                        booking={booking}
                        date={date}
                    />
                    )
                }
            </Grid>
        </div>
    );
};

export default AvailableAppointment;
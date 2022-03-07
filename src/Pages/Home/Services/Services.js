import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/tooth1.png';
import cavity from '../../../images/tooth2.png';
import whitening from '../../../images/tooth3.png';
import Typography from '@mui/material/Typography';

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));

const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio illum quae incidunt, est similique autem ad delectus molestias, inventore nisi atque. Sit inventore animi impedit ex qui, a quae excepturi',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio illum quae incidunt, est similique autem ad delectus molestias, inventore nisi atque. Sit inventore animi impedit ex qui, a quae excepturi',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio illum quae incidunt, est similique autem ad delectus molestias, inventore nisi atque. Sit inventore animi impedit ex qui, a quae excepturi',
        img: whitening
    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 400, m: 2, color: 'success.main' }} variant="h6" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 500, m: 2 }} variant="h4" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                    {
                        services.map((service, index) => <Service service={service} key={index} />)
                    }
                </Grid>
            </Container>
        </Box >
    );
};

export default Services;
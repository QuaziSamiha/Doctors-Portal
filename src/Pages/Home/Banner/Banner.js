import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Box } from '@mui/system';

const bannerBg = {
    background: `url(${bg})`,
    height: 450
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    // border: '1px solid red'
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={5}>
                    <Box>
                        <Typography variant='h3'>
                            Your new Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant='h6' sx={{ fontSize: 13, fontWeight: 300, color: 'gray' }}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur culpa consequatur exercitationem laboriosam doloremque dicta soluta veniam eum magnam expedita!
                        </Typography>
                        <Button variant='contained' style={{ backgroundColor: '#5CE7ED' }}>GET APPOINTMENT</Button>

                    </Box>
                </Grid>
                <Grid item xs={12} md={7} style={verticalCenter}>
                    <img style={{ width: '300px' }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;
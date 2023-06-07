import React from 'react'
import Sidenav from '../Components/Sidenav'
import Box from '@mui/material/Box';
import Navbar from '../Components/Navbar'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
const Home = () => {
    return (
        <>
            <Navbar />
            <Box height={50} />
            <Box sx={{ display: 'flex' }}>
                <Sidenav />

                <Box component="main" sx={{ flexGrow: 0, p: 5 }}>
                    <Box height={20} />
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Card sx={{ maxwidth: 345 }}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with
                                        over 6,000 species, ranging across all continents except
                                        Antarctica
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={4}></Grid>
                    </Grid>
                    <Box height={20} />
                    <Grid container spacing={2}>
                        <Grid item xs={8}></Grid>
                        <Grid item xs={4}></Grid>
                    </Grid>
                </Box>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                </Box>
            </Box>
        </>

    )
}

export default Home
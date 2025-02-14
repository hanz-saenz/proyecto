import React from "react";
import { Box, Typography, Card, Grid, CardMedia } from "@mui/material";

const AboutUs = () => {


    return (
        <>
        <Box sx={{ padding: '60px', backgroundColor: '#f7f7f7' }}>
            <Typography variant="h4" gutterBottom align="center"
                sx={{
                    marginBottom: '30px',
                    fontWeight: 'bold',
                    color: '#333',
                    letterSpacing: '0.05em',

                }}  
            >
                Sobre nosotros
            </Typography>
            <Grid container spacing={5} alignItems="center">
                <Grid item xs={12} md={6}>
                    <Typography variant="h5" gutterBottom
                        sx={{
                            fontWeight: 'bold',
                        }}
                    >
                        Misión        
                    </Typography>
                    <Typography variant="body1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="200"
                            image="https://stripo.email/photos/shares/Blog/element-s-width-and-height.webp"
                            alt="Misión"
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}  order={{ xs: 2, md: 1 }}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="200"
                            image="https://stripo.email/photos/shares/Blog/element-s-width-and-height.webp"
                            alt="Misión"
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
                    <Typography variant="h5" gutterBottom 
                        sx={{
                            fontWeight: 'bold',
                        }}
                    >
                        Visión        
                    </Typography>
                    <Typography variant="body1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                </Grid>
                
                
            </Grid>
        </Box>
        
        </>
    )
};

export default AboutUs;

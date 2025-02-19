import React, {useState, useEffect } from "react";
import axios from "axios";
import urlApi from "../ApiUrl";
import { Box, Typography, Card, CardMedia, CardContent, Grid } from "@mui/material";

const Galery = () => {

    const [pets, setPets] = useState([]);

    const getPets = async () => {
        try {
            axios.get(`${urlApi}/pets/`,
            // {
            //     headers: {
            //         Authorization: `Bearer ${localStorage.getItem('token')}`
            //     }
            // }
            )
            .then((response) => {
                setPets(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

        } catch (error) {
            console.log('Error al consultar mascotas:', error);
        }
    };

    useEffect(() => {    
        getPets();
    }, []);

    return (  
        <>
        <Box
            sx={{
                padding: { xs: "10px", sm: "40px" },
                backgroundColor: "#f5f5f5",
                minHeight: "100vh",
            }}
        >

            <Typography
                variant="h4"
                align="center"
                sx={{
                    marginBottom: "30px",
                    fontWeight: "bold",
                    color: "#333",
                    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
                }}
            >
                Conoce a nuestras Mascotas
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                {pets.map((pet) => (
                    <Grid item xs={12} sm={6} md={4} key={pet.id}>

                        <Card
                        
                            sx={{
                                transition: "transform 0.3s, box-shadow 0.3s",
                                "&:hover": {
                                    transform: "scale(1.05)",
                                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
                                },
                                borderRadius: "20px",
                                overflow: "hidden",
                            }}
                        >
                            <CardMedia
                                component={'img'}
                                height="200"
                                image={pet.photo}
                                sx={{
                                    filter: "brightness(0.8)",
                                    transition: "filter 0.3s",
                                    "&:hover": {
                                        filter: "brightness(100%)",
                                    }
                                }}
                            />
                            <CardContent
                                sx={{
                                    backgroundColor: "#fafafa",
                                    textAlign: "center",
                                }}
                            >
                                <Typography variant="body1" sx={{ color: "#1e88e5"}}>Nombre: {pet.name}</Typography>
                                <Typography variant="body1" sx={{ color: "#1e88e5"}}>Edad: {pet.age}</Typography>

                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
        </>
      );

};

export default Galery;
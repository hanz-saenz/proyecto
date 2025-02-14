import React, { useState, useEffect } from "react";
import { Box, Typography, Paper, Grid2 } from "@mui/material";

const PetsCount = () => {

    const petData = {
        adoptados: 15,
        enAdopcion: 10,
        rescatados: 10,
    };

    const [ counts, setCounts] = useState({
        adoptados: 0,
        enAdopcion: 0,
        rescatados: 0,
    });

    useEffect(() => {
        const incrementCounts = () => {
            setCounts((prevCounts) => ({
                adoptados: Math.min(prevCounts.adoptados + 1, petData.adoptados),
                enAdopcion: Math.min(prevCounts.enAdopcion + 1, petData.enAdopcion),
                rescatados: Math.min(prevCounts.rescatados + 1, petData.rescatados),
            }));
        };

        const interval = setInterval(() => {
            incrementCounts();
        }, 100); // Incrementa cada 100ms

        return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
    }, []);

    return (
        <>
        <Box sx={{ 
                padding: { xs: '20px', md: '40px' },
                backgroundColor: "#f5f5f5",
                marginTop: "50px",
                }}>
            <Typography variant="h4" gutterBottom align="center"
            sx={{
                marginBottom: "30px",
                color: "#333",
            }}>
                Nuestros numeros peludos
            </Typography>
            <Grid2 container spacing={3} justifyContent={"center"}>
                <Grid2 item xs={12} sm={6} md={4}>
                    <Paper
                        sx={{
                            padding: '20px',
                            textAlign: 'center',
                            backgroundColor: '#e3f2fd',
                            borderRadius: '15px',
                            transition: "transform 0.3s",
                            "&:hover": {
                                transform: "scale(1.05)",
                            }
                        }}
                    >
                        <Typography variant="h5" gutterBottom>
                            Adoptados
                        </Typography>
                        <Typography variant="h4" gutterBottom
                            sx={{
                                fontWeight: 'bold',
                                color: "#1e88e5",
                            }}
                        >
                            {counts.adoptados}
                        </Typography>
                    </Paper>
                </Grid2>
                <Grid2 item xs={12} sm={6} md={4}>
                    <Paper
                        sx={{
                            padding: '20px',
                            textAlign: 'center',
                            backgroundColor: '#fff3e0',
                            borderRadius: '15px',
                            transition: "transform 0.3s",
                            "&:hover": {
                                transform: "scale(1.05)",
                            }
                        }}
                    >
                        <Typography variant="h5" gutterBottom>
                            En Adopción
                        </Typography>
                        <Typography variant="h4" gutterBottom  sx={{
                                fontWeight: 'bold',
                                color: "#1e88e5",
                            }}>
                            {counts.enAdopcion}
                        </Typography>
                    </Paper>
                </Grid2>

                <Grid2 item xs={12} sm={6} md={4}>
                    <Paper
                        sx={{
                            padding: '20px',
                            textAlign: 'center',
                            backgroundColor: '#fbe9e7',
                            borderRadius: '15px',
                            transition: "transform 0.3s",
                            "&:hover": {
                                transform: "scale(1.05)",
                            }
                        }}
                    >
                        <Typography variant="h5" gutterBottom>
                            Rescatados
                        </Typography>
                        <Typography variant="h4" gutterBottom  sx={{
                                fontWeight: 'bold',
                                color: "#1e88e5",
                            }}>
                            {counts.rescatados}
                        </Typography>
                    </Paper>
                </Grid2>

            </Grid2>


        </Box>
        </>
    )
};

export default PetsCount;
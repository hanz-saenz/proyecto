import React, { useState} from "react";
import urlApi from "../ApiUrl";
import axios from "axios";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";



const Register = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    })

    const [error, setError] = useState(null)

    const navigate = useNavigate();

    const manejarCambios = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    };

    const guardarDatos = async (e) => {

        e.preventDefault();

        try {
            const response = await axios.post(`${urlApi}/perfil/register/`, formData,
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                }
            );
            console.log(response.data);
            navigate('/login');

        } catch (error) {
            console.error('Error al agregar la mascota:', error);
            setError('Error al realizar el registro');
        }
    }



    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    padding: "20px",
                    maxWidth: "400px",
                    margin: "0 auto",
                }}
            >

                <Typography
                    variant="h5"
                    gutterBottom
                    align="center"
                >
                    Registro de Usuario

                </Typography>

                {error && 
                    <Typography
                        variant="body1"
                        align="center"
                        color="error"
                    >
                        {error}
                    </Typography>
                }

                <form onSubmit={guardarDatos}>
                    <TextField
                        fullWidth
                        label="Username"
                        name="username"
                        value={formData.username}
                        margin="normal"
                        required
                        onChange={manejarCambios}
                    />
                    <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        margin="normal"
                        required
                        onChange={manejarCambios}
                    />
                    <TextField
                        fullWidth
                        label="Password"
                        name="password"
                        type="password"
                        value={formData.password}
                        margin="normal"
                        required
                        onChange={manejarCambios}
                    />

                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        type="submit"
                        sx={{ marginTop: "16px" }}
                    >Registrarse</Button>
                </form>
            </Box>
        </>
    );
};

export default Register;
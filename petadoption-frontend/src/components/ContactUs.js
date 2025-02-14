import React, { useState} from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import axios from "axios";
import urlApi from "../ApiUrl";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ContactUs = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [enviado, setEnviado] = useState(false);
    

    const manejarCambios = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    };

    const guardaDatos = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${urlApi}/contact/new/`, formData);
            console.log(response.data);
            setEnviado(true);
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
        }
    };


    return (
        <>
        <Navbar />
            <Box sx={{ padding: '120px', maxWidth: '600px', margin: '0 auto'}}>
                <Typography variant="h4" gutterBottom align="center">
                    Contáctanos
                </Typography>
                {enviado ? (
                    <>
                    <Typography variant="h5" gutterBottom align="center" color="success">
                        ¡Gracias por tu mensaje! Nos pondremos en contactto contigo pronto
                    </Typography>
                    </>
                    
                ) : (
                    <>
                    <Typography variant="h5" gutterBottom align="center">
                        ¡Estamos aqui para ayudarte!
                    </Typography>
                    <form onSubmit={guardaDatos}>
                        <TextField 
                            label="Nombre" 
                            variant="outlined" 
                            fullWidth 
                            margin="normal" 
                            name="name"
                            value={formData.name}
                            onChange={manejarCambios}
                            required
                        />
                        <TextField 
                            label="Correo electrónico" 
                            variant="outlined"
                            fullWidth 
                            margin="normal" 
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={manejarCambios}
                            required
                        />
                        <TextField 
                            name="message"
                            label="Mensaje" 
                            variant="outlined" 
                            fullWidth 
                            margin="normal" 
                            multiline 
                            rows={4} 
                            value={formData.message}
                            onChange={manejarCambios}
                        />
                        <Button variant="contained" color="primary" fullWidth type="submit">
                            Enviar
                        </Button>
                    </form>

                    </>
                )}
            </Box>
            <Footer />
        </>
    )
};

export default ContactUs;
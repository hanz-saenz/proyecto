import React, { useState, useEffect } from "react";
import axios from "axios";
import { Drawer , Box, TextField, Button, Typography } from "@mui/material";
import urlApi from "../ApiUrl";

const ProfileEditDrawe = ({ open, onClose, profile, updatedPet}) => {

    const [ formData, setFormData ] = useState({});
    console.log('profile', profile);


    const token = localStorage.getItem('token');
    const datosmascota = (profile) => {
        if (profile) {
           setFormData({
                phone_number: profile.phone_number,
                description: profile.description,
                profession:    profile.profession,

           }) 
        }

    };


    const guardarDatos = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('name', formData.name);
        data.append('breed', formData.breed);
        data.append('age', formData.age);
        data.append('medical_notes', formData.medical_notes);
        if (formData.photo) {
            data.append('photo', formData.photo);
        }

        try {
            const response = await axios.put(`${urlApi}/perfil/update/`, data, {
                headers: { 
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`,
                }, // Encabezado necesario para FormData
                
            });
            updatedPet(response.data); // Notificar que se agregó una mascota
            onClose(); // Cerrar el Drawer
        } catch (error) {
            console.error('Error al editarr la mascota:', error);
        }
        

    };

    const manejarCambios = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    };

    useEffect(() => {
        datosmascota(profile);
    }, [profile]);

    return (
    <>
      <Drawer anchor="right" open={open} onClose={onClose}>
        <Box sx={{ width: 400, padding: 3 }}>
            <Typography variant="h4" gutterBottom>
                Editar Mascota
            </Typography>
            <form onSubmit={guardarDatos}>
                <TextField
                    label="Teléfono"
                    name="phone_number"
                    fullWidth
                    value={formData.phone_number}
                    onChange={manejarCambios}
                />
                <TextField
                    label="Profesión"
                    name="profession"   
                    fullWidth
                    value={formData.profession}
                    onChange={manejarCambios}
                />
                <TextField
                    label="Descripción"
                    name="description"
                    fullWidth
                    value={formData.description}
                    onChange={manejarCambios}
                />
                <Button 
                    type="submit" 
                    variant="contained" 
                    color="primary">Guardar</Button>

               </form>
        </Box>
    
      </Drawer>
    </>
    );
};


export default ProfileEditDrawe;
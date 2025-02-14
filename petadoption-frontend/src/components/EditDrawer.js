import React, { useState, useEffect } from "react";
import axios from "axios";
import { Drawer , Box, TextField, Button, Typography } from "@mui/material";
import urlApi from "../ApiUrl";

const EditDrawe = ({ open, onClose, pet, updatedPet}) => {

    const [ formData, setFormData ] = useState({});



    const token = localStorage.getItem('token');
    const datosmascota = (pet) => {
        if (pet) {
           setFormData({
                name: pet.name,
                breed: pet.breed,
                age:    pet.age,
                medical_notes: pet.medical_notes,
                photo: pet.photo,
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
            const response = await axios.put(`${urlApi}/pets/update/${pet.id}/`, data, {
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

    const manejarCambiosImagen = (e) => {
        setFormData({ ...formData, photo: e.target.files[0] })
    };


    useEffect(() => {
        datosmascota(pet);
    }, [pet]);

    return (
    <>
      <Drawer anchor="right" open={open} onClose={onClose}>
        <Box sx={{ width: 400, padding: 3 }}>
            <Typography variant="h4" gutterBottom>
                Editar Mascota
            </Typography>
            <form onSubmit={guardarDatos}>
                <TextField
                    label="Nombre"
                    name="name"
                    fullWidth
                    value={formData.name}
                    onChange={manejarCambios}
                />
                <TextField
                    label="Raza"
                    name="breed"
                    fullWidth
                    value={formData.breed}
                    onChange={manejarCambios}
                />
                <TextField
                    label="Edad"
                    name="age"
                    type="numeric"
                    fullWidth
                    value={formData.age}
                    onChange={manejarCambios}
                />
                <TextField
                    label="Notas medias"
                    name="medical_notes"
                    fullWidth
                    value={formData.medical_notes}
                    onChange={manejarCambios}
                />
                <input 
                    type="file" 
                    accept="image/*"
                    name="photo" 
                    onChange={manejarCambiosImagen}
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


export default EditDrawe;
import React, { useState } from "react";
import axios from "axios";
import { Drawer , Box, TextField, Button, Typography } from "@mui/material";
import urlApi from "../ApiUrl";
const AddDrawer = ({ open, onClose, onPetAdded }) => {

    const [ formData, setFormData ] = useState({
        name: '',
        breed: '',
        age: '',
        medical_notes: '',
        photo: null,
    });

    const manejarCambios = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    };

    const manejarCambiosImagen = (e) => {
        setFormData({ ...formData, photo: e.target.files[0] })
    };

    const token = localStorage.getItem('token');

    const guardarDatos = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('name', formData.name);
        data.append('breed', formData.breed);
        data.append('age', formData.age);
        data.append('medical_notes', formData.medical_notes);
        data.append('photo', formData.photo);

        data.forEach((value, key) => {
            console.log(key, value);
        });

        try {
            const response = await axios.post(`${urlApi}/pets/`, data, {
                headers: { 
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`,
                }, // Encabezado necesario para FormData
                
            });
            onPetAdded(response.data); // Notificar que se agregó una mascota
            onClose(); // Cerrar el Drawer
        } catch (error) {
            console.error('Error al agregar la mascota:', error);
        }
        

    };

    return (
        <>
        
        <Drawer anchor="right" open={open} onClose={onClose}>
            <Box sx={{ width: 400, padding: 3 }}>
                <Typography variant="p" gutterBottom>
                    Agregar nueva mascota
                </Typography>

                <form encType="multipart/form-data" onSubmit={guardarDatos}>
                    <TextField
                    fullWidth
                    id="name"
                    name="name"
                    label="Nombre"
                    margin="normal"
                    value={formData.name}
                    onChange={manejarCambios}          
                    />
                    <TextField
                      fullWidth
                      id="breed"
                      name="breed"
                      label="Raza"
                      margin="normal"
                      value={formData.breed}
                      onChange={manejarCambios}            
                    />
                    <TextField
                      fullWidth
                      id="age"
                      name="age"
                      label="Edad"
                      margin="normal"
                      type="number"
                      value={formData.age}
                      onChange={manejarCambios}           
                    />
                    <TextField
                      fullWidth
                      id="medical_notes"
                      name="medical_notes"
                      label="Notas medicas y/o Observaciones"
                      margin="normal"
                      multiline
                      rows={6}
                      value={formData.medical_notes}
                      onChange={manejarCambios}
                    />

                    <input 
                      id="photo" 
                      name="photo" 
                      type="file"
                      accept="image/*"
                      style={{ margin: "16px 0"}}
                      onChange={manejarCambiosImagen}
                    />       

<Button
                        type="submit"
                        color="primary"
                        variant="contained"
                        
                    >Guardar</Button>
                </form>
                
                
            </Box>

        </Drawer>
        </>
    );
};

export default AddDrawer;
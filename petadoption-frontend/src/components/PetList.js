import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import AddDrawer from "./AddDrawer";
import {AuthContext} from "../contexts/AuthContexts";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, IconButton } from "@mui/material";

import EditIcon from '@mui/icons-material/Edit';
import EditDrawer from "./EditDrawer";
import DeletePetModal from "./DeletePetModal";
import urlApi from "../ApiUrl";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PetList = () => {
    const [draweAddOpen, setDrawerAddOpen] = useState(false);
    const [drawerEdit, setDrawerEdit] = useState(false);
    const [selectedPet, setSelectedPet] = useState(null);
    const [pets, setPets] = useState([]);
    const { isAdmin } = useContext(AuthContext);

    const getPets = async () => {
        try {
            axios.get(`${urlApi}/pets/`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }
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

    const handlePetUpdated = (updatedPet) => {
        getPets();
        // Actualizar la lista de mascotas
        setPets(pets.map(pet => (pet.id === updatedPet.id ? updatedPet : pet)));
    };

    const handleEditPet = (pet) => {
        setSelectedPet(pet); // Establecer la mascota seleccionada
        setDrawerEdit(true); // Abrir el Drawer
    };

    useEffect(() => {    
        getPets();
    }, []);
    
    return (
            <>
            <Navbar />
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "80vh",
                    flexDirection: "column",
                    padding: 3,
                }}
            >

                <TableContainer 
                component={Paper} 
                    sx={{ 
                        width: "80%",
                            marginTop: 3,
                            boxShadow: 3,
                            borderRadius: 2,
                            backgroundColor: '#f0f4ff',
                            padding: 3
                    }}
                    
                >
                    <Typography  
                    variant="h5" 
                    component="h2" 
                    sx={{ 
                        padding: 2,
                        textAlign: "center",
                        color: "#034f84",
                        fontWeight: "bold"
                        }}>
                            Lista de Mascotas</Typography>

                    {isAdmin && (
                        <>
                        <Button 
                        onClick={() => setDrawerAddOpen(true)}
                        variant="contained"
                        sx={{
                            marginBottom: 2,
                            backgroundColor: "#28a745",
                            "&:hover": {
                                backgroundColor: "#218838",
                            },
                            display: "block",
                            margin: "0 auto"
                        }}
                        
                        
                        >Agregar Mascota</Button>
                        </>
                    )}

                    <Table sx={{ minWidth: 650 }}>
                        <TableHead 
                        sx={{
                            backgroundColor: "#a7c7e7"
                        }}>
                            <TableRow>
                                <TableCell sx={{ fontWeight: "bold", color: "#034f84" }}>Nombre</TableCell>
                                <TableCell sx={{ fontWeight: "bold", color: "#034f84" }}>Edad</TableCell>
                                <TableCell sx={{ fontWeight: "bold", color: "#034f84" }}>Raza</TableCell>
                                {isAdmin && <TableCell sx={{ fontWeight: "bold", color: "#034f84" }}>Acciones</TableCell>}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {pets.map((pet) => (
                                <TableRow key={pet.id}

                                sx={{
                                "&:nth-of-type(odd)": { backgroundColor: "#e8f5ff"},
                                "&:nth-of-type(even)": { backgroundColor: "#ffffff"},
                                }}
                                >
                                    <TableCell>{pet.name}</TableCell>
                                    <TableCell>{pet.age}</TableCell>
                                    <TableCell>{pet.breed}</TableCell>
                                    {isAdmin && (
                                        <TableCell>
                                            {/* <Button
                                            variant="contained"
                                            color="secondary"
                                            onClick={() => handleEditPet(pet)}
                                            style={{ marginTop: '16px' }}
                                            >Editar</Button> */}
                                            <IconButton sx={{ color: "#ffc107" }}>
                                                <EditIcon onClick={() => handleEditPet(pet)} />
                                            </IconButton>
                                            <DeletePetModal petId={pet.id} onDelete={getPets} />
                                        </TableCell>
                                    )}
                                </TableRow>
    
                            ))}
                        </TableBody>
                    </Table>
                    <AddDrawer 
                    open={draweAddOpen} 
                    onClose={() => setDrawerAddOpen(false)} 
                    onPetAdded={getPets} />

                    <EditDrawer
                        open={drawerEdit}
                        onClose={() => setDrawerEdit(false)}
                        pet={selectedPet}
                        updatedPet={handlePetUpdated}
                    />

                    
                </TableContainer>
            </Box>
            <Footer />
            
            
            {/* <h1>Lista de Mascotas</h1>
            {isAdmin && (
                <>
                <button onClick={() => setDrawerAddOpen(true)}>Agregar Mascota</button>
                </>
            )}
            
            <ul>
                {pets.map((pet) => (
                    <li key={pet.id}>{pet.name}</li>
                ))}
            </ul>

            <AddDrawer 
                open={draweAddOpen} 
                onClose={() => setDrawerAddOpen(false)} 
                onPetAdded={getPets} /> */}
        </>
    );
};

export default PetList;
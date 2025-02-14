import React, {useEffect, useState } from "react";
import axios from "axios";
import urlApi from "../ApiUrl";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import Navbar from "./Navbar";
import ProfileEditDrawe from "./ProfileEditDrawer";
import Footer from "./Footer";

const Profile = () => {

    const [profile, setProfile] = useState({
        phone_number: "",
        description: "",
        profession: "",
        user: {},
    });


    const [drawerEdit, setDrawerEdit] = useState(false);


    const listarPerfil = async () => {
        try {

            axios.get(`${urlApi}/perfil/list/`)
            .then((response) => {
                setProfile(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

        } catch (error) {
            console.log('error', error)

        }
    }

    const handleEditPet = () => {
        setDrawerEdit(true); // Abrir el Drawer
    };


    const handleProfileUpdated = () => {
        listarPerfil();
        // Actualizar la lista de mascotas

    };

    useEffect(() => {
        listarPerfil();
        
    }, []);

    
    return (
        <>
        <Navbar />
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                backgroundColor: "#f0f4f8",
                // padding: {xs: "5px", sm: "10px"},
            }}
        >
            <Card
                sx={{
                    width: {xs: "100%", sm: "400px"},
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                    borderRadius: "15px",
                    backgroundColor: "#fff",
                }}
            >
                <CardContent
                    sx={{
                        // textAlign: "center",
                        padding: {xs: "16px", sm: "24px"},
                    }}
                >
                    <Typography
                        sx={{
                            marginBottom: "20px",
                            fontWeight: "bold",
                            color: "#1e88e5",
                        }}
                    >
                        Perfil de Usuario
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: "10px" }}>
                        <strong>Usuario:</strong> {profile.user.username}
                    </Typography>
                    <Typography variant="body1"  sx={{ marginBottom: "10px" }}>
                        <strong>Teléfono:</strong> {profile.phone_number}
                    </Typography>
                    <Typography variant="body1"  sx={{ marginBottom: "10px" }}>
                        <strong>Profesión:</strong> {profile.profession}
                    </Typography>
                    <Typography variant="body1"  sx={{ marginBottom: "10px" }}>
                        <strong>Descripción:</strong> {profile.description}
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ marginTop: "20px" }}
                        onClick={() => handleEditPet()}
                    > Editar Perfil</Button>
                </CardContent>
            </Card>
        </Box>
        <Footer />
        <ProfileEditDrawe
                    open={drawerEdit}
                    onClose={() => setDrawerEdit(false)}
                    profile={profile}
                    updatedProfile={handleProfileUpdated}
                />

        </>
    )
};

export default Profile;
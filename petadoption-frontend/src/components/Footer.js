import React, {useContext } from "react";
// import axios from "axios";
// import urlApi from "../ApiUrl";
import { Box, Typography, Link, Button } from "@mui/material";
import { AuthContext } from "../contexts/AuthContexts";

const Footer = () => {
    // const [footerData, setFooterData] = useState(null);
    const { isAdmin, logout } = useContext(AuthContext);
    return (
        <Box
            sx={{
                backgroundColor: "#1976d2",
                color: "#fff",
                padding: "40px 20px",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "20px",
                boxShadow: "0px -2px 10px rgba(0, 0, 0, 0.1)",
            }}
        >
            <Box sx={{ marginBottom: "20px" }}>
                <Typography variant="h5" gutterBottom
                    sx={{
                        color: "#fff",
                        fontWeight: "bold",
                    }}
                >
                    Nuestro Sitio
                </Typography>
                <Link href="/" 
                    sx={{ marginBottom: 1, color: "#fff", display: "block", textDecoration: "none" }}
                    >Inicio</Link>
                {isAdmin ? (
                    <>
                        <Link href="/perfil"
                            sx={{ marginBottom: 1, color: "#fff", display: "block", textDecoration: "none" }}
                        >Perfil</Link>
                        <Button 
                        sx={{
                            color: "#a8d0e6",
                            textTransform: "none",
                            padding: 0,
                            minWidth: "auto",
                            fontSize: "1rem",
                        }}
                            onClick={logout}
                        >Cerrar Sesión</Button>
                    </>
                ) : (
                    <Link href="/login"
                        sx={{ marginBottom: 1, color: "#fff", display: "block", textDecoration: "none" }}
                    
                    >Iniciar Sesión</Link>
                )}
                <Link href="/contact">Contactanos</Link>
            </Box>
            <Box sx={{ marginBottom: "20px" }}>
                <Typography variant="h5" gutterBottom
                sx={{
                    color: "#fff",
                    fontWeight: "bold",
                }}
            >
                    Legal
                </Typography>
                <Link href="http://localhost:8000/static/assets/docs/terms/terminos_condiciones_xrVOHxJ.pdf" color="inherit" display="block"
                    sx={{ marginBottom: 1, color: "#fff", textDecoration: "none" }}
                >
                    Términos y condiciones
                </Link>
                <Link href="/privacy-policy" color="inherit" display="block"
                    sx={{ marginBottom: 1, color: "#fff", textDecoration: "none" }}
                >
                    Política de privacidad
                </Link>
            </Box>
            <Box sx={{ marginBottom: "20px" }}>
                <Typography variant="h5" gutterBottom sx={{
                        color: "#fff",
                        fontWeight: "bold",
                    }}
                >
                    Contacto
                </Typography>
                <Typography
                    sx={{ marginBottom: 1, color: "#fff", textDecoration: "none" }}
                >ejemplo@ejemplo.com</Typography>
                <Typography
                    sx={{ marginBottom: 1, color: "#fff", textDecoration: "none" }}
                >12345678980</Typography>
                <Typography
                    sx={{ marginBottom: 1, color: "#fff", textDecoration: "none" }}
                >cra 123 52-68, Bogotá Colombia.</Typography>
            </Box>
        </Box>
    );
};

export default Footer;

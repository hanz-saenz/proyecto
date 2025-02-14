import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContexts";
import {  Box, Button, TextField, Container, Typography } from "@mui/material";
import Navbar from "./Navbar";

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const actionLogin = async (e) => {
        e.preventDefault();
        await login(credentials);
        navigate("/perfil");
    };


    return (

        <>
        <Navbar />
            <Container
            maxWidth="sm"
            x={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                marginTop: "80px",
            }}
            >

                <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>Incio de Sesión</Typography>

                <Box
                    component={"form"}
                    onSubmit={actionLogin}
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: 3, // Espaciado entre los elementos
                    }}
                >

                    <TextField
                        label="Username"
                        type="text"
                        fullWidth
                        required
                        value={credentials.username}
                        onChange={(e) =>
                            setCredentials({
                                ...credentials,
                                username: e.target.value,
                            })
                        }
                    />

                    <TextField
                        label="Password"
                        type="password"
                        fullWidth
                        required
                        value={credentials.password}
                        onChange={(e) =>
                            setCredentials({
                                ...credentials,
                                password: e.target.value,
                            })
                        }
                    />

                    <Button
                        type="submit"
                        color="primary"
                        fullWidth
                        sx={{
                            padding: "10px",
                            fontSize: "1rem",
                            textTransform: "none",
                            backgroundColor: "#3f51b5",
                            color: "#fff",
                        }}
                        >Iniciar Sesión</Button>
                </Box>
            </Container>


        {/* // <form onSubmit={actionLogin}>
        //     <input
        //         type="text"
        //         placeholder="Username"
        //         onChange={(e) =>
        //             setCredentials({ ...credentials, username: e.target.value })
        //         }
        //     />
        //     <input
        //         type="password"
        //         placeholder="Password"
        //         onChange={(e) =>
        //             setCredentials({ ...credentials, password: e.target.value })
        //         }
        //     />
        //     <button type="submit">Iniciar Sesión</button>

        // </form> */}
        </>
    );
};

export default Login;
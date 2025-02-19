import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContexts";
import { AppBar, Box, Button, Toolbar } from "@mui/material";
import logo from "../components/logopets.png";


const Navbar = () => {
    const {user, logout} = useContext(AuthContext);

    return (
        <>

            <AppBar position="fixed" sx={{ backgtoundColor: "#3f51b5" }}>
                <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                    {/* <Typography
                        variant="h6"
                        component="div"
                        sx={{ fontWeight: "bold" }}
                    >
                        PetAdoption
                    </Typography> */}
                    <Link to="/">
                     <img src={logo} alt="Logo" style={{ height: "60px", marginRight: "10px"}}/>
                    </Link>
                    <Box sx={{ display: "flex", gap: 2}}>
                        <Button
                            component={Link}
                            to="/"
                            sx={{
                                color: "#fff",
                                textTransform: "none",
                                fontSize: "1rem",
                            }}
                        >
                            Home
                        </Button>
                        <Button
                            component={Link}
                            to="/pets"
                            sx={{
                                color: "#fff",
                                textTransform: "none",
                                fontSize: "1rem",
                            }}
                        >
                            Mascotas
                        </Button>
                        <Button
                            component={Link}
                            to="/contact"
                            sx={{
                                color: "#fff",
                                textTransform: "none",
                                fontSize: "1rem",
                            }}
                        >
                            Contactanos
                        </Button>

                        {user ? (
                                <>
                                   <Button
                                        component={Link}
                                        to="/perfil"
                                        sx={{
                                            color: "#fff",
                                            textTransform: "none",
                                            fontSize: "1rem",
                                        }}
                                    >
                                        Perfil
                                    </Button>
                                    <Button
                                        onClick={logout}
                                        component={Link}
                                        to="/"
                                        sx={{
                                            color: "#fff",
                                            backgroundColor: "#ffffff33",
                                            textTransform: "none",
                                            fontSize: "1rem",
                                            "&:hover": {
                                                backgroundColor: "##ffffff4d",    
                                            }
                                        }}
                                    >
                                        Cerrar Sesión
                                    </Button>
                                </>
                            ) : (
                                <>
                                <Button
                                        component={Link}
                                        to="/register"
                                        sx={{
                                            color: "#fff",
                                            backgroundColor: "#ffffff33",
                                            textTransform: "none",
                                            fontSize: "1rem",
                                            "&:hover": {
                                                backgroundColor: "##ffffff4d",    
                                            }
                                        }}
                                    >
                                        Registrarse
                                    </Button>

                                <Button
                                        component={Link}
                                        to="/login"
                                        sx={{
                                            color: "#fff",
                                            backgroundColor: "#ffffff33",
                                            textTransform: "none",
                                            fontSize: "1rem",
                                            "&:hover": {
                                                backgroundColor: "##ffffff4d",    
                                            }
                                        }}
                                    >
                                        Iniciar Sesión
                                    </Button>
                                    </>
                            )
                        }
                    </Box>

                </Toolbar>
            </AppBar>
            {/* <nav>
                <Link to="/">Home</Link>
                {user ? (
                    <>
                        <Link to="/">Perfil</Link>
                        <button onClick={logout}>Cerrar Sesión</button>
                    </>
                ) : (
                    <Link to="/login">Iniciar Sesión</Link>
                )
            }
            </nav> */}
        </>
    );
};

export default Navbar;
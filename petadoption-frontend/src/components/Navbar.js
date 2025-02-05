import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContexts";


const Navbar = () => {
    const {user, logout} = useContext(AuthContext);

    return (
        <>
            <nav>
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
            </nav>
        </>
    );
};

export default Navbar;
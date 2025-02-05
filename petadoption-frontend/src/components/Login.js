import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContexts";

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
        navigate("/");
    };


    return (
        <form onSubmit={actionLogin}>
            <input
                type="text"
                placeholder="Username"
                onChange={(e) =>
                    setCredentials({ ...credentials, username: e.target.value })
                }
            />
            <input
                type="password"
                placeholder="Password"
                onChange={(e) =>
                    setCredentials({ ...credentials, password: e.target.value })
                }
            />
            <button type="submit">Iniciar Sesión</button>

        </form>
    );
};

export default Login;
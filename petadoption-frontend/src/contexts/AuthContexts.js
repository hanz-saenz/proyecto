import React, { createContext, useState, useEffect } from "react";
import urlApi from ".././ApiUrl";
import axios from "axios";
const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [ isAdmin, setIsAdmin] = useState(false);

    const login = async (credentials) => {
        const response = await axios.post(`${urlApi}/token/`,
            credentials,
        );
        console.log('token', response.data['access'])
        localStorage.setItem('token', response.data['access'])
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data['access']}`
        setUser({
            token: response.data['access'],})
        const userResponse = await axios.get(`${urlApi}/user/`);
        setIsAdmin(userResponse.data.groups.includes('Administrador'));
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token){
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
            setUser({
                token: token,})

            axios.get(`${urlApi}/user/`).then((response) => {
                setIsAdmin(response.data.groups.includes('Administrador'));
            });
        }
        setLoading(false);
    }, []);



    const logout = () => {
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['Authorization'];
        setUser(null);
        setIsAdmin(false);
    };

    return (
        <>
        <AuthContext.Provider value={{ user, isAdmin, login, logout, loading}}>
            {children}
        </AuthContext.Provider>
        </>
    );
}

export { AuthContext, AuthProvider };
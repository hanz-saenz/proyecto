import React, { useState, useEffect } from "react";
import axios from "axios";
import urlApi from "../ApiUrl";
import AddDrawer from "./AddDrawer";

const PetList = () => {
    const [draweAddOpen, setDrawerAddOpen] = useState(false);
    const [pets, setPets] = useState([]);

    const getPets = async () => {
        try {
            axios.get(`${urlApi}/pets/`)
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

    useEffect(() => {    
        getPets();
    }, []);
    
    return (
        <>
            <h1>Lista de Mascotas</h1>
            <button onClick={() => setDrawerAddOpen(true)}>Agregar Mascota</button>
            <ul>
                {pets.map((pet) => (
                    <li key={pet.id}>{pet.name}</li>
                ))}
            </ul>

            <AddDrawer 
                open={draweAddOpen} 
                onClose={() => setDrawerAddOpen(false)} 
                onPetAdded={getPets} />
        </>
    );
};

export default PetList;
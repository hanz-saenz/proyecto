import React, { useState} from "react";
import axios from "axios";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import urlApi from "../ApiUrl";
const DeletePetModal = ({ petId, onDelete}) => {

    const [open, setOpen] = useState(false);

    const eventoAbrir = () => {
        setOpen(true);
    }

    const eventoCerrar = () => {
        setOpen(false);
    }

    const elimarMascota = async () => {
        try {

            await axios.delete(`${urlApi}/pets/delete/${petId}/`);
            onDelete(petId);
            eventoCerrar();
        } catch (error) {
            console.log(error);   
        }

    };

    return (
        <>

        <div>
            <IconButton  sx={{ color: "#dc3545" }}>
                <DeleteIcon onClick={eventoAbrir} />
            </IconButton>
            {/* <Button variant="contained" color="#dc3545" onClick={eventoAbrir}>Eliminar</Button> */}
            <Dialog open={open} onClose={eventoCerrar}>
                <DialogTitle>Eliminar Mascota</DialogTitle>
                <DialogContent>
                    <DialogContentText>¿Estás seguro de eliminar esta mascota?</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={eventoCerrar}>Cancelar</Button>
                    <Button onClick={elimarMascota} color="#dc3545">Eliminar</Button>
                </DialogActions>
            </Dialog>
        </div>
        </>
    )
};

export default DeletePetModal
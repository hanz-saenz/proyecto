import React from "react";
import { Drawer , Box, Typography } from "@mui/material";

const AddDrawer = ({ open, onClose, onPetAdded }) => {

    console.log('onPetAdded', onPetAdded);

    return (
        <>
        <Drawer anchor="right" open={open} onClose={onClose}>
            <Box>
                <Typography variant="p" gutterBottom>
                    Agregar nueva mascota
                </Typography>
            </Box>

        </Drawer>
        </>
    );
};

export default AddDrawer;
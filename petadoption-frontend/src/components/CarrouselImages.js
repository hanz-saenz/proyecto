import React, { useState, useEffect } from "react";
import { Box, IconButton } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

const imagenes = [
  "https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsZXMlMjBkb21lc3RpY29zfGVufDB8fDB8fHww",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREAwY69J9v8z71EIw5wPtpXMk7459UXJBKzg&s",
  "https://s1.elespanol.com/2020/08/26/curiosidades/mascotas/mascotas-perros-mascotas_515959375_158488465_1706x960.jpg",
];

const CarrouselImages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
  };

  const imagePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imagenes.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(imageNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "300px", md: "500px" }, // Altura ajustable según el dispositivo
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: { xs: 8, md: 8 }, // Espacio para estar debajo del navbar
      }}
    >
      <IconButton
        onClick={imagePrev}
        sx={{
          position: "absolute",
          left: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          zIndex: 1,
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          },
        }}
      >
        <ArrowLeftIcon />
      </IconButton>

      {imagenes.map((imagen, index) => (
        <Box
          key={index}
          component="img"
          src={imagen}
          alt={`Imagen ${index}`}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: index === currentIndex ? "block" : "none",
            transition: "opacity 0.5s ease-in-out", // Efecto de transición suave
          }}
        />
      ))}

      <IconButton
        onClick={imageNext}
        sx={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          zIndex: 1,
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          },
        }}
      >
        <ArrowRightIcon />
      </IconButton>
    </Box>
  );
};

export default CarrouselImages;

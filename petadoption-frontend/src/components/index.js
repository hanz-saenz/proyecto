import React from "react";
import Navbar from "./Navbar";
import CarrouselImages from "./CarrouselImages";
import Footer from "./Footer";
import Galery from "./Galery";
import PetsCount from "./PetsCount";
import AboutUs from "./AboutUs";
const Index = () => {

    
    return (
        <>
            <Navbar />
            <CarrouselImages />
            <AboutUs />
            <PetsCount />
            <Galery />
            <Footer />
            
        </>
    );
};

export default Index;
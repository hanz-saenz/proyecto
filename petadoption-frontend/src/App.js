import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContexts";
import Index from "./components/index";
import Login from "./components/Login";
// import ProfileEdit from "./components/ProfileEdit";
import Profile from "./components/Profile"
import ContactUs from "./components/ContactUs";
import PetList from "./components/PetList";
const App = () => {
  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/perfil" element={<Profile />} />
            {/* <Route path="/perfil-edit" element={<ProfileEdit />} /> */}
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/pets" element={<PetList />} />
          </Routes>
        </Router>
      </AuthProvider>
    
    </>
  )
};

export default App;
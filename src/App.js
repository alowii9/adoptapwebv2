import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Registrarse from './pages/Registrarse';
import Principal from './pages/Principal';
import MascotasEnAdopcion from './pages/mascotasEnAdopcion/MascotasEnAdopcion';
import MascotasPerdidas from './pages/mascotasPerdidas/MascotasPerdidas';
import Locales from './pages/locales/page';
import CrearPublicacion from './pages/mascotasEnAdopcion/crearPublicacion/page';
import CrearPublicacionPerdidas from './pages/mascotasPerdidas/crearPublicacionPerdidas/page';
import CrearPublicacionLocal from './pages/locales/crearPublicacionLocal/page';
import Donaciones from './pages/donaciones/page';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Registrarse" element={<Registrarse />} />
      <Route path="/Principal" element={<Principal />} />

      <Route path="/MascotasEnAdopcion" element={<MascotasEnAdopcion />} />
      <Route path="/CrearPublicacion" element={<CrearPublicacion />} />

      <Route path="/MascotasPerdidas" element={<MascotasPerdidas />} />
      <Route path="/CrearPublicacionPerdidas" element={<CrearPublicacionPerdidas />} />

      <Route path="/Locales" element={<Locales />} />
      <Route path="/CrearPublicacionLocal" element={<CrearPublicacionLocal />} />

    
      <Route path="/Donaciones" element={<Donaciones />} />
      


    </Routes>
  </Router>
  );
}

export default App;

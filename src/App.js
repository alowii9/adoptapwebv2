//import logo from './logo.svg';
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
import DetalleMascota from './pages/mascotasEnAdopcion/[id]/page';
import DetalleTienda from './pages/locales/[id]/page';
import DetalleMascotaPerdida from './pages/mascotasPerdidas/[id]/page';
import BodyPrincipal from './componentes/BodyPrincipal';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<BodyPrincipal />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registrarse" element={<Registrarse />} />
      <Route path="/principal" element={<Principal />} />

      <Route path="/mascotasEnAdopcion" element={<MascotasEnAdopcion />} />
      <Route path="/detalleMascotaAdopcion/:id" element={<DetalleMascota />} />
      <Route path="/crearPublicacion" element={<CrearPublicacion />} />

      <Route path="/mascotasPerdidas" element={<MascotasPerdidas />} />
      <Route path="/crearPublicacionPerdidas" element={<CrearPublicacionPerdidas />} />
      <Route path="/detalleMascotaPerdida/:id" element={<DetalleMascotaPerdida />} />

      <Route path="/locales" element={<Locales />} />
      <Route path="/crearPublicacionLocal" element={<CrearPublicacionLocal />} />
      <Route path="/detalleTienda/:id" element={<DetalleTienda />} />

      <Route path="/donaciones" element={<Donaciones />} />
      <Route path="/dashboard" element={<Dashboard />} />
      


    </Routes>
  </Router>
  );
}

export default App;

'use client'


import React, {useEffect, useState} from 'react';
import { getAuth, signOut} from "firebase/auth";
import db from '../Firebase/FirebaseConfig';
import { initializeApp } from 'firebase/app';
import Firebase from 'firebase/compat/app';
import { useLocation, useNavigate, useNavigation, } from 'react-router-dom';

const firebaseConfig = {
  apiKey: "AIzaSyArdOd3a0RJi6T4OPyVa1Dnb_MAc80gfDY",
  authDomain: "adoptar-mascotas.firebaseapp.com",
  projectId: "adoptar-mascotas",
  storageBucket: "adoptar-mascotas.appspot.com",
  messagingSenderId: "721472218494",
  appId: "1:721472218494:web:541d7bce53301b38b33f2f",
  measurementId: "G-6XCG97PS44"
};

const app = initializeApp(firebaseConfig);



const NavPrincipal = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let navigate = useNavigate();
 


  const auth = getAuth(app);

  useEffect(() => {
    
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user); // Update state based on user existence
      
      
    });

    return unsubscribe; // Clean up event listener on unmount
  }, []);

  const handleLogout = async () => {
    
    try {
      await signOut(auth);
      setIsLoggedIn(false);
      navigate('/');
      
       // Update state after successful logout
    } catch (error) {
      console.error("Error logging out:", error);
      // Handle potential errors
    }
  };


  return (

<nav  >
    <div>
            <div style={bannerPrincipal}>

                <a href="/principal">
                    <img src='../imagenes/logo.png' alt="logo adoptap" />
                </a>
                <img style={letras} width={450} height={100} src="/letras.png" alt="adoptapp" />
                <a href="/principal">
                    <img src="/logo.png" alt="logo adoptap" />
                </a>
            </div>
     

        <div style={navStyle}>
            <ul style={ulStyle}>

                        <li style={liStyle}>
                       
                            <a href="/mascotasEnAdopcion" style={aStyle}>Mascotas en adopcion</a>
                        
                        </li>

                        <li style={liStyle}>
                       
                            <a  href="/mascotasPerdidas" style={aStyle}>Mascotas Perdidas</a>
                       
                        </li>

                        <li style={liStyle} >
                        
                            <a  href="/locales" style={aStyle}>Locales</a>
                       
                        </li>

                        <li style={liStyle} >
                       
                            <a  href="/donaciones" style={aStyle}>Donaciones</a>
                       
                        </li>


                        <li style={liStyle} >
                      
                        </li>

            </ul>
            <div style={navStyle}>
          <ul style={ulStyle}>
            {/* Tus enlaces de navegación */}
          </ul>
          {isLoggedIn ? (
            <button onClick={handleLogout}>Cerrar sesión</button>
          ) : (
           
              <a  href="/login" style={aStyle}>Iniciar sesión</a>
           
          )}
        </div>
      </div>
        </div>
     
 
   

</nav>

  );
}

// Estilos 

const letras = {
  marginTop: "50px"
}

const bannerPrincipal = {
    display: "flex",
    
    justifyContent: "center",
    background: ""
}

const h1 = {
    fontSize: "50px",
    fontFamily: "comic",
    paddingTop: "25px"
}

const navStyle = {
  background: '#333',
  color: '#fff',
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "20px"
};

const ulStyle = {
  listStyle: 'none',
  display: 'flex'
};

const liStyle = {
  margin: '0 10px'
};

const aStyle = {
  color: '#fff',
  textDecoration: 'none'
};


//


export default NavPrincipal;
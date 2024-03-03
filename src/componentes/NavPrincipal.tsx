'use client'
import React, {useEffect, useState} from 'react';
import { getAuth, signOut} from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import db, { app } from '../Firebase/FirebaseConfig';
import { Link } from 'react-router-dom';
import {  doc, getDoc } from 'firebase/firestore';



const NavPrincipal = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin ] = useState(false);
  
  let navigate = useNavigate();

  const auth = getAuth(app);

  useEffect(() => {
    
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user){
        setIsLoggedIn(true);
        const userDocRef = doc(db, 'usuarios', user.uid);
        const userDoc = await getDoc(userDocRef);
        if(userDoc.exists() && userDoc.data().admin){
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      } else {
        setIsLoggedIn(false);
        setIsAdmin(false);
      }

      });
  return unsubscribe;
  }, []);

  const handleLogout = async () => {
    
    try {
      await signOut(auth);
      setIsLoggedIn(false);
      navigate('/');
    } catch (error) {
      console.error("Error logging out:", error);
     
    }
  };


  return (

<nav  >
    <div>
            <div style={bannerPrincipal}>
                <Link to="/principal" >
                <a >
                    <img src='/logo.png' alt="logo adoptap" />
                </a>
                </Link>
                <img style={letras} width={450} height={100} src="/letras.png" alt="adoptapp" />
                <Link to="/principal" >
                <a >
                    <img src='/logo.png' alt="logo adoptap" />
                </a>
                </Link>
            </div>
     

        <div style={navStyle}>
            <ul style={ulStyle}>

                        <li style={liStyle}>
                          <Link  to="/mascotasEnAdopcion" >
                            
                            <p style={aStyle}>Mascotas en adopcion</p>
                            
                          </Link>
                        </li>

                        <li style={liStyle}>
                          <Link to="/mascotasPerdidas" >
                            
                            <p style={aStyle}>Mascotas Perdidas</p>
                            
                          </Link>
                        </li>

                        <li style={liStyle}>
                          <Link to="/locales" >
                            
                            <p style={aStyle}>Locales</p>
                            
                          </Link>
                        </li>

                        <li style={liStyle}>
                          <Link to="/donaciones" >
                            
                            <p style={aStyle}>Donaciones</p>
                            
                          </Link>
                        </li>

            </ul>
            <div style={navStyle}>
            {isLoggedIn ? (
              <>
                {isAdmin && (
                  <ul style={ulStyle}>
                    <li style={liStyle}>
                      <Link style={aStyle} to="/dashboard">Dashboard</Link>
                    </li>
                  </ul>
                )}
                <button  onClick={handleLogout}>Cerrar sesión</button>
              </>
            ) : (
              <a href="/login" style={aStyle}>Iniciar sesión</a>
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



const navStyle = {
  background: '#333',
  color: '#fff',
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "24px"
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
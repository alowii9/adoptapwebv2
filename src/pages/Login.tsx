'use client'

import React,{useState} from "react";
import  db  from "../Firebase/FirebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 const navigate = useNavigate();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      const auth = getAuth();
     await signInWithEmailAndPassword(auth, email, password);
      
      const user = auth.currentUser;
      if (user){
        const userData = await db.collection("usuarios").doc(user.uid).get();
        MSJOK();
       
      }
      navigate("/Principal");
      // Puedes redirigir al usuario a otra página o mostrar un mensaje de bienvenida
    } catch (error) {
      MSJERROR();
    }
  };

  const MSJOK = () => {
    Swal.fire({
        title: "Buen Trabajo!",
        text: "seccion iniciada",
        icon: "success"
      });
      

}
// mensaje de error
const MSJERROR = () => {
    Swal.fire({
        icon: "error",
        title: "Usuario invalido",
        text: "verifica los campos!!",
      });
      
}

  return (
    <>
      <div style={fondoColorPagina}>
        <h1 style={h1}>Ingresar</h1>
        <form style={formStyle} onSubmit={handleLogin}>
          <div>
            <label htmlFor="email">Email:</label><br />
            <input
              style={inputStyle}
              type="email"
              id="email"
              placeholder="Ingrese su email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label htmlFor="password">Contraseña:</label>
            <input
              style={inputStyle}
              type="password"
              id="password"
              placeholder="Ingrese su contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button style={buttonStyle} type="submit">Iniciar Seccion</button>
        </form>
        <div style={h2}>
          <h2>No tenes cuenta?, <a href="../Registrarse"><u>toque aqui para registrarse</u></a></h2>
          <button style={buttonStyle} onClick={() => navigate("/Registrarse")}>Registrarse</button>

        </div>
        <div style={volverInicio}>
          <button><a href="/">Volver al inicio</a></button>
        </div>
      </div>
    </>
  );
};

// Resto de estilos y exportación del componente


//Estilos formulario

const fondoColorPagina = {
  background: "#647494",
  color: "#fff",

}

const h1 = {
 
  paddingBottom: "30px",
  paddingTop: "20px"
}

const h2 = {
    
    paddingTop: "20px",
    
}

const formStyle = {
  display: "row",
  maxWidth: "300px",
  margin: "0 auto",
  border: "2px solid #2f2f2f",
  padding: "20px",
  color: "#414532"

  
};

const inputStyle = {
  marginBottom: "10px",
  padding: "8px",
  fontSize: "16px",
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "blue",
  color: "white",
  border: "none",
  cursor: "pointer",
  paddingTop: "10px",
};


// estilo boton volver

const volverInicio = {
  display:"flex",
  justifyContent: "center",
  alignItems: "center",
 height :"10vh",

  
}


export default Login;

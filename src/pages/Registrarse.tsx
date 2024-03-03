import React, { useEffect } from "react";
import db from "../Firebase/FirebaseConfig";
import Swal from "sweetalert2";
import $ from 'jquery';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Registrarse = () => {
  const mover = useNavigate();
  const navigate = useNavigate();
  const registrarUsuario = async (usuario: {name: any; email: any; password: any;}) => {
    const { name, email, password } = usuario;
    const auth = getAuth();
    try {
      const infoUsuario = await createUserWithEmailAndPassword(auth, email, password);
      crearUsuario({ uid: infoUsuario.user?.uid, name, email, password });    } catch (error) {
      MSJERROR();
    }
  };

  const handleClick = () => {
    let name = $("#name").val();
    let email = $("#email").val();
    let password = $("#password").val();

    const usuario = {
      name,
      email,
      password,
    };

    if (!name || !email || !password) {
      MSJERROR();
    } else {
      registrarUsuario(usuario);
    }
  };

  const crearUsuario = (usuario: any) => {
    const { uid, name, email, password } = usuario;
    db.collection("usuarios")
      .doc(uid)
      .set({
        name,
        email,
        password,
        admin: false,
      })
      .then(function (docRef) {
        MSJOK();
        //mover("/login");
        mover('/principal');
      })
      .catch(function (error) {
        MSJERROR();
      });
  };
  const MSJOK = () => {
    Swal.fire({
      title: "Buen Trabajo!",
      text: "Usuario creado!",
      icon: "success"
    });
  }

  const MSJERROR = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Usuario no creado, verifica los campos!!",
    });
  }

  return (
  
   <>

<div style={fondoColorPagina}>
<section style={{textAlign:"center"}} >
<h1 style={h1}>Crear Nuevo Usuario</h1>
  
  <form style={formStyle}>
    
      <div>
        <label htmlFor="nombre">Nombre:</label><br />
        <input style={inputStyle}
          type="text"
          id="name"
          placeholder="Ingrese su nombre"
        />
      </div>

      <div>
        <label htmlFor="email">email:</label><br />
        <input style={inputStyle}
          type="text"
          id="email"
          placeholder="Ingrese su correo"
        />
      </div>

      <div>
        <label htmlFor="password">password:</label><br />
        <input style={inputStyle}
          type="password"
          id="password"
          placeholder="Ingrese su contrasenia"
        />
      </div>
        <button id="btnsave" onClick={handleClick} style={buttonStyle} type="button">
          Crear usuario
        </button>
      </form>

  <div  style={volverInicio}>
  <button ><a  href="/">volver al inicio</a></button>
  </div>
  </section>
</div> 

</>

)

}



//Estilos formulario

const fondoColorPagina = {
  background: "#340434",
  color: "#fff",

}

const h1 = {
 
  paddingBottom: "50px",
  paddingTop: "100px"
}

const formStyle = {
  display: "row",
  maxWidth: "300px",
  margin: "0 auto",
  border: "2px solid #2f2f2f",
  borderRadius: "5px",
  padding: "20px",
  color: "#414532"
};

const inputStyle = {
  marginBottom: "10px",
  padding: "8px",
  paddingTop: "10px",
  fontSize: "16px",
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "blue",
  color: "white",
  border: "none",
  cursor: "pointer",
  paddingTop: "10px",
  marginTop:"50px"
};

// estilo boton volver

const volverInicio = {
  display:"flex",
  justifyContent: "center",
  alignItems: "center",
 height :"10vh",
 paddingTop: "20px",
 marginTop: "100px",
}

export default Registrarse;
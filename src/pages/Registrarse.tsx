import React, { useEffect } from "react";
import db from "../Firebase/FirebaseConfig";
import Swal from "sweetalert2";
import $ from 'jquery';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Registrarse = () => {
  const mover = useNavigate();
  
  const registrarUsuario = async (usuario: {name: any; email: any; password: any;}) => {
    const { name, email, password } = usuario;
    const auth = getAuth();
    try {
      // Antes de intentar crear un nuevo usuario, verifica si ya existe
      const usuarioExistente = await db.collection("usuarios").where("name", "==", name).get();
  
      if (!usuarioExistente.empty) {
        // Si el usuario ya existe, muestra un mensaje de error
        MSJERROREXISTE();
        return;
      }
  
      // Si el usuario no existe, procede con el registro
      const infoUsuario = await createUserWithEmailAndPassword(auth, email, password);
      crearUsuario({ uid: infoUsuario.user?.uid, name, email, password });
    } catch (error) {
      // Muestra un mensaje de error genérico si hay un problema
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


   //Alertas para el usuario
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

  const MSJERROREXISTE = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Usuario no creado, ya existe!!",
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
          <label >password:</label><br />
          <input {...{minLength:6}} style={inputStyle}
            type="password"
            id="password"
            placeholder="Ingrese su contraseña"
           
          />
          <p>la password requiere 6 caracteres</p>
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
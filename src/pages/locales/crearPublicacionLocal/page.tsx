'use client'

import React, {useEffect, useState} from "react";
import firebase from "firebase/compat/app";
import db from "../../../Firebase/FirebaseConfig";
import Swal from "sweetalert2";
import $ from 'jquery';
import { useNavigate, Route, Link } from 'react-router-dom';
import {getStorage, ref, uploadBytes, getDownloadURL}  from 'firebase/storage';
import { addDoc, collection } from "firebase/firestore";

const storage = getStorage()


const CrearPublicacionLocal = () => {

  const mover = useNavigate();

    //funcion para agregar publicacion en firebase
const CrearPublicacionMascota = (local: any) => {
  const {name, domicilio, telefono,descripcion, img} = local;
    db.collection("Locales").add({
        name,
        domicilio,
        descripcion,
        img,
        telefono,
    })
    .then(function(docRef) {
        MSJOK();
        mover('/locales');
        
    })
    .catch(function(error)
    {
        MSJERROR();
    })
}



//mensaje de OK
const MSJOK = () => {
    Swal.fire({
        title: "Buen Trabajo!",
        text: "Publicacion creada!",
        icon: "success"
      });
  

}
// mensaje de error
const MSJERROR = () => {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "publicacion no creada, verifica los campos!!",
      });
    
}

let urlIMG: any;


const handleImageUpload = async (e:any) => {
   // detectar el archivo
   const archivoIMG = e.target.files[0];
    //cargar esto al storage
    const refArchivoIMG = ref(storage, `posteos/${archivoIMG.name}`);
    await uploadBytes(refArchivoIMG, archivoIMG)
    //obtener la url de la imagen
    urlIMG = await getDownloadURL(refArchivoIMG)

    
  };



useEffect(() => {
    const handleClick = () => {
      let name = $("#name").val();
      let telefono = $("#telefono").val();
      let domicilio = $("#domicilio").val();
      let descripcion = $("#descripcion").val(); 
      let img = urlIMG;


    
      
      const local = {
        name, domicilio, descripcion,img,telefono
      }

      if(!name || !domicilio || !telefono  || !descripcion){
          MSJERROR();
      } else {
        CrearPublicacionMascota(local);
          $("#btnsave").off('click', handleClick); // Desregistra el evento click
          
      }
    }

    $("#btnsave").on('click', handleClick);

    return () => {
        
        $("#btnsave").off('click', handleClick); // Desregistra el evento click al desmontar el componente
        urlIMG="";
    }
  }, []);


return (
    
  <>
   
<div style={fondoColorPagina}>

<h1 style={h1}>Crear Publicacion del Local</h1>
  
  <form style={formStyle}>
    
      <div>
        <label htmlFor="nombre">Nombre:</label><br />
        <input style={inputStyle}
          type="text"
          id="name"
          placeholder="Ingrese nombre"
          
        />
      </div>


      <div>
        <label htmlFor="domicilio">domicilio:</label><br />
        <input style={inputStyle}
          type="text"
          id="domicilio"
          placeholder="Ingrese su domicilio"
          
        />
      </div>

      <div>
        <label htmlFor="telefono">telefono:</label><br />
        <input style={inputStyle}
          type="text"
          id="telefono"
          placeholder="Ingrese telefono de contacto"
          
        />
      </div>
      
    
      <div>
        <label htmlFor="descripcion">descripcion:</label><br />
        <textarea style={inputStyle}
          id="descripcion"
          placeholder="Agrege una breve descripcion"
         
        />
      </div>
      <div>
        <label htmlFor="img">agrega un imagen:</label> <br />
        <input style={inputStyle}
        type="file"
        accept="image/*"
          id="img"
          onChange={handleImageUpload}
         
        />
      </div>


      <button id="btnsave" style={buttonStyle} type="button">Crear publicacion</button>
    
    </form>

  <div  style={volverInicio}>
    <Link to="/locales">
    <button >volver al inicio</button>
    </Link>
  
  </div>
 



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
 
  paddingBottom: "30px",
  paddingTop: "20px"
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



export default CrearPublicacionLocal;
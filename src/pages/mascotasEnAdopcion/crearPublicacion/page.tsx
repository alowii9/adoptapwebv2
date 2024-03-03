'use client'

import React, {useEffect} from "react";
import db from "../../../Firebase/FirebaseConfig";
import Swal from "sweetalert2";
import $ from 'jquery';
import { useNavigate } from 'react-router-dom';
import {getStorage, ref, uploadBytes, getDownloadURL}  from 'firebase/storage';
import { Link } from "react-router-dom";


const storage = getStorage()

const CrearPublicacion = () => {

const mover = useNavigate();

    //funcion para agregar publicacion en firebase
const crearPublicacionMascota = (mascota: any) => {
  const {name, edad, domicilio, raza, telefono, descripcion,img} = mascota;
    db.collection("mascotas").add({
  name,
  edad,
  domicilio,
  raza,
  telefono,
  descripcion,
  img,
       
    })
    .then(function(docRef) {
        MSJOK();
        mover('/mascotasEnAdopcion');
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


const handleImageUpload = async (e: any) => {
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
      let edad = $("#edad").val();
      let domicilio = $("#domicilio").val();
      let raza  = $("#raza").val();
      let telefono = $("#telefono").val();
      let descripcion = $("#descripcion").val(); 
      let img = urlIMG;

      
      const publicacion = {
        name, edad, domicilio, raza, telefono, descripcion,img
      }

      if(!name || !edad || !domicilio || !raza || !telefono || !descripcion){
          MSJERROR();
      } else {
          crearPublicacionMascota(publicacion);
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

<h1 style={h1}>Crear Publicacion de Mascota en Adopcion</h1>
  
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
        <label htmlFor="edad">edad:</label><br />
        <input style={inputStyle}
          type="text"
          id="edad"
          placeholder="Ingrese su edad"
          
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
        <label htmlFor="raza">raza:</label><br />
        <input style={inputStyle}
          type="text"
          id="raza"
          placeholder="Ingrese su raza"
          
        />
      </div>
      <div>
        <label htmlFor="estado">telefono:</label><br />
        <input style={inputStyle}
          type="text"
          id="telefono"
          placeholder="ingrese un telefono de contecto"
         
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
        <label htmlFor="img">agrega un imagen:</label>
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
        <Link to="/mascotasEnAdopcion">
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
  paddingTop: "20px",
  justifyContent: "flex"
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



export default CrearPublicacion;
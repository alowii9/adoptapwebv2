'use client'

import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import db from "../../../Firebase/FirebaseConfig";
import NavPrincipal from "../../../componentes/NavPrincipal";
import { Link } from "react-router-dom";



interface Tienda{
  id:string,
  name: string,
  domicilio: string,
  descripcion: string,
  telefono: string,
  img: string,

}

const DetalleTienda = () => {
  const {id} = useParams<{id:string}>();
  const [tienda, settienda] = useState<Tienda | null>(null);

  
 
  useEffect(() => {
    const fetchData = async () => {
      try{
        const doc = await db.collection("Locales").doc(id).get();
        if(doc.exists){
          settienda({ id: doc.id, ...doc.data() } as Tienda);
        } else {
            console.log("No se encontra el local el ID proporcionado");
        }
       
      }catch(error){
        console.error("Error al obtener el local",error);
      }
     
    };
    fetchData();
  }, [id]);


  return (
    <>
      <NavPrincipal />
      { tienda ? ( 
          <div style={imagenesMuestra}>
             <div style={carta}>
              <img style={img} src={tienda.img} alt={tienda.name} />
              <p style={p}>Nombre local: {tienda.name}</p>
              <p style={p}>Telefono: {tienda.telefono}</p>
              <p style={p}>Domicilio: {tienda.domicilio}</p>
              <p style={p}>Descripcion: {tienda.descripcion}</p>
            </div>
         
          </div>
      ) : (
        <p> No se encontro una Local con el Id proporcionado</p>
      )
    
    }
 

	 

      <Link to="locales">
      <button style={volverInicio}>Regresar</button>
      </Link>
        
     
    </>
  );
  

        }


/*
 
      

*/




//Estilos

const volverInicio = {

 marginLeft: "50%",
 marginBotton: "10%",
}



const imagenesMuestra = {

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "30px",

}

const carta = {
  border: "1px solid #ccc",
  borderRadius: "10px",
  padding: "10px",
  
  justifyContent: "center",
  marginLeft: "20px",
  marginBottom: "20px",
  marginTop: "20px",
  paddingBottom: "20px",
  backgroundColor: "grey"
  

}

const img = {
  width: "200px",
  height: "200px",
  borderRadius: "10px",
}

const p = {

  color: "pearl",
  fontSize: "20px",
  fontFamily: "Arial"
}


export default DetalleTienda;

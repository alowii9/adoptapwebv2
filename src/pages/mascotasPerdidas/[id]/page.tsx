'use client'

import React, {useState, useEffect} from "react";
import db from "../../../Firebase/FirebaseConfig";
import NavPrincipal from "../../../componentes/NavPrincipal";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

interface Mascota{
  id:string,
  name: string,
  domicilio: string,
  descripcion: string,
  telefono: string,
  img: string,
  edad: string,
  raza: string, 

}

const DetalleMascotaPerdida = () => {
  const {id} = useParams<{id:string}>();
  const [mascota, setmascota] = useState<Mascota | null>(null);

  
 
  useEffect(() => {
    const fetchData = async () => {
      try{
        const doc = await db.collection("mascotasPerdidas").doc(id).get();
        if(doc.exists){
          setmascota({ id: doc.id, ...doc.data() } as Mascota);
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
      { mascota ? ( 
          <div style={imagenesMuestra}>
             <div style={carta}>
              <img style={img} src={mascota.img} alt={mascota.name} />
              <p style={p}>Nombre local: {mascota.name}</p>
              <p style={p}>edad: {mascota.edad}</p>
              <p style={p}>raza: {mascota.raza}</p>
              <p style={p}>Telefono: {mascota.telefono}</p>
              <p style={p}>Domicilio: {mascota.domicilio}</p>
              <p style={p}>Descripcion: {mascota.descripcion}</p>
            </div>
         
          </div>
      ) : (
        <p> No se encontro una Local con el Id proporcionado</p>
      )
    
    }
 
        <Link to="/mascotasPerdidas">
        <button style={volverInicio}>Regresar</button>
        </Link>
        
     
    </>
  );
  

        }


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


export default DetalleMascotaPerdida;

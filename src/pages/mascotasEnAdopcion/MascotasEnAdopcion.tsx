import React from "react";
import NavPrincipal from "../../componentes/NavPrincipal";
import GrillaFotosId from "../../componentes/GrillaFotosId";
import { Link } from "react-router-dom";

const MascotasEnAdopcion = () => {
  

return (

    <>
    <NavPrincipal/ >
  
    <section>
    <div  style={volverInicio}>
      <Link to="/crearPublicacion"> 
           <button >Crear publicación</button>
      </Link>
  </div>
  <GrillaFotosId/ >
    </section>

    </>

)

}

//estilo

const volverInicio = {
    display:"flex",
    justifyContent: "center",
    alignItems: "center",
   height :"10vh",
  
    
  }


export default MascotasEnAdopcion;


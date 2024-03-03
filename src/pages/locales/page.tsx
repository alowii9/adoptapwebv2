import React from "react";
import NavPrincipal from "../../componentes/NavPrincipal";
import GrillaFotosId3 from "../../componentes/GrillaFotosId3";
import { Link } from "react-router-dom";

const Locales = () => {
  

return (

    <>
    <NavPrincipal/ >
  
    <section>
    <div  style={volverInicio}>
      <Link to="/crearPublicacionLocal">
      <button >Crear publicación</button>
      </Link>
          
 
    
  </div>
  <GrillaFotosId3/ >
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


export default Locales;


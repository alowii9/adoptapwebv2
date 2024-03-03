import React from "react";
import NavPrincipal from "../../componentes/NavPrincipal";
import GrillaFotosId2 from "../../componentes/GrillaFotosId2";
import { Link } from "react-router-dom";

const MascotasPerdidas = () => {
  
return (

    <>
    <NavPrincipal/ >
  
    <section>
    <div  style={volverInicio}>
      <Link to="/crearPublicacionPerdidas">
      <button >Crear publicación</button>
      </Link>
 
    
  </div>
  <GrillaFotosId2/ >
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


export default MascotasPerdidas;


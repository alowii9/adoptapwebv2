import React from "react";
import NavPrincipal from "../../componentes/NavPrincipal";
import GrillaFotosId2 from "../../componentes/GrillaFotosId2";

const MascotasPerdidas = () => {
  
return (

    <>
    <NavPrincipal/ >
  
    <section>
    <div  style={volverInicio}>
  <button ><a  href="/crearPublicacionPerdidas">Crear publicación</a></button>
    
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


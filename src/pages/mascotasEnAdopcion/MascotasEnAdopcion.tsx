import React from "react";
import NavPrincipal from "../../componentes/NavPrincipal";
import GrillaFotosId from "../../componentes/GrillaFotosId";

const MascotasEnAdopcion = () => {
  

return (

    <>
    <NavPrincipal/ >
  
    <section>
    <div  style={volverInicio}>
  <button ><a  href="/crearPublicacion">Crear publicación</a></button>
    
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


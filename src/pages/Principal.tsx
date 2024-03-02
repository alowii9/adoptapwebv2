'use client'

import React from "react";
import GridDeImagenes from "../componentes/Grillafotos";
import NavPrincipal from "../componentes/NavPrincipal";
import { url } from "inspector";
import mascotasEnAdopcion from "./mascotasEnAdopcion/[id]/page";
import GrillaFotosId from "../componentes/GrillaFotosId";
import GrillaFotosId2 from "../componentes/GrillaFotosId2";
import GrillaFotosId3 from "../componentes/GrillaFotosId3";



const Principal = () =>  {

    return(
        
        <>

     <NavPrincipal/ >
  
<section>
    <div style={mascotasNuevas}>

        <h1 style={h1}>MASCOTAS DISPONIBLES PARA ADOPCION</h1>
        <h2 style={h1}>agregados recientemente</h2>
        <GrillaFotosId />
 </div>
 <div>
 
 </div>
</section>

<hr  style={hr} />
<section>

    <div style={mascotasPerdidas}>
        <h1 style={h1}>MASCOTAS PERDIDAS</h1>
        <h2 style={h1}>agregados recientemente</h2>
        <GrillaFotosId2/>  
    </div>

</section>
<hr style={hr}  />

<section >
    <div style={locales}>
    <h1 style={h1}>LOCALES </h1>
    <h2 style={h1}>agregados recientemente</h2>
    <GrillaFotosId3/>

    </div>
    
</section>

<hr style={hr}/>



        </>

    )


}


//estilos
const hr = {
    border: "4px solid #000",
    color: 'black',
}

 
const mascotasNuevas = {
    background: "green",
    backgroundImage: "url(/fondo1.jpg)",
    filter: "brightness(1)",
    

}

const mascotasPerdidas = {
    background: "violet",
    backgroundImage: "url(/fondo2.jpg)",
    


}

const locales = {
    background: "blue",
    backgroundImage: "url(/fondo3.jpg)"
}

const donaciones = {
    background: "grey",
backgroundImage: "url(/fondo1.jpg)"
}


const h1 = {
   
    paddingTop: "20px",
    
}


export default Principal;
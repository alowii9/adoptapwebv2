import React from "react";
import { StyleHTMLAttributes } from "react";
import GridDeImagenes from "./Grillafotos";

const BodyPrincipal = () => {
    
return(

      <>

<section>
    <div style={mascotasNuevas}>

        <h1 style={h1b}>Que es adoptapp?</h1>
        <h2 style={BlancoText}>Adoptap es una aplicacion para que puedan conseguir un compañero , un integrante más <br />
        de la familia, en el caso de perdida de una animal poder aportar informacion para su busqueda,
        tenes un negocio?, compartilo con la comunidad y expendite!, sumate!
        <br />
        </h2>
        


    </div>
</section>

   
      <hr />
      <section style={seccion2}>

        <div>
          <img style={foto2} src="salvaAdopta.jpg" alt="" />
        </div>

        <div>
          <h1 style={h1}>Requisitos para adoptar una mascota</h1>
      <ul style={ulStyle}>
        <li style={liStyle}>1.- Ser mayor de 21 años. </li>
        <li style={liStyle}>2.- Amar a las mascotas y poder dedicarle el tiempo que necesite.</li>
        <li style={liStyle}>3.- Querer sumar un integrante a tu vida por el resto de la suya, sin importar los cambios que se presenten.</li>
        <li style={liStyle}>4.- Estar bien predispuesto: te pedimos cargues tu solicitud, 
                realices una entrevista con el especialistas y respondas a nuestro contacto.</li>
        <li style={liStyle}>5.- Comprometerse con el cuidado, la salud y la castración de la mascota.</li>

      </ul>
  
        </div>
      </section>
      
      <section  style={carta}>
      <div  style={donar}>

        <h1 style={h1b}>DONACIONES PARA FUNDACIONES</h1>
        <div >
          <p style={BlancoText} >Todo lo recaudado sera enviado <br />
             a distintas asociaciones <br />
            para mejorarle la vida a nuestros amigos peluditos
          </p>
        </div>
       
          
        
        
         
        

    </div>
      </section>
      
  
    
    </>


)

}


//Estilos

const seccion2 = {

  display:'flex',
  alignItems: "center",
  justifyContent: "center",

}

const mascotasNuevas = {
  backgroundImage: "url(/perros.jpg)",
  filter: "brightness(1)",
 

}

const donar = {
  backgroundImage: "url(/huellitas.png)",
  filter: "brightness(-6)",
  border: "black 2px solid"

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


const h1 = {
 
  paddingTop: "20px",
 
}

const h1b = {
 
  paddingTop: "20px",
  color: "White",
  webkitTextStroke: '1px black',
}

const BlancoText = {
  color: "White",
 
  paddingBottom: "20px",
  
  
}

const liStyle = {
  margin: '0 10px',
  fontFamily: "Arial",
  paddingTop: "10px",
  marginBottom: "10px",
};

const ulStyle = {
  listStyle: 'none',
  display: 'grid'
};

const foto2 = {
  border: "black 5px solid",
  borderImageSlice: "27 ",
  borderRadius: "4px",
  marginLeft: "50px",
  display: 'flex',

}
export default BodyPrincipal;
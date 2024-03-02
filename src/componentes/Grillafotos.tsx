import React from 'react';

const GridDeImagenes = () => {
  // Array de URLs de imágenes
  const imagenes = [
    {
      src: "https://64.media.tumblr.com/tumblr_lt7bswjhFd1r4ghkoo1_250.gifv",

    },
    {
      src: "https://64.media.tumblr.com/tumblr_lt7bswjhFd1r4ghkoo1_250.gifv", nombre:"Encontra tu mascota perdida", edad:"6", tipo:"Canino", ubicacion: "Mendoza"

    },
    {
      src: "https://64.media.tumblr.com/tumblr_lt7bswjhFd1r4ghkoo1_250.gifv", nombre:"ave1", edad:"8", tipo:"Ave", ubicacion: "La Pampa"

    },
    


    // ... más URLs de imágenes
  ];




  return (
    <div style={imagenesMuestra}>

    

        <div style={carta} >
          <img style={img} src={"https://64.media.tumblr.com/tumblr_lt7bswjhFd1r4ghkoo1_250.gifv"}  />
          <p style={p}>Explora, busca y enamorate de tu futura mascota</p>
          </div>

        

      
          </div>
    

  );
};

//Estilos

const imagenesMuestra = {

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  

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
  maxWidth:"100%",
  borderRadius: "10px",
}

const p = {

  color: "pearl",
  fontSize: "20px",
  fontFamily: "Arial"
}


export default GridDeImagenes;
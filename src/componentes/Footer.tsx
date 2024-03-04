const Footer = () => {
return (
<footer style={{textAlign:"center"}}>

<div style={fondoFooter}>

<p style={tituloRedes}><u >Redes Sociales</u></p>

     <ul style={listaStyle}>

    
     <br />

       <li style={aStyle}>
        <a  target="_blank" href="http://www.facebook.com" rel="noreferrer">Facebook</a>
        <img  style={icono}  src="/facebook.png" width={20} height={20}  alt="facebookIcono" />
       </li>

       <li style={aStyle}>
           <a   target="_blank" href="http://www.twitter.com" rel="noreferrer">Twitter</a>
           <img  style={icono} src="/twitter.png" width={20} height={20} alt="" />
       </li>

       <li style={aStyle} >

           <a   target="_blank" href="http://www.instagram.com" rel="noreferrer">Instagram</a>
           <img  style={icono} src="/instagram.png" width={20} height={20} alt="" />
       </li> 
   </ul>
   


</div>

</footer>
)
}

// Estilos

const fondoFooter = {
    background: '#000',
    color: '#fff',
}



const tituloRedes = {
    color: "orange",
    fontSize: "20px",
    
    paddingTop: "10px",
    paddingBottom: "20px"
}

const listaStyle = {
   
    display: "flex",
    justifyContent: "center",
    alignItems: "center"

};

const aStyle = {
    display:"inline-block",
    padding: "0 30px",
    paddingBottom:"5px",
     
   

}

// Estilo para separar texto del icono

const icono = {
    display: 'flex',
    verticalAlign: 'middle',
    marginRight: '10px',
    
}




export default Footer;


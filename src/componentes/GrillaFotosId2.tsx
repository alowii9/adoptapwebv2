'use client'
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import  db  from '../Firebase/FirebaseConfig';



interface Mascota {
  id: string,
  name: string,
  domicilio: string,
  descripcion: string, 
  raza: string,
  edad: string,
  img: string,
  telefono: string,


}
// se implemento una interface

const GrillaFotosId2 = () => {
  const [data, setData] = useState<Mascota[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await db.collection("mascotasPerdidas").get();
      const dataArr: any[] = [];
      snapshot.forEach((doc) => {
        dataArr.push({ id: doc.id, ...doc.data() });
      });
      setData(dataArr);
    };
    fetchData();
  }, []);

  return (
    <div style={imagenesMuestra}>
      {data.map((mascota) => (
        <Link to={`/detalleMascotaPerdida/${mascota.id}`} key={mascota.id}> 
         
            <div style={carta}>
              <img style={img} src={mascota.img} alt={mascota.name} />
              <p style={p}>Nombre mascota: {mascota.name}</p>
              <p style={p}>Edad: {mascota.edad}</p>
              <p style={p}>Raza: {mascota.raza}</p>
              <p style={p}>Domicilio: {mascota.domicilio}</p>
              <p style={p}>telefono: {mascota.telefono}</p>
            </div>
         
          </Link>
      ))}
    </div>
  );
};

//Estilos
// sacamos el estilo de wrap 

const imagenesMuestra = {

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: "url(/fondo2.jpg)",
  

}

const carta = {
  border: "1px solid #ccc",
  borderRadius: "10px",
  padding: "10px",
 
  justifyContent: "center",
  marginLeft: "20px",
  marginBottom: "20px",
  marginTop: "20px",
  paddingTop:"20px",
  paddingBottom: "100px",
  backgroundColor: "grey",
  marginRight:"20px"

}

const img = {
  width: '300px',
  heigth: '300px',
  borderRadius: "10px",
}

const p = {

  color: "pearl",
  fontSize: "20px",
  fontFamily: "Arial"
}


export default GrillaFotosId2; 
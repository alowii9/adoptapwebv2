'use client'
import React, {useEffect, useState} from 'react';
import  db  from '../Firebase/FirebaseConfig';
import NavPrincipal from './NavPrincipal';

interface Local{
  id:string,
  name: string,
  domicilio: string,
  descripcion: string,
  telefono: string,
  img: string,

}


const GrillaFotosId3 = () => {
  const [data, setData] = useState<Local[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await db.collection("Locales").get();
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
      {data.map((local) => (
       
          <a href={`locales/${local.id}`} key={local.id}>
            <div style={carta}>
              <img style={img} src={local.img} alt={local.name} />
              <p style={p}>Nombre local: {local.name}</p>
              <p style={p}>Telefono: {local.telefono}</p>
              <p style={p}>Domicilio: {local.domicilio}</p>
              
            </div>
          </a>
     
      ))}
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


export default GrillaFotosId3; 
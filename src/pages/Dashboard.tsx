import React from "react"
import { useState, useEffect} from "react";
import db from "../Firebase/FirebaseConfig";
import Swal from "sweetalert2";
import {getAuth, deleteUser} from "firebase/auth";
import { app } from "../Firebase/FirebaseConfig";
import { getDoc, updateDoc, doc } from "firebase/firestore"
import { useParams } from "react-router-dom";
import NavPrincipal from "../componentes/NavPrincipal";


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

  interface Local{
    id:string,
    name: string,
    domicilio: string,
    descripcion: string,
    telefono: string,
    img: string,
  
  }

  interface Usuario{
    id:string,
    name: string,
    email: string,
    password: string,

  }

const Dashboard = () => {

    const [usuario, setusuario] = useState<Usuario[]>([]);
    const [local, setlocal] = useState<Local[]>([]);
    const [mascotaAdop, setmascotaAdop] = useState<Mascota[]>([]);
    const [mascotaPer, setmascotaPer] = useState<Mascota[]>([]);
    
    const [selectedUsuario, setSelectedUsuario] = useState(null);



    const ConfirmarAccion = () => {
        return window.confirm('¿Confirmar borrado de documento?');

    }

  


    const DeleteUsuario = async (id: any) => {
    
        // Referencia al documento que deseas borrar
        const usuarioId = id;
        const auth = getAuth(app);
        
        if (ConfirmarAccion()) {
            try {
                // Eliminar el usuario autenticado en Firebase Authentication
                
                
                // Eliminar el documento en Firestore
                await db.collection('usuarios').doc(usuarioId).delete();
    
                MSJOK();
            } catch (error) {
                MSJERROR();
            }
        } else {
            // El usuario canceló la acción
            console.log('Borrado cancelado por el usuario');
        }
    };


    const DeleteMascotaAdoptada = async (id: any) => {
    
       
        const mascotaAdop = id;
     
        if (ConfirmarAccion()) {
            try {
              
                await db.collection('mascotas').doc(mascotaAdop).delete();
    
                MSJOK();
            } catch (error) {
                MSJERROR();
            }
        } else {
           
            console.log('Borrado cancelado por el usuario');
        }
    };


    const DeleteMascotaPer = async (id: any) => {
    
     
        const mascotaPer = id;
     
        if (ConfirmarAccion()) {
            try {
             
                await db.collection('mascotasPerdidas').doc(mascotaPer).delete();
    
                MSJOK();
            } catch (error) {
                MSJERROR();
            }
        } else {
           
            console.log('Borrado cancelado por el usuario');
        }
    };


    const DeleteLocal = async (id: any) => {
    
       
        const locales = id;
     
        if (ConfirmarAccion()) {
            try {
                
                await db.collection('Locales').doc(locales).delete();
    
                MSJOK();
            } catch (error) {
                MSJERROR();
            }
        } else {
           
            console.log('Borrado cancelado por el usuario');
        }
    };



    //mensaje de OK
const MSJOK = () => {
    Swal.fire({
        title: "Buen Trabajo!",
        text: "Elemento Eliminado",
        icon: "success"
      });
  

}
// mensaje de error
const MSJERROR = () => {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No se pudo eliminar",
      });
    
}



    useEffect(() => {
    const fetchDataUsuario = async () => {
      const snapshot = await db.collection("usuarios").get();
      const dataArr: any[] = [];
      snapshot.forEach((doc) => {
        dataArr.push({ id: doc.id, ...doc.data()});
      });
      setusuario(dataArr);
    };
    
  
    const fetchDataMascotaAdop = async () => {
      const snapshot = await db.collection("mascotas").get();
      const dataArr: any[] = [];
      snapshot.forEach((doc) => {
        dataArr.push({ id: doc.id, ...doc.data()});
      });
      setmascotaAdop(dataArr);
    };
   
  
    const fetchDataMascotaPer = async () => {
      const snapshot = await db.collection("mascotasPerdidas").get();
      const dataArr: any[] = [];
      snapshot.forEach((doc) => {
        dataArr.push({ id: doc.id, ...doc.data()});
      });
      setmascotaPer(dataArr);
    };
   
  
    const fetchDataLocal = async () => {
      const snapshot = await db.collection("Locales").get();
      const dataArr: any[] = [];
      snapshot.forEach((doc) => {
        dataArr.push({ id: doc.id, ...doc.data()});
      });
      setlocal(dataArr);
    };

    



fetchDataUsuario();
fetchDataMascotaAdop();
fetchDataMascotaPer();
fetchDataLocal();


}, []);







    return (
        <>
        <NavPrincipal/>
        <section style={fondo}>
        <section>
            <h1 style={{textAlign:"center"}}> Tabla de Usuarios</h1>

            <table style={carta}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>nombre</th>
                        <th>email</th>
                        <th>password</th>
                        <th>acciones</th>
                    </tr>
                </thead>
                <tbody>
                {usuario.map((usuario) => (
     
                        <tr>
                         <td>{usuario.id}</td>
                        <td>{usuario.name}</td>
                        <td>{usuario.email  }</td>
                        <td>{usuario.password}</td>
                     
                        <td>
                            <button >Editar</button>
                            <button style={colorbtnborrar} onClick={() => DeleteUsuario(usuario.id)}>Borrar</button>
                        </td>
                    </tr>
        ))}
                </tbody>
            </table>
           


        </section>
        
        <section>
        <h1 style={{textAlign:"center"}}> Tabla de Mascotas en adopcion</h1>            

                <table style={carta}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Imagen</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mascotaAdop.map((mascotaAdop) => (
                            <tr >
                                <td>{mascotaAdop.id}</td>
                                <td>{mascotaAdop.name}</td>
                               <td> <img src={mascotaAdop.img} width={150} height={150} alt="" /></td> 
                               
                                <td>
                                    <button>Editar</button>
                                    <button style={colorbtnborrar} onClick={() => DeleteMascotaAdoptada(mascotaAdop.id)}>Borrar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
            
            <section>
            
            <h1 style={{textAlign:"center"}}> Tabla de Mascotas Perdidas</h1>               
                <table style={carta}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Imagen</th>
                            <th>Acciones</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {mascotaPer.map((mascotaPer) => (
                            <tr>
                                <td>{mascotaPer.id}</td>
                                <td>{mascotaPer.name}</td>
                                <td><img src={mascotaPer.img} width={150} height={150} alt="" /></td>
                               
                                <td>
                                    <button>Editar</button>
                                    <button style={colorbtnborrar} onClick={() => DeleteMascotaPer(mascotaPer.id)}>Borrar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
            
            <section>

            <h1 style={{textAlign:"center"}}> Tabla de Locales </h1>               

                <table style={carta}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Imagen</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {local.map((local) => (
                            <tr >
                                <td>{local.id}</td>
                                <td>{local.name}</td>
                                <td><img src={local.img} width={150} height={150} alt="" /></td>
                               
                                <td>
                                    <button>Editar</button>
                                    <button style={colorbtnborrar} onClick={() => DeleteLocal(local.id)}>Borrar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </section>    
            </>


      );


}


//estilos

const carta = {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "10px",
    justifyContent: "center",
    margin: "20px auto",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "grey",
};

const colorbtnborrar = {
    color: "white",
    backgroundColor: "red",
}

const fondo = {
    backgroundImage: "url(/fondoDash.jpg)",
    justifyContent: "center",
    backgroundSize: "70%" 


}

  

export default Dashboard;



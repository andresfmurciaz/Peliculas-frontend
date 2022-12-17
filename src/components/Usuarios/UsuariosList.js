import { useEffect,useState } from "react";

export function UsuariosList(){
const [usuarios,setUsuarios ]= useState([])


function cargar ()
{
//se traen la url con los datos del backend
    fetch("http://localhost:3000/api/usuarios")
    .then(response=>response.json())
    .then(data=>{console.log(data)
      setUsuarios(data)
    })
    .catch(err =>  console.log("error" + err))
  }


//para tner un arden y correr losmetodos que estan en el use effect
useEffect(()=>{
    cargar()
},[])



//se crea una tabla mostrando los datos en este caso nombre 
return <>


<table class="table col-md-8 offset-8">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">nombre</th>
      <th scope="col">correo</th>
      <th scope="col">contrasena</th>
      
    </tr>
  </thead>
  <tbody>
    
      
      {usuarios.map(dato=>(   
       <tr>
       <th scope="row">{1}</th>
       <td>{dato.nombre} </td>
       <td>{dato.correo} </td>
       <td>{dato.contrasena} </td>
       </tr>


        ))}
       
    
    
   
  </tbody>
</table>




</>



}
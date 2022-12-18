import { useEffect,useState } from "react";
import { Link } from 'react-router-dom'
export function ItemsList(){
const [items,setItems ]= useState([])


function cargar ()
{
//se traen la url con los datos del backend
    fetch("http://localhost:3000/api/items")
    .then(response=>response.json())
    .then(data=>{console.log(data)
      setItems(data)
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
      <th scope="col">Titulo</th>
      <th scope="col">Tipo</th>
      <th scope="col">Año</th>
    </tr>
  </thead>
  <tbody>
    
      
      {items.map(dato=>(   
       <tr>
       <th scope="row">1</th>
       <td>{dato.titulo} </td>
       <td>{dato.tipo} </td>
       <td>{dato.ano} </td>

       <td><Link to={`/Tablero/itemsEditar/${dato._id}`} >Editar</Link></td>  
    
       </tr>


        ))}
       
    
    
   
  </tbody>
</table>



</>



}
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
<table>
    {usuarios.map(dato=>(
        <tr>
            <td>{dato.nombre}</td>
        </tr>
        ))}
</table>

</>



}
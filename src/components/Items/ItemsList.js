import { useEffect,useState } from "react";

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
<table>
    {items.map(dato=>(
        <tr>
            <td>{dato.titulo}</td>
        </tr>
        ))}
</table>

</>



}
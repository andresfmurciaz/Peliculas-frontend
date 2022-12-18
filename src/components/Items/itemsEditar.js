import { useParams } from "react-router-dom"
import { useEffect } from "react"


export function ItemsEditar(){
   const {_id} = useParams()
    useEffect(()=>{

fetch("http://localhost:3000/api/items/6390a713c3103cabbb57d5ac")
.then(response=>response.json())
.then(data=>{console.log(data)})
    },[])
    
    
return<>editando rey
</>

}
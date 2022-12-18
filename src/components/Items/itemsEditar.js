import { useParams } from "react-router-dom";

export function ItemsEditar(){
const {id}= useParams()
console.log(id)


return<>editando rey

</>

}
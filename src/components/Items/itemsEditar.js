import { useParams } from "react-router-dom"
import { useEffect,useRef } from "react"


export function ItemsEditar(){

    const refTitulo = useRef(null)
    const refImagen = useRef(null)
    
   const {id} = useParams()
    useEffect(()=>{

fetch("http://localhost:3000/api/items/" + id)
.then(response=>response.json())
.then(data=>{console.log(data)})
    },[])
    
    
//creo el metodo con el que s eva hacer la actualizacion pero primero tengo que tener el backen con la url funcionando
const handleSubmit =()=>{
const item = {
"id":id,
"titulo":refTitulo.current.value,
"img": refImagen.current.value

}

const options={
method: "PUT",
headers :{
    "Content-Type" : "application/json"
},
body : JSON.stringify(item)

}

fetch("http://localhost:3000/api/items/" ,options)
.then(response=>response.json())
.then(data=>{console.log(data)})
    }








return<>
<form>
<div class="form-group col-md-8 offset-8"> 
<label
for="exampleInputEmail1">
Nombre
</label>
<input 
type="texto" className="form-control  " ref={refTitulo} />
</div>

<div class="form-group col-md-8 offset-8"> 
<label
for="exampleInputEmail1">
Imagen
</label>
<input 
type="texto" className="form-control  " ref={refImagen} />
</div>
<div class="form-group my-4 col-md-8 offset-8">
<button type="button" className="btn btn-primary" onClick={handleSubmit}>
Guardar
</button>

</div>








</form>
</>

}
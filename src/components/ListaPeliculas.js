
import {Pelicula} from './Pelicula'

export function ListaPeliculas(){

fetch("http://localhost:3000/api/items")
.then(response=>response.json())
.then(data=>{console.log(data)})

.catch(err =>  console.log("error" + err))



    return<>
<div className ="row my-2">
  <div className="container">
    <div className="row align-center">
      <div className = "col-m-5">
        <Pelicula titulo="Tiburon 3"
        imagen="https://www.rdstation.com/blog/wp-content/uploads/sites/2/2017/09/thestocks.jpg"
         duracion = {4} 
         tipo="Pelicula" 
         anio="1937"
          />

        </div>
      </div>
    </div>
  </div>
  </>
}
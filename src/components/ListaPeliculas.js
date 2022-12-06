
import {Pelicula} from './Pelicula'

export function ListaPeliculas(){
    return<>
<div class ="row my-2">
  <div className="container">
    <div className="row align-center">
      <div className = "col-m-100">
        <Pelicula titulo="Tiburon 3" duracion = {4} actores = {[{nombre:"camila"},{nombre:"anita"}]}  calificacion ={4}  />

        </div>
      </div>
    </div>
  </div>
  </>
}
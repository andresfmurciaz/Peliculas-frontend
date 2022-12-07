export  function Pelicula(props){

return<>
<div className = "col-3">
<div class="card" >
  <img src={props.imagen} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.titulo}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{props.tipo}</li>
    <li class="list-group-item">{props.anio}</li>
    <li class="list-group-item">{props.duracion}</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>

  </div>
</div>
</div>

</>
}



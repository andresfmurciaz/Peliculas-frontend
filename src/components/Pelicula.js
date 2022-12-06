export  function Pelicula(props){





const titulo="chuky"
const anio =1928
const genero = "drama"
const resena = "pelicula de miedo de un muñeco ata gente"



function reparto(actores){
let text = ""
actores.forEach(element => {
    text += element.nombre + ","

});
return text

}

return<div>
<h1>{titulo}</h1>
<h5>{anio}</h5>
<h3>{genero} - {resena}</h3>
<h1>Duracion:{props.duracion}</h1>
<h1>{reparto(props.actores)}</h1>
</div>
}
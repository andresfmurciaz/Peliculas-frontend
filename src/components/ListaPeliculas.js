
import {Pelicula} from './Pelicula'
import {useState,useEffect} from 'react'


export function ListaPeliculas(){





    const [items,setItems]= useState([])


    function cargar(){
    fetch("http://localhost:3000/api/items")
    .then(response=>response.json())
    .then(data=>{console.log(data)
      setItems(data)
    })
    .catch(err =>  console.log("error" + err))
  }

//para cargar lo de la clase
  useEffect(()=>{cargar()},[])
    
  

    return<>
<div className ="row my-4">
  <div className="container">
    
      <div className = "col-m-9">
        
        <div className='row'>
      {items.map(dato=>(


         <Pelicula titulo ={dato.titulo}
                   tipo ={dato.tipo} 
                   ano={dato.ano}
                   duracion={dato.duracion}
                   img = {dato.img}
                   genero={dato.genero}
                   
                   />
      ))}
          
          </div>


        
      </div>
    </div>
  </div>
  </>
}
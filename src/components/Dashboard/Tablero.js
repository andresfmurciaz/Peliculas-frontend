

import {useEffect} from 'react' 
import {Routes,Route,Link} from 'react-router-dom'

import { GenerosList } from '../Generos/GenerosList'
import { ItemsList } from '../Items/ItemsList'
import { UsuariosList } from '../Usuarios/UsuariosList'
import {useNavigate} from 'react-router-dom'
import { ListaPeliculas } from '../ListaPeliculas'
import { ItemsEditar } from '../Items/ItemsEditar'
export function Tablero(){
//guardo el token que ya esta generado en el login
 //   const token = localStorage.getItem("tokrn")

 const navigate =useNavigate()
useEffect (()=>{
console.log('validando inicio')
try {
const token= localStorage.getItem("token")    
console.log(token)
if(!token){
navigate('/')
}

} catch (error) {
    console.log('error')

    navigate ('/')
}


})

//funcion para eliminar el localstora y que se borre el token de ACCESO
const hadleCerrar =()=>{
localStorage.removeItem("token")
navigate  ('/login')

}

const navegaGenero =()=>{
  
    navigate  ('/Tablero/generosList')
    
    }


    
const navegaItems =()=>{
  
    navigate  ('/Tablero/itemsList')
    
    }
    

    
const navegaUsuario =()=>{
  
    navigate  ('/Tablero/usuariosList')
    
    }
    
    

    return<>  <h1> hola tablero </h1>
  
<div className='row'>

<div className='col-1'>

<ul>
    
<div className='col-1'>
    <button type="button" onClick={navegaGenero} class="btn btn-outline-primary">Genero</button>  
 
    <div class="checkbox mb-2"> </div>

    <button type="button" onClick={navegaItems} class="btn btn-outline-primary">Items</button>     
    
    <div class="checkbox mb-2"> </div>
    
    <button type="button" onClick={navegaUsuario} class="btn btn-outline-primary">Usuario</button>      
    
    </div>   
</ul>

</div>

<div className='col-1'>

<Routes>

    <Route path ="/generosList" element = {<GenerosList/>}> </Route>
    

    <Route path ="/itemsList" element = {<ItemsList/>}> </Route>
    <Route path ="/itemsEditar/:id" element = {<ItemsEditar/>}> </Route>

    
    <Route path ="/usuariosList" element = {<UsuariosList/>}> </Route>


</Routes>
</div>

</div><div class="checkbox mb-2"> </div>

    

<button type="button"  onClick={hadleCerrar} class="btn btn-outline-danger">cerrar</button>

    </>



}
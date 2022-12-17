

import {useEffect} from 'react' 
import {Routes,Route,Link} from 'react-router-dom'

import { GenerosList } from '../Generos/GenerosList'
import { ItemsList } from '../Items/ItemsList'
import { UsuariosList } from '../Usuarios/UsuariosList'
import {useNavigate} from 'react-router-dom'
import { ListaPeliculas } from '../ListaPeliculas'
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

    return<>  <h1> hola tablero </h1>
  
<div className='row'>

<div className='col-1'>

hola
<ul>
    <li>
        <Link to="/Tablero/generosList">Generos</Link>     
    </li>
    <li>
        <Link to="/Tablero/itemsList">Items</Link>     
    </li>
    <li>
        <Link to="/Tablero/usuariosList">Usuario</Link>     
    </li>
    
</ul>

</div>

<div className='col-1'>

<Routes>

    <Route path ="/generosList" element = {<GenerosList/>}> </Route>
    <Route path ="/itemsList" element = {<ItemsList/>}> </Route>
    <Route path ="/usuariosList" element = {<UsuariosList/>}> </Route>


</Routes>
</div>

</div>






<div>

<button type="button" class="btn btn-outline-primary">Primary</button>
<button type="button" class="btn btn-outline-secondary">Secondary</button>
<button type="button" class="btn btn-outline-success">Success</button>
<button type="button" class="btn btn-outline-danger">Danger</button>
<button type="button" class="btn btn-outline-warning">Warning</button>
</div>



    <div class="checkbox mb-2">
      
      </div>

    
<button onClick={hadleCerrar}>cerrar</button>


    </>



}
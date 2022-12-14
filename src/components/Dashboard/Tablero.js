

import {useEffect} from 'react' 

import {useNavigate} from 'react-router-dom'
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

    return<>  <h1>hola tablero </h1>
    <button onClick={hadleCerrar}>cerrar</button>

    </>



}
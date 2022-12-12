import {useRef} from 'react'
//import {useState,useEffect} from 'react'
//import swal from 'sweetalert2'
export function Login(){
const correoRef = useRef()
const contrasenaRef = useRef()
//captura el evento de casilla
const hadleChange= (ev)=>{console.log(ev.target.value)}
//crear evento que capture los don valores se declara en el formulario
const handleSubmit =(ev)=>{   
ev.preventDefault()
console.log("enviando datos")
//capturo el dato que me digitan
const  correo= correoRef.current.value
const contrasena = contrasenaRef.current.value
//creao un avriable para tener los dos datos
const usuario={
'correo':correo,
'contrasena':contrasena
}

const  options={
method :"POST",
body : JSON.stringify(usuario),
headers:{
"Content-Type" :"application/json"
}
}


fetch("http://localhost:3000/api/usuarios/login",options)
.then(response => response.json())
.then(data=>{console.log(data)})
.catch(err=>console.log(err))


}
return<div class="col-md-4 offset-4">
<main class="form-signin w-100 m-auto">
  <form onSubmit={handleSubmit}>
  <div class="checkbox mb-3">
      
      </div>
    <img class=" h3 mb-1 fw-normal col-md-8 offset-2" src="https://blog.formaciongerencial.com/wp-content/uploads/2020/01/Guerra-del-Streaming-2020.png" alt="" width="80" height="120"/>
    <div class="checkbox mb-3">
      
      </div>
    <h1 class="h3 mb-3 fw-normal col-md-4 offset-5" >Login </h1>

    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={hadleChange}  ref={correoRef}/>
      <label for="floatingInput"  >Usuario</label>
    </div>
    <div class="checkbox mb-2">
      
      </div>
    <div class="checkbox mb-2">
      
      </div>

    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password" onChange={hadleChange} ref={contrasenaRef}/>
      <label for="floatingPassword">Contraseña</label>
    </div>

    <div class="checkbox mb-3">
      
    </div>
    <button class=" w-100 btn btn-lg btn-primary btn-dark " type="submit" onClick={function(){console.log('holka')}}>Entrar</button>
   
  </form>
</main>
</div>





}
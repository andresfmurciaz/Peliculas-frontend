import {useRef} from 'react'
import swal from 'sweetalert2'
export function Login(){
const correoRef = useRef()

//captura el evento de casilla
const hadleChange= (ev)=>{console.log(ev.target.value)}

//crear evento que capture los don valores se declara en el formulario
const handleSubmit =(ev)=>{

ev.preventDefault()

console.log("enviando datos")
//guarda correo
const correo= correoRef.current.value
console.log("correo" + correo)
if(correo==="admin@h"){

swal.fire({
  title:"Validacion",
  text:"Datos Correctos",
  icon:"success"
})

}else{
  swal.fire({
    title:"Validacion",
    text:"Datos incorrectos",
    icon:"error"
  })
}


}

return<>



<body class="container-fluid">
<div class="col-md-4 offset-4">
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
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password" onChange={hadleChange}/>
      <label for="floatingPassword">Contraseña</label>
    </div>

    <div class="checkbox mb-3">
      
    </div>
    <button class=" w-100 btn btn-lg btn-primary btn-dark " type="submit" onClick={function(){console.log('holka')}}>Entrar</button>
   
  </form>
</main>
</div>
</body>
</>



}
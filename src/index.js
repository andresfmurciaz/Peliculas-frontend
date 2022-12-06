import { getDefaultNormalizer } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

function mensaje(){
  return <h1>ndo lindo</h1>
}




function Pelicula(){

const titulo="chuky"
const anio =1928
const genero = "drama"
const resena = "pelicula de miedo de un muñeco ata gente"
return<div>
<h1>{titulo}</h1>
<h5>{anio}</h5>
<h3>{genero} - {resena}</h3>

</div>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div>
  <Pelicula/>
</div>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

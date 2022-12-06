import { getDefaultNormalizer } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom/client';

import {Pelicula} from './Pelicula'
import { Header,Menu } from './components/Header';
import './css/bootstrap.min.css'
import './css/bootstrap.min.css.map'





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div>
<Menu/>
<Header/>
<div class ="row my-2">
  <div className="container">
    <div className="row align-center">
      <div className = "col-m-100">
        <Pelicula titulo="Tiburon 3" duracion = {4} actores = {[{nombre:"camila"},{nombre:"anita"}]}  calificacion ={4}  />

        </div>
      </div>
    </div>
  </div>
</div>

);



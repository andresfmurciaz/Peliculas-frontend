import { getDefaultNormalizer } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom/client';

import {Pelicula} from './Pelicula'
import { Header,Menu } from './Header';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div>
<Menu/>
<Header/>

  <Pelicula titulo="Tiburon 3" duracion = {4} actores = {[{nombre:"camila"},{nombre:"anita"}]}/>
</div>

);



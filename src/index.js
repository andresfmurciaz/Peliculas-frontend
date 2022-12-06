
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ListaPeliculas } from './components/ListaPeliculas'; 
import { Header,Menu } from './components/Header';
import { Login } from './components/Login'
import './css/bootstrap.min.css';
import './css/bootstrap.min.css.map';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>

<Menu/>
<Header/>
<ListaPeliculas/>
<Login/>
</>
);



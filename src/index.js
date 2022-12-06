
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ListaPeliculas } from './components/ListaPeliculas'; 
import { Header,Menu } from './components/Header';
import { Login } from './components/Login'
import './css/bootstrap.min.css';
import './css/bootstrap.min.css.map';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
<Router>
    <Menu/>
    <div className='container'>
        <div className='row'>
             <Routes>
                <Route path="/" element = {<ListaPeliculas/>}></Route>
                <Route path="/Login" element = {<Login/>}></Route>

            </Routes>
     
        </div>
    </div>
</Router>
</>
);



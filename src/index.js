import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Contenedor from './elements/Contenedor'
import InicioSesion from './components/InicioSesion'
import RegistroUsuario from './components/RegistroUsuarios'
import ListaDeGastos from './components/ListaDeGastos'
import EditarGasto from './components/EditarGasto'
import GastosPorCategoria from './components/GastosPorCategoria'

import './index.css';
import App from './App';

WebFont.load({
  google: {
    // Work+Sans:wght@400;500;700
    families: ['Work Sans:400,500,700', 'sans-serif']
  }
});

const Index = () => {
  return (
    <BrowserRouter>
      <Contenedor>
        <Switch>
          <Route path="/iniciar-sesion" component={InicioSesion} />
          <Route path="/crear-cuenta" component={RegistroUsuario} />
          <Route path="/categorias" component={GastosPorCategoria} />
          <Route path="/lista" component={ListaDeGastos} />
          <Route path="/editar/:id" component={EditarGasto} />
          <Route path="/" component={App} />
        </Switch>
      </Contenedor>
    </BrowserRouter>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));
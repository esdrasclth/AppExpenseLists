import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import { Helmet } from "react-helmet";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Contenedor from './elements/Contenedor'
import InicioSesion from './components/InicioSesion'
import RegistroUsuario from './components/RegistroUsuarios'
import ListaDeGastos from './components/ListaDeGastos'
import EditarGasto from './components/EditarGasto'
import GastosPorCategoria from './components/GastosPorCategoria'
import favicon from './img/logo.png';
import Fondo from './elements/Fondo'
import { AuthProvider } from './contexts/AuthContext';
import RutaPrivada from './components/RutaPrivada';

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
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      </Helmet>

      <AuthProvider>
        <BrowserRouter>
          <Contenedor>
            <Switch>
              <Route path="/iniciar-sesion" component={InicioSesion} />
              <Route path="/crear-cuenta" component={RegistroUsuario} />

              <RutaPrivada path="/categorias">
                <GastosPorCategoria />
              </RutaPrivada>

              <RutaPrivada path="/lista">
                <ListaDeGastos />
              </RutaPrivada>

              <RutaPrivada path="/editar/:id">
                <EditarGasto />
              </RutaPrivada>

              <RutaPrivada path="/">
                <App />
              </RutaPrivada>
            </Switch>
          </Contenedor>
        </BrowserRouter>
      </AuthProvider>

      <Fondo />
    </>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));
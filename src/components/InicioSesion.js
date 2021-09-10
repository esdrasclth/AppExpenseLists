import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { useHistory } from 'react-router'

import { Header, Titulo, ContenedorHeader } from '../elements/Header'
import { Formulario, Input, ContenedorBoton } from '../elements/ElementosDeFormulario'
import Boton from '../elements/Boton'
import { auth } from '../firebase/firebaseConfig'
import { ReactComponent as SvgLogin } from '../img/login.svg'
import Alerta from '../elements/Alerta'

const Svg = styled(SvgLogin)`
    width: 100%;
    max-height: 12.5rem; /* 100px */
    margin-bottom: 1.25rem; /* 20px */
`;

const IniciSesion = () => {

    const history = useHistory();
    const [correo, establecerCorreo] = useState('');
    const [password, establecerPassword] = useState('');
    const [estadoAlerta, cambiarEstadoAlerta] = useState(false);
    const [alerta, cambiarAlerta] = useState({});

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            establecerCorreo(e.target.value);
        } else if (e.target.name === 'password') {
            establecerPassword(e.target.value);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        cambiarEstadoAlerta(false);
        cambiarAlerta({});

        // Comprobamos del lado del cliente que el correo se valido
        const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
        if (!expresionRegular.test(correo)) {
            cambiarEstadoAlerta(true);
            cambiarAlerta({ tipo: 'error', mensaje: 'Por favor ingresa un correo electronico valido.' })
            return;
        }

        // Comprobamos que todos los campos esten completados
        if (correo === '' || password === '') {
            cambiarEstadoAlerta(true);
            cambiarAlerta({ tipo: 'error', mensaje: 'Por favor rellena todos los datos.' })
            return;
        }

        try {
            await auth.signInWithEmailAndPassword(correo, password)
            console.log('Usuario registrado con exito');
            history.push('/');

        } catch (error) {
            cambiarEstadoAlerta(true);

            let mensaje;
            switch (error.code) {
                case 'auth/wrong-password':
                    mensaje = 'La contraseña no es correcta.'
                    break;
                case 'auth/user-not-found':
                    mensaje = 'No se encontro ninguna cuenta con este correo electrónico.'
                    break;
                default:
                    mensaje = 'Hubo un error al intentar crear la cuenta.'
                    break;
            }

            cambiarAlerta({ tipo: 'error', mensaje: mensaje })
        }
    }

    return (
        <>
            <Helmet>
                <title>Iniciar Sesíon</title>
            </Helmet>

            <Header>
                <ContenedorHeader>
                    <Titulo>Iniciar Sesíon</Titulo>
                    <div>
                        <Boton to="/crear-cuenta">Registrarse</Boton>
                    </div>
                </ContenedorHeader>
            </Header>

            <Formulario onSubmit={handleSubmit}>
                <Svg />
                <Input
                    type="email"
                    name="email"
                    placeholder="Correo Electronico"
                    value={correo}
                    onChange={handleChange}
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={handleChange}
                />

                <ContenedorBoton>
                    <Boton as="button" primario type="submit">Iniciar Sesíon</Boton>
                </ContenedorBoton>
            </Formulario>

            <Alerta
                tipo={alerta.tipo}
                mensaje={alerta.mensaje}
                estadoAlerta={estadoAlerta}
                cambiarEstadoAlerta={cambiarEstadoAlerta}
            />
        </>
    );
}

export default IniciSesion;
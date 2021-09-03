import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import { Header, Titulo, ContenedorHeader } from '../elements/Header'
import { Formulario, Input, ContenedorBoton } from '../elements/ElementosDeFormulario'
import Boton from '../elements/Boton'
import { ReactComponent as SvgLogin } from '../img/registro.svg'

const Svg = styled(SvgLogin)`
    width: 100%;
    max-height: 6.25rem; /* 100px */
    margin-bottom: 1.25rem; /* 20px */
`;

const RegistroUsuario = () => {

    const [correo, establecerCorreo] = useState('');
    const [password, establecerPassword] = useState('');
    const [password2, establecerPassword2] = useState('');

    const handleChange = (e) => {
        switch (e.target.name) {
            case 'email':
                establecerCorreo(e.target.value);
                break;

            case 'password':
                establecerPassword(e.target.value);
                break;

            case 'password2':
                establecerPassword2(e.target.value);
                break;

            default:
                break;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Comprobamos del lado del cliente que el correo se valido
        const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
        if (!expresionRegular.test(correo)) {
            console.log('Por favor ingresa algun correo electronico valido')
            return;
        }

        // Comprobamos que todos los campos esten completados
        if (correo === '' || password === '' || password2 === '') {
            console.log('Por favor rellena todos los datos')
            return;
        }

        // Comprobamos que ambas contraseñas sean iguales
        if (password !== password2) {
            console.log('Las contraseñas no son iguales')
            return;
        }

        console.log('Usuario registrado')
    }

    return (
        <>
            <Helmet>
                <title>Crear Cuenta</title>
            </Helmet>

            <Header>
                <ContenedorHeader>
                    <Titulo>Crear Cuenta</Titulo>
                    <div>
                        <Boton to="/iniciar-sesion">Iniciar Sesion</Boton>
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
                <Input
                    type="password"
                    name="password2"
                    placeholder="Repetir la contraseña"
                    value={password2}
                    onChange={handleChange}
                />

                <ContenedorBoton>
                    <Boton as="button" primario type="submit">Crear Cuenta</Boton>
                </ContenedorBoton>
            </Formulario>
        </>
    );
}

export default RegistroUsuario;
import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import { Header, Titulo, ContenedorHeader } from '../elements/Header'
import { Formulario, Input, ContenedorBoton } from '../elements/ElementosDeFormulario'
import Boton from '../elements/Boton'
import { ReactComponent as SvgLogin } from '../img/login.svg'

const Svg = styled(SvgLogin)`
    width: 100%;
    max-height: 12.5rem; /* 100px */
    margin-bottom: 1.25rem; /* 20px */
`;

const IniciSesion = () => {
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

            <Formulario>
                <Svg />
                <Input
                    type="email"
                    name="email"
                    placeholder="Correo Electronico"
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                />

                <ContenedorBoton>
                    <Boton as="button" primario type="submit">Iniciar Sesíon</Boton>
                </ContenedorBoton>
            </Formulario>
        </>
    );
}

export default IniciSesion;
import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import { Header, Titulo, ContenedorHeader } from '../elements/Header'
import { Formulario, Input, ContenedorBoton } from '../elements/ElementosDeFormulario'
import Boton from '../elements/Boton'
import {ReactComponent as SvgLogin} from '../img/registro.svg'

const Svg = styled(SvgLogin)`
    width: 100%;
    max-height: 6.25rem; /* 100px */
    margin-bottom: 1.25rem; /* 20px */
`;

const RegistroUsuario = () => {
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
                <Input
                    type="password"
                    name="password2"
                    placeholder="Repetir la contraseña"
                />

                <ContenedorBoton>
                    <Boton as="button" primario type="submit">Crear Cuenta</Boton>
                </ContenedorBoton>
            </Formulario>
        </>
    );
}

export default RegistroUsuario;
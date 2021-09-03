import React from 'react'
import { Helmet } from 'react-helmet'

import BtnRegresar from '../elements/BtnRegresar'
import { Header, Titulo } from '../elements/Header'

const ListaDeGastos = () => {
    return (
        <>
            <Helmet>
                <title>Lista de Gastos</title>
            </Helmet>

            <Header>
                <BtnRegresar />
                <Titulo>Lista de Gastos</Titulo>
            </Header>
        </>
    );
}

export default ListaDeGastos;
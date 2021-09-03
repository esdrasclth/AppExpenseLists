import React from 'react'
import { Helmet } from 'react-helmet'

import BtnRegresar from '../elements/BtnRegresar'
import { Header, Titulo } from '../elements/Header'

const GastosPorCategoria = () => {
    return (
        <>
            <Helmet>
                <title>Gastos por Categoría</title>
            </Helmet>

            <Header>
                <BtnRegresar />
                <Titulo>Gastos por Categoría</Titulo>
            </Header>
        </>
    );
}

export default GastosPorCategoria;
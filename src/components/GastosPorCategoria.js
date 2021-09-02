import React from 'react'
import { Helmet } from 'react-helmet'

import { Header, Titulo, ContenedorHeader } from '../elements/Header'

const GastosPorCategoria = () => {
    return (
        <>
            <Helmet>
                <title>Gastos por Categoría</title>
            </Helmet>

            <Header>
                <ContenedorHeader>
                    <Titulo>Gastos por Categoría</Titulo>

                </ContenedorHeader>
            </Header>
        </>
    );
}

export default GastosPorCategoria;
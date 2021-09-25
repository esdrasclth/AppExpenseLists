import React from 'react'
import { Helmet } from 'react-helmet'

import BtnRegresar from '../elements/BtnRegresar'
import { Header, Titulo } from '../elements/Header'
import BarraTotalGastado from './BarraTotalGastado'
import useObtenerGastosDelMesPorCategoria from '../hooks/useObtenerGastosDelMesPorCategoria'

const GastosPorCategoria = () => {
    const gastos = useObtenerGastosDelMesPorCategoria();
    console.log(gastos)

    return (
        <>
            <Helmet>
                <title>Gastos por Categoría</title>
            </Helmet>

            <Header>
                <BtnRegresar />
                <Titulo>Gastos por Categoría</Titulo>
            </Header>

            <BarraTotalGastado />
        </>
    );
}

export default GastosPorCategoria;
import React from 'react'
import { Helmet } from 'react-helmet'

import BtnRegresar from '../elements/BtnRegresar'
import { Header, Titulo } from '../elements/Header'
import BarraTotalGastado from './BarraTotalGastado'
import useObtenerGastos from '../hooks/useObtenerGastos'

const ListaDeGastos = () => {

    const [gastos] = useObtenerGastos();
    console.log(gastos)

    return (
        <>
            <Helmet>
                <title>Lista de Gastos</title>
            </Helmet>

            <Header>
                <BtnRegresar />
                <Titulo>Lista de Gastos</Titulo>
            </Header>

            <BarraTotalGastado />
        </>
    );
}

export default ListaDeGastos;
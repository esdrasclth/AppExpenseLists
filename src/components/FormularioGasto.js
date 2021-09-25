import React, { useState, useEffect } from 'react'
import getUnixTime from 'date-fns/getUnixTime'
import fromUnixTime from 'date-fns/fromUnixTime'
import { useHistory } from 'react-router-dom'

import Boton from '../elements/Boton'
import SelectCategorias from './SelectCategoria'
import DatePicker from './DatePicker'
import agregarGasto from '../firebase/agregarGasto'
import { useAuth } from '../contexts/AuthContext'
import Alerta from '../elements/Alerta'
import editarGasto from '../firebase/editarGasto'
import { ReactComponent as IconoPlus } from '../img/plus.svg'
import { ContenedorFiltros, Formulario, Input, InputGrande, ContenedorBoton } from '../elements/ElementosDeFormulario'

const FormularioGasto = ({ gasto }) => {

    const [inputDescripcion, cambiarInputDescripcion] = useState('');
    const [inputCantidad, cambiarInputCantidad] = useState('');
    const [categoria, cambiarCategoria] = useState('hogar');
    const [fecha, cambiarFecha] = useState(new Date());
    const [estadoAlerta, cambiarEstadoAlerta] = useState(false);
    const [alerta, cambiarAlerta] = useState({});

    const { usuario } = useAuth();
    const history = useHistory();

    useEffect(() => {
        // Comprobamos si hay algun gasto.
        // De ser asi establecemos todo el state con los valores del gasto.
        if (gasto) {
            // Comprobamos que el gasto sea el de usuario actual
            // Para eso comprobamos con uid guardado en el gasto con el uid del usurario actual
            if (gasto.data().uidUsuario === usuario.uid) {
                cambiarCategoria(gasto.data().categoria);
                cambiarFecha(fromUnixTime(gasto.data().fecha));
                cambiarInputDescripcion(gasto.data().descripcion);
                cambiarInputCantidad(gasto.data().cantidad);
            } else {
                history.push('/lista');
            }
        }
    }, [gasto, usuario, history]);

    const handleChange = (e) => {
        if (e.target.name === 'descripcion') {
            cambiarInputDescripcion(e.target.value);
        } else if (e.target.name === 'cantidad') {
            cambiarInputCantidad(e.target.value.replace(/[^0-9.]/g, ''));
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Transformamos la cantidad en numero y le pasamos 2 decimales.
        let cantidad = parseFloat(inputCantidad).toFixed(2);

        // Comprobamos que haya una descripcion y valor
        if (inputDescripcion !== '' && inputCantidad !== '') {
            if (cantidad) {

                if (gasto) {
                    editarGasto({
                        id: gasto.id,
                        categoria: categoria,
                        descripcion: inputDescripcion,
                        cantidad: cantidad,
                        fecha: getUnixTime(fecha)
                    }).then(() => {
                        history.push('/lista')
                    }).catch((error) => {
                        console.log(error)
                    })
                } else {
                    agregarGasto({
                        categoria: categoria,
                        descripcion: inputDescripcion,
                        cantidad: cantidad,
                        fecha: getUnixTime(fecha),
                        uidUsuario: usuario.uid
                    })
                    .then(() => {
                        cambiarCategoria('hogar');
                        cambiarInputDescripcion('');
                        cambiarInputCantidad('');
                        cambiarFecha(new Date());

                        cambiarEstadoAlerta(true);
                        cambiarAlerta({ tipo: 'exito', mensaje: 'El gasto fue agregado correctamente.' })
                    })
                    .catch(err => {
                        cambiarEstadoAlerta(true);
                        cambiarAlerta({ tipo: 'error', mensaje: 'Ocurrio un error al intentar agregar tu gasto. ' + err })
                    })
                }

            } else {
                cambiarEstadoAlerta(true);
                cambiarAlerta({ tipo: 'error', mensaje: 'El valor que ingresates no es correcto.' })
            }
        } else {
            cambiarEstadoAlerta(true);
            cambiarAlerta({ tipo: 'error', mensaje: 'Por favor rellena todos los campos.' })
        }

    }

    return (
        <Formulario onSubmit={handleSubmit}>
            <ContenedorFiltros>
                <SelectCategorias categoria={categoria} cambiarCategoria={cambiarCategoria} />
                <DatePicker fecha={fecha} cambiarFecha={cambiarFecha} />
            </ContenedorFiltros>

            <div>
                <Input
                    type="text"
                    name="descripcion"
                    id="descripcion"
                    placeholder="Descripcion"
                    value={inputDescripcion}
                    onChange={handleChange}
                />
                <InputGrande
                    type="text"
                    name="cantidad"
                    id="cantidad"
                    placeholder="$0.00"
                    value={inputCantidad}
                    onChange={handleChange}
                />
            </div>

            <ContenedorBoton>
                <Boton as="button" primario conIcono type="submit">
                    {gasto ? 'Editar Gasto' : 'Agregar Gasto'} <IconoPlus />
                </Boton>
            </ContenedorBoton>
            <Alerta
                tipo={alerta.tipo}
                mensaje={alerta.mensaje}
                estadoAlerta={estadoAlerta}
                cambiarEstadoAlerta={cambiarEstadoAlerta}
            />
        </Formulario>
    );
}

export default FormularioGasto;
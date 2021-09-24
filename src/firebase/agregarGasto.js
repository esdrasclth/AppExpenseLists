import {db} from './firebaseConfig'

const agregarGasto = ({categoria, cantidad, descripcion, fecha, uidUsuario}) => {
    return db.collection('gastos').add({
        categoria: categoria,
        descripcion: descripcion,
        cantidad: Number(cantidad),
        fecha: fecha,
        uidUsuario: uidUsuario
    });
}

export default agregarGasto;
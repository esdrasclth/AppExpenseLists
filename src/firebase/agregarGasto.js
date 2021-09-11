import {db} from './firebaseConfig'

const agregarGasto = ({categoria, cantidad, descripcion, fecha, uidUsuario}) => {
    db.collection('gastos').add({
        categoria: categoria,
        descripcion: descripcion,
        cantidad: cantidad,
        fecha: fecha,
        uidUsuario: uidUsuario
    });
}

export default agregarGasto;
import { useState, useEffect } from 'react'
import { startOfMonth, endOfMonth, getUnixTime } from 'date-fns';

import { useAuth } from '../contexts/AuthContext'
import { db } from '../firebase/firebaseConfig'

const useObtenerGastosDelMes = () => {
    const [gastos, establecerGastos] = useState([]);
    const { usuario } = useAuth();

    useEffect(() => {
        const inicioDeMes = getUnixTime(startOfMonth(new Date()));
        const finalDeMes = getUnixTime(endOfMonth(new Date()));

        if (usuario) {
    
            const unsuscribe = db.collection('gastos')
                .orderBy('fecha', 'desc')
                .where('fecha', '>=', inicioDeMes)
                .where('fecha', '<=', finalDeMes)
                .where('uidUsuario', '==', usuario.uid)
                .onSnapshot((snapshot) => {
                    establecerGastos(snapshot.docs.map((documento) => {
                        return {...documento.data(), id: documento.id}
                    }))
                })

            // Use Effect tiene que retornar una funcion que se va a ejecutar cuando se desmonte el componente.
            // En este caso queremos que ejecute el unsuscribe a la coleccion de firebase.
            return unsuscribe;
        }

    }, [usuario])

    return gastos;
}

export default useObtenerGastosDelMes;
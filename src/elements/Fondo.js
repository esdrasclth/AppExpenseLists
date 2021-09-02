import React from 'react'
import styled from 'styled-components'

import { ReactComponent as Puntos } from '../img/puntos.svg'

const Fondo = () => {
    return (
        <>
            <PuntosArriba />
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                <path
                    fillOpacity="1"
                    d="M0,192L26.7,170.7C53.3,149,107,107,160,96C213.3,85,267,107,320,144C373.3,181,427,235,480,240C533.3,245,587,203,640,170.7C693.3,139,747,117,800,133.3C853.3,149,907,203,960,208C1013.3,213,1067,171,1120,181.3C1173.3,192,1227,256,1280,250.7C1333.3,245,1387,171,1413,133.3L1440,96L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z">
                </path>
            </Svg>
            <PuntosAbajo />
        </>
    );
}

const Svg = styled.svg`
    height: 50vh;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 0;
    path {
        fill: rgba(135,182,194, .15);
    }
`;

const PuntosArriba = styled(Puntos)`
    position: fixed;
    z-index: 1;
    top: 2.5rem; /* 40px */
    left: 2.5rem; /* 40px */
`;

const PuntosAbajo = styled(Puntos)`
    position: fixed;
    z-index: 1;
    bottom: 2.5rem; /* 40px */
    right: 2.5rem; /* 40px */
`;

export default Fondo;
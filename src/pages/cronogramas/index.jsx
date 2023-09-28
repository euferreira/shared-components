import React, { useState } from "react";

import {
    Stapper
} from '../../styles/cronograma';
import Etapa1 from "./etapa1";
import Etapa2 from "./etapa2";
import Etapa3 from "./etapa3";

export default function Cronograma({ etapa = 1, onFinish }) {

    const [etapaAtual, changeEtapaAtual] = useState(etapa)

    return (
        <>
            <div className="cronograma__header">
                <Stapper>
                    <li><button style={{backgroundColor: etapaAtual == 1 ? "blue" : "grey"}} onClick={() => changeEtapaAtual(1)}>Etapa1</button></li>
                    <li><button style={{backgroundColor: etapaAtual == 2 ? "blue" : "grey"}} onClick={() => changeEtapaAtual(2)}>Etapa2</button></li>
                    <li><button style={{backgroundColor: etapaAtual == 3 ? "blue" : "grey"}} onClick={() => changeEtapaAtual(3)}>Etapa3</button></li>
                </Stapper>
            </div>
            <div style={{ height: "500px" }} className="cronograma__body">
                {etapaAtual == 1 ? <Etapa1 /> : ''}
                {etapaAtual == 2 ? <Etapa2 /> : ''}
                {etapaAtual == 3 ? <Etapa3 onFinish={onFinish} /> : ''}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }} className="cronograma__footer">
            <button onClick={() => changeEtapaAtual(etapaAtual == 1 ? 3 : etapaAtual - 1)}>Prev</button>
                <button onClick={() => changeEtapaAtual(etapaAtual == 3 ? 1 : etapaAtual + 1)}>Next</button>
            </div>
        </>
    )
}
import React from "react";

export default function Etapa3({ onFinish = () => { alert('Não implementado') } }) {

    return (
        <>
            <h1>Etapa3</h1>
            <button onClick={() => onFinish()}>Finaliza?</button>
        </>
    )
}
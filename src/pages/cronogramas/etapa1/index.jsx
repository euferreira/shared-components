import React from "react";

export default function Etapa1() {

    return (
        <>
            <h1>Etapa1</h1>
            <form action="">
                <label htmlFor="cronograma__name">Nome do cronograma</label>
                <input type="text" id="cronograma__name" />
                <br />

                <label htmlFor="cronograma__apelido">Apelido do cronograma</label>
                <input type="text" id="cronograma__apelido" />
            </form>
        </>
    )
}
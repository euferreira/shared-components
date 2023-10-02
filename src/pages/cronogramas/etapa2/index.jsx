import React, { useEffect, useState } from "react";
import axios from "axios";



export default function Etapa2() {
    const [listaUsers, changeListaUsers] = useState([]);
    const [loading, changeLoading] = useState(true);

    useEffect(() => {
        getUsers();
    }, [])

    function getUsers() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                console.log(response);
                changeListaUsers(response.data)
                changeLoading(false)
            });
    }

    return (
        <>
            <h1>Etapa2</h1>
            <table border={1} style={{ width: "100%" }}>
                <thead>
                    <tr>
                        <th colSpan={2}>Lista de Usuários</th>
                    </tr>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? <tr><td colSpan={2}>Carregando...</td></tr> : listaUsers.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
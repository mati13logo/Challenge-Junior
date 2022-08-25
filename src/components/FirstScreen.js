import React from 'react'

import users from '../assets/datos.js'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../assets/Header.js';



const FirstScreen = () => {
    
    return (
        <div class='container h-100 bg-light'>
        <Header />
            <div class='container mt-5'>
            <Table class="table ">
                <thead class='bg-secondary'>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Edad</th>
                        <th scope="col">Carrera</th>
                        <th scope="col">Hobbie</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map(el=>{
                        return(
                            <tr>
                                <th>{el.nombre}</th>
                                <th>{el.edad}</th>
                                <th>{el.carrera}</th>
                                <th>{el.hobbie}</th>
                            </tr>
                        )
                    })
                }
                </tbody>
            </Table>
            </div>
        </div>
    )
}

export default FirstScreen
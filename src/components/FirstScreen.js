import React from 'react'

import users from '../assets/datos.js'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../assets/Header.js';



const FirstScreen = () => {
    
    return (
        <div class='container h-100 bg-light'>
        <Header/>
            <div class='container w-75 mt-5 h-75 d-flex align-items-center'>
            <Table striped bordered hover size="xl">
                <thead class='bg-secondary'>
                    <tr>
                        <th scope="col" class='text-light'>Nombre</th>
                        <th scope="col" class='text-light'>Edad</th>
                        <th scope="col" class='text-light'>Carrera</th>
                        <th scope="col" class='text-light'>Hobbie</th>
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
import React, { useState } from 'react'
import Header from '../assets/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

const SecondScreen = () => {
    const [input, setInput] = useState('')
    const [estadoFinal, setEstadoFinal] = useState()
    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }
    function handleSubmit(e){
        e.preventDefault()
        setEstadoFinal(input)
        setInput({
            name:'',
            apellido:''
        })
    }
    return (
        <div class='container h-100 bg-light '>
            <Header />
            <form class='form mt-5' onSubmit={handleSubmit} >
                <div class="d-flex justify-content-center flex-column align-items-center">
                    <div class='d-flex align-items-center w-50 mb-3 '>
                        <label class="form-label w-100">Ingrese su nombre</label>
                        <input required maxlength="12" value={input.name} onChange={handleChange} name='name' class="form-control w-100" type='text'></input>
                    </div>
                    <div class='d-flex align-items-center w-50 mb-3'>
                        <label class="form-label w-100">Ingrese su apellido</label>
                        <input required maxLength="12" value={input.apellido}  onChange={handleChange} name='apellido' class="form-control w-100" type='text'></input>
                    </div>
                    <button class="btn btn-secondary mt-5" type='submit'> Enviar</button>
                </div>
            </form>
            <div class='d-flex justify-content-center mt-5 h-25'>
                <div class='border p-3 rounded w-25 h-100 bg-secondary d-flex justify-content-center align-items-center'>
                    {
                    estadoFinal === undefined?<p class='fs-2 text-light'> Ingrese sus datos</p>:
                    <p class='text-light fs-2  aling-text-center'>{estadoFinal && estadoFinal.name} {estadoFinal && estadoFinal.apellido}</p>
                }
                </div>
            </div>
        </div>
    )
}

export default SecondScreen
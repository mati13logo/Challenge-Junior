import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Header = () => {
  let navigate = useNavigate();
  let location = useLocation();

  function changePage() {
    if (location.pathname === '/') {
      navigate('/form')
    } else {
      navigate('/')
    }
  }

  return (
    <div class='container d-flex flex-row justify-content-between  bg-secondary p-3 rounded-bottom'>
      <h3 class='text-light'>Matias Logotetti</h3>
      <button type='button' class='btn btn-secondary border border-color-light' onClick={changePage}>Cambiar de pagina</button>
    </div>
  )
}

export default Header
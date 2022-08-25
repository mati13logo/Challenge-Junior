import './App.css';
import { Route, Routes } from 'react-router-dom';
import FirstScreen from './components/FirstScreen';
import SecondScreen from './components/SecondScreen';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Routes>
      <Route path='/'  element={<FirstScreen/>}/>
      <Route path='/form'  element={<SecondScreen/>}/>
    </Routes>
  );
}

export default App;

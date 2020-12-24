import React from 'react';
import './App.css';
import Conversor from '../src/componentes/Conversor';
import { RiExchangeDollarLine } from 'react-icons/ri';

function App() {
  return (
    <div className="App">
      <h1>Conversor de Moedas <RiExchangeDollarLine className="icon"/> </h1>
      <div className="linha">
        <Conversor moedaA='USD' moedaB='BRL'/>
        <Conversor moedaA='BRL' moedaB='USD'/>
      </div>
      <div className="linha">
        <Conversor moedaA='EUR' moedaB='BRL'/>
        <Conversor moedaA='BRL' moedaB='EUR'/>
      </div>
      <div className="linha">
        <Conversor moedaA='CAD' moedaB='BRL'/>
        <Conversor moedaA='BRL' moedaB='CAD'/>
      </div>
     
    </div>
  );
}

export default App;

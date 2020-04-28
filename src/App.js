import React from 'react';
import './App.css';

import Ejemplo from './components/Ejemplo';
import CardComponent from './components/CardComponent';
import AddStyles from './components/EstilosComponent/AddStyles';
import NuevoEstado from './components/NuevoEstado';

function App() {
  return (
    <div className="App">
      <Ejemplo />  
      <CardComponent title="Papas" />
      <CardComponent title="Refrescos" />
      <AddStyles />
      <NuevoEstado titleButton="Nuevo Contador" />
      
    </div>
  );
}

export default App;

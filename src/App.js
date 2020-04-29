import React from 'react';
import './App.css';

import Ejemplo from './components/Ejemplo';
import CardComponent from './components/CardComponent';
import AddStyles from './components/EstilosComponent/AddStyles';
import NuevoEstado from './components/NuevoEstado';
import SpreadComponent from './components/SpreadComponent';
import Gato from './components/PropsSpread';
import EventosComponent from './components/EventosComponent';

function App() {

  const otrosDatos = {
    raza: "Persa",
    peleasNocturnas : 97
  }

  return (
    <div className="App">
      <Ejemplo />  
      <CardComponent title="Papas" />
      <CardComponent title="Refrescos" />
      <AddStyles />
      <NuevoEstado titleButton="Nuevo Contador" />
      <SpreadComponent />
      <Gato name="Pumba" edad="5 años" {...otrosDatos} />
      <EventosComponent />
    </div>
  );
}

export default App;

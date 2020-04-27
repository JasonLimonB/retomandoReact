import React from 'react';
import './App.css';

import Ejemplo from './components/Ejemplo';
import CardComponent from './components/CardComponent';

function App() {
  return (
    <div className="App">
      <Ejemplo />  
      <CardComponent title="Papas" />
      <CardComponent title="Refrescos" />
    </div>
  );
}

export default App;

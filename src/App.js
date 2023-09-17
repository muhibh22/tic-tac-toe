import React, {useState} from 'react';
import './App.css';

import {Board} from "./components/Board";





function App() {

  const [board, setBoard]= useState(Array(9).fill(null) );
  return (
    <div className="App">
      <Board board ={board} />
      
    </div>
  );
}

export default App;

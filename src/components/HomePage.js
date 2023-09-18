// HomePage.js
import React from 'react';
import './HomePage.css';

function HomePage({ onSelectGameMode }) {
  return (
    <div className="home-page">
      <h1>Welcome to Tic Tac Toe</h1>
      <div className="button-container">
        <button className="game-button" onClick={() => onSelectGameMode(3)}>3x3 Match</button>
        <button className="game-button" onClick={() => onSelectGameMode(6)}>6x6 Match</button>
      </div>
    </div>
  );
}

export default HomePage;

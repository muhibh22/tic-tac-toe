// HomePage.js
import React from 'react';
import './HomePage.css';
import ticTacToeImage from './3x3.png'; // Import your image

function HomePage({ onSelectGameMode }) {
  return (
    <div className="home-page">
      <h1 className="home-title">Welcome to Tic Tac Toe</h1>
      <div className="button-container">
        <button className="game-button" onClick={() => onSelectGameMode(3)}>3x3 Match</button>
        <button className="game-button" onClick={() => onSelectGameMode(6)}>6x6 Match</button>
      </div>
      <div className="image-container">
        <img src={ticTacToeImage} alt="Tic Tac Toe" className="game-image" />
        <img src={ticTacToeImage} alt="Tic Tac Toe" className="game-image" />
      </div>
    </div>
  );
}

export default HomePage;

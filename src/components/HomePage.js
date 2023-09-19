import React from 'react';
import './HomePage.css';
import ticTacToeImage from './6x6.png';

function HomePage({ onSelectGameMode }) {
  return (
    <div className="home-page">
      <h1 className="home-title">Tic Tac Toe</h1>
      <div className="button-container">
        <button className="game-button" onClick={() => onSelectGameMode(3)}>6 x 6 Match</button>
      </div>
      <div className="image-container">
        <img src={ticTacToeImage} alt="Tic Tac Toe" className="game-image" />
      </div>
    </div>
  );
}

export default HomePage;

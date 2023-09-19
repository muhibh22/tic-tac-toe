import React, { useState } from 'react';
import './App.css';

import { Board } from './components/Board';
import { ScoreBoard } from './components/ScoreBoard';
import { ResetButton } from './components/ResetButton';
import HomePage from './components/HomePage';

function App() {
  const WIN_CONDITIONS = [
    [0, 1, 2, 3],
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [6, 7, 8, 9],
    [7, 8, 9, 10],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    [13, 14, 15, 16],
    [14, 15, 16, 17],
    [18, 19, 20, 21],
    [19, 20, 21, 22],
    [20, 21, 22, 23],
    [24, 25, 26, 27],
    [25, 26, 27, 28],
    [26, 27, 28, 29],
    [30, 31, 32, 33],
    [31, 32, 33, 34],
    [32, 33, 34, 35],
    [0, 6, 12, 18],
    [1, 7, 13, 19],
    [2, 8, 14, 20],
    [3, 9, 15, 21],
    [4, 10, 16, 22],
    [5, 11, 17, 23],
    [6, 12, 18, 24],
    [7, 13, 19, 25],
    [8, 14, 20, 26],
    [9, 15, 21, 27],
    [10, 16, 22, 28],
    [11, 17, 23, 29],
    [12, 18, 24, 30],
    [13, 19, 25, 31],
    [14, 20, 26, 32],
    [15, 21, 27, 33],
    [16, 22, 28, 34],
    [17, 23, 29, 35],
    [0, 7, 14, 21],
    [1, 8, 15, 22],
    [2, 9, 16, 23],
    [3, 10, 17, 24],
    [6, 13, 20, 27],
    [7, 14, 21, 28],
    [8, 15, 22, 29],
    [9, 16, 23, 30],
    [12, 19, 26, 33],
    [13, 20, 27, 34],
    [14, 21, 28, 35],
    [0, 8, 16, 24],
    [1, 9, 17, 25],
    [2, 10, 18, 26],
    [3, 11, 19, 27],
    [6, 14, 22, 30],
    [7, 15, 23, 31],
    [8, 16, 24, 32],
    [9, 17, 25, 33],
    [12, 20, 28, 36],
    [13, 21, 29, 37],
    [14, 22, 30, 38],
    [15, 23, 31, 39],
  ];

  const [board, setBoard] = useState(Array(36).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [selectedGameMode, setSelectedGameMode] = useState(null);

  const handleBoxClick = (boxIdx) => {
    if (board[boxIdx] || gameOver) {
      return;
    }

    const updatedBoard = board.slice();
    updatedBoard[boxIdx] = xPlaying ? 'X' : 'O';

    const winner = checkWinner(updatedBoard);

    if (winner) {
      if (winner === 'O') {
        setScores({ ...scores, oScore: scores.oScore + 1 });
      } else {
        setScores({ ...scores, xScore: scores.xScore + 1 });
      }
    }

    setBoard(updatedBoard);
    setXPlaying(!xPlaying);
  };

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const condition = WIN_CONDITIONS[i];
      const [a, b, c, d] = condition;
      const squareA = board[a];
      const squareB = board[b];
      const squareC = board[c];
      const squareD = board[d];

      if (
        squareA &&
        squareA === squareB &&
        squareA === squareC &&
        squareA === squareD
      ) {
        setGameOver(true);
        return squareA; 
      }
    }

    
    return null;
  };

  const resetBoard = () => {
    setBoard(Array(36).fill(null));
    setXPlaying(true);
    setGameOver(false);
  };

  if (selectedGameMode === null) {
    return <HomePage onSelectGameMode={setSelectedGameMode} />;
  }

  return (
    <div className="App">
      <h1 className="game-title">6x6 Match</h1>
      <ScoreBoard scores={scores} xPlaying={xPlaying} />
      <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick} />
      <ResetButton resetBoard={resetBoard} />
    </div>
  );
}

export default App;

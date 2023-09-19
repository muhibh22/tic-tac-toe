import React from 'react';
import './WinningCombination.css';

const WinningCombination = ({ winningCombination }) => {
  // Calculate the rotation and position based on the winning combination
  const calculateStyles = () => {
    if (winningCombination.length === 3) {
      const [x1, x2, x3] = winningCombination;

      if (x1 === 0 && x2 === 1 && x3 === 2) {
        // Horizontal top row
        return {
          top: 'calc(33.33% - 2.5px)',
          left: '0',
          transformOrigin: 'left',
          transform: 'rotate(0deg)',
        };
      }
      // Add more conditions for other winning combinations
    }

    // Default styles if no winning combination
    return {};
  };

  return <div className="winning-line" style={calculateStyles()}></div>;
};

export default WinningCombination;

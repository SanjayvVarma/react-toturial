import React, { useState } from 'react';

const TicTacToe = () => {

  const initializeGrid = () => [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  const [grid, setGrid] = useState(initializeGrid());
  const [winner, setWinner] = useState(null);

  const checkWinner = () => {
    const lines = [
      // Rows
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      // Columns
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      // Diagonals
      [0, 4, 8], [2, 4, 6]
    ];

    for (let [a, b, c] of lines) {
      const [i, j, k] = [Math.floor(a / 3), a % 3, Math.floor(b / 3)];
      const values = [grid[i][j], grid[Math.floor(b / 3)][b % 3], grid[Math.floor(c / 3)][c % 3]];
      if (values.every(val => val && val === values[0])) return values[0];
    }

    return grid.flat().every(cell => cell) ? 'Draw' : null;
  };

  const handleClick = (row, col) => {
    if (grid[row][col] || winner) return;

    // Randomly choose between 'X' and 'O'
    const newPlayer = Math.random() < 0.5 ? 'X' : 'O';
    const newGrid = grid.map((r, i) => r.map((cell, j) => (i === row && j === col ? newPlayer : cell)));
    setGrid(newGrid);

    const result = checkWinner();
    if (result) {
      setWinner(result);
    }
  };

  const handleReset = () => {
    setGrid(initializeGrid());
    setWinner(null);
  };

  const gameStatus = winner
    ? winner === 'Draw'
      ? 'Draw!'
      : `Player ${winner} won!`
    : 'Click on a cell to play';

  return (
    <div className="flex flex-col justify-center items-center text-center p-4">
      <div className="grid grid-cols-3 gap-1 mb-4">
        {grid.flat().map((cell, index) => (
          <button
            key={index}
            className="w-16 h-16 text-3xl font-bold cursor-pointer border border-gray-600 hover:bg-slate-200"
            onClick={() => handleClick(Math.floor(index / 3), index % 3)}
          >
            {cell}
          </button>
        ))}
      </div>
      <button
        onClick={handleReset}
        className="px-4 py-2 bg-blue-500 text-white font-bold rounded"
      >
        Reset
      </button>
      <p className="mt-4 text-lg font-bold">
        {gameStatus}
      </p>
    </div>
  );
};

export default TicTacToe;
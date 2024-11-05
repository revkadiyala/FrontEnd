<<<<<<< HEAD
// src/Game.js
import React, { useState } from 'react';
import './App.css';

function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

function Board({ squares, onClick }) {
  return (
    <div className="board">
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
      ))}
=======
import React from 'react';
import Profile from './Profile'; // Ensure the path and capitalization match the file name
import './App.css';

function App() {
  return (
    <div className="App">
      <Profile />
>>>>>>> ee1e99f (Added  class-exercise folder)
    </div>
  );
}

<<<<<<< HEAD
export default function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  function handleClick(i) {
    const newSquares = squares.slice();
    if (calculateWinner(squares) || squares[i]) return;

    newSquares[i] = isXNext ? 'X' : 'O';
    setSquares(newSquares);
    setIsXNext(!isXNext);
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    return null;
  }

  const winner = calculateWinner(squares);
  const status = winner ? `Winner: ${winner}` : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <div className="game">
      <div className="status">{status}</div>
      <Board squares={squares} onClick={(i) => handleClick(i)} />
    </div>
  );
}
=======
export default App;
>>>>>>> ee1e99f (Added  class-exercise folder)

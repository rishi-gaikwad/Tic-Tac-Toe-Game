import React, { useState, useEffect } from "react";
import Square from "./Square";
import { calculateWinner } from "../helpers";

function Board({ onReset, setWinner }) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  useEffect(() => {
    const winner = calculateWinner(squares);
    if (winner) {
      setWinner(winner);
    }
  }, [squares, setWinner]);

  const handleClick = (i) => {
    const squaresCopy = squares.slice();
    if (calculateWinner(squares) || squaresCopy[i]) {
      return;
    }
    squaresCopy[i] = xIsNext ? "X" : "O";
    setSquares(squaresCopy);
    setXIsNext(!xIsNext);
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    onReset();
  };

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
      <div className="text-2xl mb-4 text-center  text-gray-700">{status}</div>
      <div className="grid grid-cols-3 gap-2">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      {winner && (
        <button
          className="mt-6 flex ml-10  px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-800 transition-colors duration-300"
          onClick={handleReset}
        >
          Reset Game
        </button>
      )}
    </div>
  );
}

export default Board;

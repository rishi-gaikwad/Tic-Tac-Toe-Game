import React, { useState } from "react";
import Board from "./Board";

function Game() {
  const [winner, setWinner] = useState(null);

  const handleReset = () => {
    setWinner(null);
  };

  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-blue-400 to-purple-600 min-h-80 p-8 rounded-lg">
      <h1 className="text-4xl font-extrabold text-white mb-4 shadow-lg p-4 rounded-lg bg-gray-900">
        Tic Tac Toe
      </h1>
      {winner && (
        <div className="text-2xl my-4 text-black font-semibold">
          {winner} is the winner!
        </div>
      )}
      <Board onReset={handleReset} setWinner={setWinner} />
    </div>

    
  );
}

export default Game;

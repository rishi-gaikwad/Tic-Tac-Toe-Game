import React from "react";

function Square({ value, onClick }) {
  return (
    <button
      className="w-16 h-16 bg-cyan-300 rounded-lg border-2 border-gray-800 text-2xl font-bold flex items-center justify-center hover:bg-blue-200 transition-colors duration-300"
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default Square;

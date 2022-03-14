import React from "react";
import "./styles/board.css";

const Board = () => {
  return (
    <div id="sketch">
      <canvas id="board" className="canvas"></canvas>
    </div>
  );
};

export default Board;
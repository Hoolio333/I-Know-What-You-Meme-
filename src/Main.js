import boxes from "./boxes";
import Box from "./Box";
import { useState } from "react";
import "./box.css";
import React from "react";
import Meme from "./Meme";

export default function Main() {
  const [squares, setSquares] = useState(boxes);

  const squareElements = squares.map((square) => (
    <Box key={square.id} on={square.on} />
  ));

  return (
    <main className="box--grid">
      <div>{squareElements}</div>
      <div>{squareElements}</div>
      <Meme />
      <div>{squareElements}</div>
      <div>{squareElements}</div>
    </main>
  );
}

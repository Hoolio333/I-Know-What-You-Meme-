import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Meme from "./Meme";
import boxes from "./boxes";
import Box from "./Box";
import { useState } from "react";
import "./box.css";

function App() {
  const [squares, setSquares] = useState(boxes);

  const squareElements = squares.map((square) => (
    <Box key={square.id} on={square.on} />
  ));

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;

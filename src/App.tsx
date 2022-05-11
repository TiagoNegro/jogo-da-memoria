import { useEffect, useState } from "react";
import Board from "./components/Board";
import { HistoryProps } from "./types/HistoryProps";
import { SquareProps } from "./types/SquareProps";

export default function App(){
  const [history, setHistory] = useState<HistoryProps[]>([]);

  useEffect(() => {
    let tmpSquare: SquareProps[] = [];
    for(let i = 0; i < 9; i++) {
      tmpSquare.push({
        value: null,
        onClick: () => {}
      });
    }
    setHistory(history);
  }, []);


  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}
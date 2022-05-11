import { useEffect, useState } from 'react';
import { Square } from '../components/Square';
import { SquareProps } from '../types/SquareProps';
import '../index.css';

export default function Board() {
  const [square, setSquare] = useState<SquareProps[]>([]);
  const [xIsNext, setXIsNext] = useState<Boolean>(true);

  useEffect(() => {
    let tmpSquare: SquareProps[] = [];
    for(let i = 0; i < 9; i++) {
      tmpSquare.push({
        value: null,
        onClick: () => handleClick
      });
    }
    setSquare(tmpSquare);
  }, []);

  function handleClick (index: number) {
    let tmpSquares =  [...square];
    
    tmpSquares[index].value = xIsNext ? 'X' : 'O';
    setXIsNext(!xIsNext);
    setSquare(tmpSquares);
  }

  const winner = calculateWinner(square);
  let status;
  if(winner) {
    status = 'Ganhador: ' + winner;
  } else {
    status = 'Próximo jogador: ' + (xIsNext ? 'X' : 'O')
  }

  function calculateWinner(squares: Array<SquareProps>) {
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
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a].value === squares[b].value && squares[a].value === squares[c].value) {
        return squares[a].value;
      }
    }
    return null;
  }
  return (
    <>
      <div>
        <div className="status">Jogo da velha</div>
        <div className="status">{status}</div>
        <div className='border'>
        {square.
          map((item, index) => (            
            <Square 
              key={index} 
              value={item.value} 
              onClick={() => handleClick(index)} 
            />
          ))
        }
        </div>
      </div>
    </>
  )
}
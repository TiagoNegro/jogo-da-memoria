import { SquareProps } from '../types/SquareProps';
import '../index.css';

export function Square(props: SquareProps) {
  return (
    <button 
      className="square"
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}
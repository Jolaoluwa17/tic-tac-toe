import Box from "../Box/Box";
import "./board.css";

const Board = ({ board, onClick }) => {
  return (
    <div className="board">
      {board.map((value, idx) => {
        return (
          <Box
            value={value}
            key={idx}
            onClick={() => value === null && onClick(idx)}
          />
        );
      })}
    </div>
  );
};

export default Board;

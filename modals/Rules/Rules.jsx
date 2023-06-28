import "./rules.css";
import { MdCancel } from "react-icons/md";
export function Rules(props) {
  return props.trigger ? (
    <div className="rules-modal">
      <div className="rules-modal-inner">
        <button
          className="close-btn"
          onClick={() => {
            props.setTrigger(false);
          }}
        >
          <div className="cancel-icon">
            <MdCancel />
          </div>
        </button>
        <div className="content">
          <div className="header">
            <h1>Tic-Tac-Toe Rules</h1>
          </div>
          <div className="main-content">
            1. The game is played on a 3x3 grid.
            <br /> 2. There are two players: Player X and Player O.
            <br /> 3. Player X always goes first, followed by Player O.
            <br /> 4. Players take turns placing their symbol (X or O) on an
            empty cell of the grid. <br /> 5. The objective is to get three of
            your own symbols in a row, either horizontally, vertically, or
            diagonally. <br /> 6. The game ends when one player achieves a
            winning combination or when all cells are filled without a winner
            (resulting in a draw). <br /> 7. If a player successfully gets three
            of their symbols in a row, they win the game. <br /> 8. If all cells
            are filled and no player has achieved a winning combination, the
            game is a draw. <br /> 9. After each game, the scoreboard is updated
            to reflect the number of wins for each player and draws.
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

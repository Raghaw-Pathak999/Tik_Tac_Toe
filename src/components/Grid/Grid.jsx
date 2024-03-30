import { useState } from "react";
import { Card } from "../Card/Card";
import "./Grid.css";
import { isWinner } from "../../hellpers/CheckWinner";

export function Grid({ nunbersOfCards }) {
    const [board, setBoards] = useState(Array(nunbersOfCards).fill(""));
    const [turn, setTurn] = useState(true);
    const [winner, setWinner] = useState(null);

    function play(index) {
        if (turn == true) {
            board[index] = "O";
        } else {
            board[index] = "X";
        }

        const Win = isWinner(board, turn ? "O" : "X");

        if (Win) {
            setWinner(Win);
        }

        setBoards([...board]);
        setTurn(!turn);
    }

    function reset() {
        setTurn(true);
        setWinner(null);
        setBoards(Array(nunbersOfCards).fill(""));
    }

    return (
        <div className="grid-wapper">
            {winner && (
                <>
                    <h1 className="turn-Winner">Winner is: {winner} </h1>
                    <button className="reset" onClick={reset}>
                        Restart Game
                    </button>
                </>
            )}
            {!winner && (
                <h1 className="turn">
                    Current Turn: {turn ? "O" : "X"}
                </h1>
            )}
            <div className="grid">
                {board.map((elements, idx) => (
                    <Card gameEnd={winner? true : false} key={idx} onPlay={play} player={elements} index={idx} />
                ))}
            </div>
        </div>
    );
}

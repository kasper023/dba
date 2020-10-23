import React, {useContext, useEffect, useState} from "react"

import "./Game.css"
import Board from "./game-board";
import {ThemeContext} from "./ThemeProvider";

export type SquareValue = 'X' | 'O' | null;

const calculateWinner = (squares: SquareValue[]): SquareValue => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
};

const Game: React.FC = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [xIsNext, setXIsNext] = useState<boolean>(true);
    const [stepNumber, setStepNumber] = useState<number>(0);
    const [history, setHistory] = useState<{squares: SquareValue[]}[]>([
        {
            squares: Array(9).fill(null)
        }
    ]);

    const handleClick = (i: number): void => {
        const newHistory = history.slice(0, stepNumber + 1);
        const current = newHistory[newHistory.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = xIsNext ? "X" : "O";
        setHistory(newHistory.concat([
            {
                squares: squares
            }
        ]));
        setStepNumber(newHistory.length);
        setXIsNext(!xIsNext);
    };

    const jumpTo = (step: number): void => {
        setStepNumber(step);
        setXIsNext((step % 2) === 0)
    };

    // useEffect(() =>{
    //     document.title = `Game-set number ${game}`;
    // })
    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
        const desc = move ?
            'Go to move #' + move :
            'Go to game start';
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{desc}</button>
            </li>
        );
    });

    let status;
    let winners = [];
    if (winner) {
        status = "Winner: " + winner;
        winners.push(winner);
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board
                    squares={current.squares}
                    onClick={i => handleClick(i)}
                />
            </div>
            <div className="game-info">
                <b>Game INFO:</b>

                <div>{status}</div>
                <ol>{moves}</ol>
            </div>
            <div className="winners">
                <p>Winners</p>
                {winners.map((winner, index) =>(
                    <li key={index}>
                        <div>{winner}</div>
                    </li>
                ))}
            </div>
            <div onClick={toggleTheme} className="cart-info__icon mr-lg-3" style={{
                border: "0",
                backgroundColor: "white",
                color: "green",
                padding: "14px 28px",
                fontSize: "16px",
                width: "10%",
                textAlign: "center",
                margin: "5px",
                cursor: "pointer"}}>
                {theme === 'light' ? 'dark' : 'light'}
            </div>
        </div>
    );
};

export default Game

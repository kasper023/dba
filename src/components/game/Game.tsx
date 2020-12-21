import React, {useCallback, useContext, useEffect, useState} from "react"

import s from "./Game.module.css"
import Board from "./game-board";
import {ThemeContext} from "../theme/ThemeProvider";
import {useMemo} from "react";

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
    const {theme, toggleTheme} = useContext(ThemeContext);
    const [xIsNext, setXIsNext] = useState<boolean>(true);
    const [stepNumber, setStepNumber] = useState<number>(0);
    let [gameCount, setGameCount] = useState(0);

    const [history, setHistory] = useState<{ squares: SquareValue[] }[]>([
        {
            squares: Array(9).fill(null)
        }
    ]);

    const handleClick = useCallback((i: number): void => {
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
    },[stepNumber]);

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
                <button onClick={() => {
                    jumpTo(move);
                    setGameCount(gameCount + 1);
                }}>{desc}</button>
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
    useEffect(() => {
        document.title = `Game count: ${gameCount}`;
    }, [gameCount]);
    const memoizedValue =  useMemo( () => {
        if(stepNumber % 2 == 0) return localStorage['nickname1'];
        else return localStorage['nickname2'];
    },[stepNumber])
    return (
        <div className={s.game}>
            <div className={s.game_board}>
                Your turn: {memoizedValue}
                <h2 className={s.gameCount}>
                    <p>Game count: {gameCount}</p>
                </h2>
                <Board
                    squares={current.squares}
                    onClick={i => handleClick(i)}
                />
                <h1></h1>
                <b>Game INFO:</b>

                <div>{status}</div>
                <ol>{moves}</ol>
                <div onClick={toggleTheme} className={s.darkLight}>
                    <p>Switch to {theme === 'light' ? 'dark' : 'light'}</p>
                </div>
            </div>

        </div>
    );
};

export default Game

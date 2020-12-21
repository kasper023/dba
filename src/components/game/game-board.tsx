import * as React from 'react'

import s from "./Game.module.css"
import {ReactNode} from "react";
import {SquareValue} from "./Game";
import Square from "./Square";

interface BoardProps {
    onClick(i: number): void;
    squares: SquareValue[];
}

const Board: React.FC<BoardProps> = props => {
    const renderSquare = (i: number): ReactNode => {
        return (
            <Square
                value={props.squares[i]}
                onClick={() => props.onClick(i)}
            />
        );
    };

    return (
        <div>
            <div className={s.board_row}>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className={s.board_row}>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className={s.board_row}>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
};

export default Board;

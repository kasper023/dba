import * as React from "react";
import {SquareValue} from "./Game";
import s from "./Game.module.css";


interface Props {
    onClick(): void;
    value: SquareValue;
}

const Square: React.FC<Props> = props => {
    return (
        <button className={s.square} onClick={props.onClick}>
            {props.value}
        </button>
    );
};

export default Square;

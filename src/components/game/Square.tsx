import * as React from "react";
import {SquareValue} from "./Game";


interface Props {
    onClick(): void;
    value: SquareValue;
}

const Square: React.FC<Props> = props => {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
};

export default Square;

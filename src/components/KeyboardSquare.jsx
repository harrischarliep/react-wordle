import React from 'react';
import './WordBox.css';

const KeyboardSquare = (props) => {
    const colorClass = props.letter.color ? `text-${props.letter.color}` : null;
    return (
        <div className={`letter-box ${colorClass}`} onClick={() => props.onClick(props.letter.value)}>{props.letter.value}</div>
    );
}

export default KeyboardSquare;

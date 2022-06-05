import React from 'react';
import './WordBox.css';

const WordBoxSquare = (props) => {
    const {value, color} = props.letter;
    const colorClass = color ? `text-${color} filled-box` : null;
    return (
        <div className={`letter-box ${colorClass}`}>{value}</div>
    );
}

export default WordBoxSquare;

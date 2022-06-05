import React from 'react';
import KeyboardSquare from './KeyboardSquare.jsx';
import { getIdGenerator } from './utils.js';
import './WordBox.css'


const KeyboardRow = (props) => {
    const getNextId = getIdGenerator();

    const renderSquare = (letter) => {
        return <KeyboardSquare key={getNextId()} letter={letter} onClick={props.onClick}/>;
    }

    const squares = props.letters.map(e => renderSquare(e));
    return (
        <div className='letter-row'>
            {squares}
        </div>
    );
}

export default KeyboardRow;

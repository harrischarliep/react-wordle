import React from 'react';
import WordBoxSquare from './WordBoxSquare';
import './WordBox.css'
import {getIdGenerator} from './utils';

const WordBoxRow = (props) => {
    const getNextId = getIdGenerator();

    const renderSquare = (letter) => {
        return <WordBoxSquare key={getNextId()} letter={letter}/>
    }

    const squares = props.letters.map(e => renderSquare(e));
    return (
        <div className='letter-row'>
            {squares}
        </div>
    );
}

export default WordBoxRow;

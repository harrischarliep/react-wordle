import React from 'react';
import KeyboardRow from './KeyboardRow';

const createLetter = (letter) => {
    return {
        value: letter,
        color: null,
    }
}
const firstRowString = "QWERTYUIOP";
const secondRowString = "ASDFGHJKL";
const thirdRowString = "ZXCVBNM";
const firstRow = [...firstRowString].map(e => createLetter(e));
const secondRow = [...secondRowString].map(e => createLetter(e));
const thirdRow = [...thirdRowString].map(e => createLetter(e));

const Keyboard = (props) => {
    const newFirstRow = [...firstRow];
    const newSecondRow = [...secondRow];
    const newThirdRow = [...thirdRow];
    props.guessedLetters.forEach(e => {
        const index1 = firstRowString.indexOf(e.value);
        if (index1 !== -1) {
            newFirstRow[index1] = {value: e.value, color: e.color};
        }

        const index2 = secondRowString.indexOf(e.value);
        if (index2 !== -1) {
            newSecondRow[index2] = {value: e.value, color: e.color};
        }

        const index3 = thirdRowString.indexOf(e.value);
        if (index3 !== -1) {
            newThirdRow[index3] = {value: e.value, color: e.color};
        }
    });

    return (
        <div>
            <KeyboardRow letters={newFirstRow} onClick={props.onClick}/>
            <KeyboardRow letters={newSecondRow} onClick={props.onClick}/>
            <KeyboardRow letters={newThirdRow} onClick={props.onClick}/>
        </div>
    );
}

export default Keyboard;

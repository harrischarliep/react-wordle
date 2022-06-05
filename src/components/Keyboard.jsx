import React from 'react';
import KeyboardRow from './KeyboardRow';

const createLetter = (letter) => {
    return {
        value: letter,
        color: null,
    }
}
const firstRowString = "qwertyuip";
const secondRowString = "asdfghjkl";
const thirdRowString = "zxcvbnm";
const firstRow = [...firstRowString].map(e => createLetter(e));
const secondRow = [...secondRowString].map(e => createLetter(e));
const thirdRow = [...thirdRowString].map(e => createLetter(e));

const Keyboard = (props) => {
    const newFirstRow = [...firstRow];
    const newSecondRow = [...secondRow];
    const newThirdRow = [...thirdRow];
    console.log(props.guessedLetters);
    props.guessedLetters.forEach(e => {
        const index1 = firstRowString.indexOf(e.value);
        if (index1 != -1) {
            newFirstRow[index1] = {value: e.value, color: e.color};
        }

        const index2 = secondRowString.indexOf(e.value);
        console.log(`second row index: ${index2}`);
        if (index2 != -1) {
            newSecondRow[index1] = {value: e.value, color: e.color};
        }

        const index3 = thirdRowString.indexOf(e.value);
        if (index3 != -1) {
            newThirdRow[index1] = {value: e.value, color: e.color};
        }
    });
    console.log(newFirstRow);

    return (
        <div>
            <KeyboardRow letters={newFirstRow} onClick={props.onClick}/>
            <KeyboardRow letters={newSecondRow} onClick={props.onClick}/>
            <KeyboardRow letters={newThirdRow} onClick={props.onClick}/>
        </div>
    );
}

export default Keyboard;

import React, {useState} from 'react';
import WordBoxRow from './WordBoxRow.jsx';
import Keyboard from './Keyboard.jsx';
import {getIdGenerator, getWord} from './utils.js';

const wordLength = 5;
const numGuesses = 6;
const initWord = getWord(wordLength);

const Game = () => { 
    const [rows, setRows] = useState(Array(numGuesses).fill(Array(wordLength).fill({value: null, color: 'null'})));
    const [currGuess, setCurrGuess] = useState(0);
    const [currGuessWord, setCurrGuessWord] = useState(null);
    const [word, setWord] = useState(initWord);
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [gameOver, setGameOver] = useState(false);

    const confirmGuess = () => {
        if (currGuessWord.length !== wordLength) {
            console.log('TODO: add warning message if too few characters (or make button greyed out');
            return;
        }

        const newRows = [...rows];
        const newRow = [...newRows[currGuess]];
        const newGuessedLetters = [...guessedLetters];
        for (let i = 0; i < wordLength; i++) {
            let color = null;
            console.log(newRow[i]);
            if (newRow[i].value === word.charAt(i)) {
                color = 'green';
            } else if (word.includes(newRow[i].value)) {
                color = 'yellow';
            } else {
                color = 'red';
            }
            newRow[i] = {
                ...newRow[i],
                color: color,
            }
            newGuessedLetters.push(newRow[i]);
        }
        newRows[currGuess] = newRow;
        setRows(newRows);
        setGuessedLetters(newGuessedLetters);

        if (currGuessWord.toUpperCase() === word || currGuess === numGuesses - 1) {
            setGameOver(true);
            return;
        }

        setCurrGuess(currGuess + 1);
        setCurrGuessWord(null);
    }

    const onKeyboardClick = (letter) => {
        if (currGuessWord && currGuessWord.length >= wordLength) {
            return; 
        }

        const newGuessWord = currGuessWord ? currGuessWord + letter : letter;
        setCurrGuessWord(newGuessWord);

        updateRows(newGuessWord);
    }

    const onDelete = () => {
        const newGuessWord = currGuessWord ? currGuessWord.slice(0, -1) : null;
        setCurrGuessWord(newGuessWord);
        updateRows(newGuessWord);
    }

    const updateRows = (guessWord) => {
        const newRows = [...rows];
        const newRow = [...rows[currGuess]]
        for (let i = 0; i < wordLength; i++) {
            newRow[i] = {
                value: guessWord.charAt(i).toUpperCase(),
            };
        }
        newRows[currGuess] = newRow;
        setRows(newRows);
    }

    const resetState = () => {
        setRows(Array(numGuesses).fill(Array(wordLength).fill({value: null, color: 'null'})));
        setCurrGuess(0);
        setCurrGuessWord(null);
        setWord(getWord(wordLength));
        setGameOver(false);
        setGuessedLetters([]);
    }

    const getNextId = getIdGenerator();
    const wordBoxes = [...rows].map(e => <WordBoxRow key={getNextId()} letters={e}/>);

    if (gameOver) {
        const message = currGuessWord.toUpperCase() === word ? 'Correct!' : 'Game over.';
        return (
            <div>
                <h1>{message} The word was {word.toUpperCase()}</h1>
                <button onClick={resetState}>Play Again</button>
            </div>
        );
    }

    return (
        <div>
            <h1>Wordle!</h1>
            {wordBoxes}
            <Keyboard onClick={onKeyboardClick} guessedLetters={guessedLetters}/>
            <button onClick={confirmGuess}>Guess</button>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
}

export default Game;
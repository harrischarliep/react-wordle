const fileName = '../../words5.txt';
const wordList = [];
const usedWords = [];

// TODO: is this really the easiest way to read a file in js?
function fetchWords() {
    let rawFile = new XMLHttpRequest();
    rawFile.open("GET", fileName, false);
    rawFile.onreadystatechange = function () {
        if(rawFile.readyState === 4) {
            if(rawFile.status === 200 || rawFile.status === 0) {
                const allText = rawFile.responseText;
                allText.trim().split("\n").forEach(e => wordList.push(e.toUpperCase()));
            }
        }
    }
    rawFile.send(null);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

export function getIdGenerator() {
    let id = 0
    const nextId = () => {
        return id++;
    }
    return nextId;
}

export function getWord(wordLength) {
    if (!wordList || wordList.length === 0) {
        if (usedWords && usedWords.length !== 0) {
            while(usedWords.length > 0) {
                const word = usedWords.pop();
                wordList.push(word);
            }
        } else {
            fetchWords();
            shuffleArray(wordList);
        }
    }

    const word = wordList.pop();
    console.log("new word is: " + word);
    usedWords.push(word);
    console.log(`word list: length=${wordList.length}, words=${wordList}`);
    console.log("used word list: " + usedWords);
    return word;
}

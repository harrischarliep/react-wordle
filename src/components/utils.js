export function getIdGenerator() {
    let id = 0
    const nextId = () => {
        return id++;
    }
    return nextId;
}

export function getWord(wordLength) {
    // TODO
    // return "a".repeat(wordLength);
    return "hello".toUpperCase();
}

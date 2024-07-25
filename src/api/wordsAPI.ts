import { AlphabetType, WordType } from "../types/Types";

export const wordsAPI = {
    getDictionary(): Promise<Array<WordType>> {
        return fetch('http://localhost:3001/solutions')
            .then(res => res.json())
            .catch(e => {
                console.warn(e.message);
            })
    },
    getLetters(): Promise<Array<AlphabetType>> {
        return fetch('http://localhost:3001/letters')
            .then(res => res.json())
            .catch(e => {
                console.warn(e.message);
            })
    }
};
import { AlphabetType, WordType } from "../types/Types";

// export async function getWord(): Promise<WordType> {
//     try {
//         const response = await fetch('http://localhost:3001/solutions');
//         const json: WordType[] = await response.json();
//         const randomIndex = getRandom(0, json.length - 1);
//         return json[randomIndex] as WordType;
//     } catch (e) {
//         console.warn((e as Error).message);
//         throw e;
//     }
// }

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
import { DictionaryType } from "../../types/Types";

export const setDictionaryStructure = (arr: Array<{ word: string }>): DictionaryType => {
    let wordsMap: DictionaryType = {};
    arr.forEach(word => {
        let key: string = word.word[0];
        if (wordsMap[key]) {
            wordsMap = {...wordsMap, [key]: [...wordsMap[key], word.word]};
        } else {
            wordsMap = {...wordsMap, [key]: [word.word]};
        }
    })
    return wordsMap;
}
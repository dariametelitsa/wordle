import { DictionaryType } from "../types/Types";

export const checkIsWordInDictionary = (word: string, dictionary: DictionaryType): boolean => {
    const firstLetter = word[0];
    return dictionary[firstLetter].includes(word)
}
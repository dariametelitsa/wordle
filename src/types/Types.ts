export type LetterStatus = 'rightPosition' | 'wrongLetter' | 'wrongPosition' | 'idle'

export interface WordsAPI {
    getWord(): Promise<WordType>;
}

export type WordType = {
    id: null,
    word: string
}

export type DictionaryType = {
    [key: string]: Array<string>
}

export type LetterType = {
    letter: string
    status: LetterStatus
}
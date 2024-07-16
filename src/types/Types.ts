export type LetterStatus = 'rightPosition' | 'wrongLetter' | 'wrongPosition' | 'idle' | 'active'

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

export type messageType = 'error' | 'info' | 'congratulation'

export type AlphabetType = {
    key: string
}
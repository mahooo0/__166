import { atom } from 'recoil';

export const languageState = atom<string>({
    key: 'languageState', // unique ID
    default: 'en', // default value
});

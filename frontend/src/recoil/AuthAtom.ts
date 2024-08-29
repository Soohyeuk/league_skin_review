import {atom, selector} from "recoil";


export const AuthAtom = atom({
  key: 'Token',
  default: (() => {
    const tokens = localStorage.getItem('tokens');
    return tokens ? JSON.parse(tokens) : undefined;
  })(),
});

export const isLoginSelector = selector({
  key: 'isLoginSelector',
  get: ({get}) => !!get(AuthAtom)
}) 
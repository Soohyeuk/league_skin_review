import {atom, selector} from "recoil";


export const AuthAtom = atom({
  key: 'Token',
  default: undefined,
});

export const isLoginSelector = selector({
  key: 'isLoginSelector',
  get: ({get}) => !!get(AuthAtom)
})
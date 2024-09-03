import { jwtDecode, JwtPayload } from "jwt-decode";
import {atom, selector} from "recoil";

interface CustomJwtPayload extends JwtPayload {
  user_id: number,
  username: string, 
}

export const AuthUser = atom<CustomJwtPayload | undefined>({
  key: 'user_data',
  default: (() => {
    const tokens = localStorage.getItem('tokens');
    return tokens ? jwtDecode<CustomJwtPayload>(JSON.parse(tokens).access) : undefined;
  })(),
})

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

export const user_id = selector({
  key: 'user_id',
  get: ({get}) => {
    const authUser = get(AuthUser);
    return authUser ? authUser.user_id : undefined;
  }
})

export const username = selector({
  key: 'username',
  get: ({get}) => {
    const authUser = get(AuthUser);
    return authUser ? authUser.username : undefined;
  }
})
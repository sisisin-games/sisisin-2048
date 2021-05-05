import { v4 as uuid } from 'uuid';

const userKey = 'user';
type User = {
  id: string;
  name: string;
};
export const getMe = (): User | undefined => {
  const item = localStorage.getItem(userKey);

  if (item) {
    return JSON.parse(item);
  } else {
    return undefined;
  }
};
export const getOrCreateMe = (): User => {
  const me = getMe();
  if (me === undefined) {
    return setMe({ id: uuid(), name: '' });
  } else {
    return me;
  }
};
export const setMe = (user: Partial<User>): User => {
  let { id, name } = user;
  if (id === undefined) {
    throw new TypeError(`id must be exist`);
  }
  if (name === undefined) {
    name = '';
  }
  const newUser: User = { id, name };
  localStorage.setItem(userKey, JSON.stringify(newUser));
  return newUser;
};

const resultKey = 'result';
export type AllResult = {
  me: GameResult[];
};
export type GameResult = {
  gameStatus: 'cleared' | 'died';
  moveCount: number;
  time: number;
  max: number;
  formatted: string;
};
const initialAllResult: AllResult = {
  me: [],
};
export const getAllResult = (): AllResult => {
  const item = localStorage.getItem(resultKey);
  return item === null ? initialAllResult : JSON.parse(item);
};
export const setAllResult = (result: AllResult) => {
  localStorage.setItem(resultKey, JSON.stringify(result));
};

const result = {
  mine: [
    { gameStatus: 'cleared', moveCount: 100, time: 1234, max: 2048 },
    { gameStatus: 'cleared', moveCount: 101, time: 1234, max: 2048 },
  ],
};

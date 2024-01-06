import { atom } from "recoil";

export interface ITodo {
  id: number;
  text: string;
  isComplete: boolean;
}

export const todoListState = atom<ITodo[]>({
  key: "todoListState",
  default: [],
});

import { atom } from "recoil";

export interface ITodo {
  id: number;
  text: string;
}

interface IToDoState {
  [key: string]: ITodo[];
}

export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: {
    "😀할 일 목록😀": [],
    "😅진행 중😅": [],
    "👊해결 완👊": [],
  },
});

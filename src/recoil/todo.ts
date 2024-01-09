import { atom, selector } from "recoil";

export interface ITodo {
  id: number;
  text: string;
  isComplete: boolean;
}

export const todoListState = atom<ITodo[]>({
  key: "todoListState",
  default: [],
});

export const todoListFilterState = atom({
  key: "TodoListFilter",
  default: "Show All",
});

export const filteredTodoListState = selector<ITodo[]>({
  key: "FilteredTodoList",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case "Show Completed":
        return list.filter((item: ITodo) => item.isComplete);
      case "Show Uncompleted":
        return list.filter((item: ITodo) => !item.isComplete);
      default:
        return list;
    }
  },
});

export const todoListStatsState = selector({
  key: "TodoListStats",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter(
      (item: ITodo) => item.isComplete,
    ).length;
    const totalUncompletedNum = todoList.filter(
      (item: ITodo) => !item.isComplete,
    ).length;
    const percentCompleted =
      totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});

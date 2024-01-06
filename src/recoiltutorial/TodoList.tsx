import { useRecoilValue } from "recoil";
import { todoListState } from "../atoms/todo";
import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todoList = useRecoilValue(todoListState);
  return (
    <>
      <TodoItemCreator />
      {todoList.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </>
  );
}

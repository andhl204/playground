import { useRecoilState, useRecoilValue } from "recoil";
import {
  filteredTodoListState,
  todoListFilterState,
  todoListStatsState,
} from "../atoms/todo";
import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);
  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </>
  );
}

function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter: React.ChangeEventHandler<HTMLSelectElement> = (event) =>
    setFilter(event.target.value);

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value={"Show All"}>All</option>
        <option value={"Show Completed"}>Completed</option>
        <option value={"Show Uncompleted"}>Uncompleted</option>
      </select>
    </>
  );
}

function TodoListStats() {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
    useRecoilValue(todoListStatsState);
  const formattedPercentCompleted = Math.round(percentCompleted);

  return (
    <ul>
      <li>Total items: {totalNum}</li>
      <li>Items completed: {totalCompletedNum}</li>
      <li>Items not completed: {totalUncompletedNum}</li>
      <li>Percent completed: {formattedPercentCompleted}</li>
    </ul>
  );
}

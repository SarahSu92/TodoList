import { useState } from "react"
import { Todo } from "../models/Todos"
import { AddTodo } from "./AddTodo"
import { Todos } from "./Todos";


export const TodosApp = () => {
const [todos, setTodos] = useState<Todo[]>(() => {
  const stored = localStorage.getItem('todos');
  return stored ? JSON.parse(stored) : [];
});

const addTodo = (newTodo: Todo) => {
  setTodos((prev) => [...prev, newTodo]);
};

    return<>
    <Todos todos={todos} />
    <AddTodo addTodo={addTodo} />
    </>
}
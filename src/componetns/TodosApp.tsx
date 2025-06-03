import { useState } from "react"
import { Todo } from "../models/Todos"
import { AddTodo } from "./AddTodo"
import { Todos } from "./Todos";


export const TodosApp = () => {
const [todos, setTodos] = useState<Todo[]>(() => {
  const stored = localStorage.getItem('todos');
  return stored ? JSON.parse(stored) : [];
});

const removeTodo = (id: number) => {
  const updated = todos.filter(t => t.id !== id);
  setTodos(updated);
  localStorage.setItem("todos", JSON.stringify(updated));
};

const [sortBy, setSortBy] = useState<'date' | 'name'>('date');

  const sortedTodos = [...todos].sort((a, b) => {
  switch (sortBy) {
    case "name":
      return a.name.localeCompare(b.name); //Sort by name
    case "date":
    default:
      return b.created_at - a.created_at; // New todo first
  }
});

const toggleTodo = (id: number) => {
  const updated = todos.map(todo =>
    todo.id === id ? { ...todo, done: !todo.done } : todo
  );
  setTodos(updated);
  localStorage.setItem("todos", JSON.stringify(updated));
};

const addTodo = (newTodo: Todo) => {
  setTodos((prev) => [...prev, newTodo]);
};


    return<>
    <Todos todos={sortedTodos} sortBy={sortBy} setSortBy={setSortBy} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    <AddTodo addTodo={addTodo} />
    </>
}
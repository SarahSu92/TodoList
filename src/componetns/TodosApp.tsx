import { useState } from "react"
import { Todo } from "../models/Todos"
import { AddTodo } from "./AddTodo"
import { Todos } from "./Todos";


export const TodosApp = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

const addTodo = (t: Todo) => {
    setTodos([...todos, t]);
}

    return<>
    <Todos todos={todos} />
    <AddTodo addTodo={addTodo} />
    </>
}
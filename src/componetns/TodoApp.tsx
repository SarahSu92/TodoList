import { useState } from "react"
import { Todo } from "../models/Todos"
import { AddTodo } from "./AddTodo"
import { Todos } from "./Todos"

export const TodoApp = () => {

const [todo, setTodo] = useState<Todo[]>([])

const addTodo = (t: Todo) => {
    setTodo([...todo, t]);
}

    return<>
    <h1>Todos</h1>
    <Todos   />
    <AddTodo addTodo={addTodo} />
    </>
}
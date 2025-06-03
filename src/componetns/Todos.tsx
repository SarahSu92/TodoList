import type { Todo } from "../models/Todos";
import { TodoPresentation } from "./TodoPresentation";


type TodosProps = {
  todos: Todo[];
  removeTodo: (id: number) => void;
}


export const Todos = ({ todos, removeTodo }: TodosProps) => {
 
  return (
    <div>
      {todos.map((t) => (
        <TodoPresentation key={t.id} todo={t} removeTodo={removeTodo} />
      ))}
    </div>
  );
};


//In this component it is suitble to adapt search filter osv.
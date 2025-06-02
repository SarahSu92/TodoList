import type { Todo } from "../models/Todos";
import { TodoPresentation } from "./TodoPresentation";


type TodosProps = {
  todos: Todo[];
}

export const Todos = ({ todos }: TodosProps) => {
  return (
    <div>
      {todos.map((t) => (
        <TodoPresentation key={t.id} todo={t} />
      ))}
    </div>
  );
};


//In this component it is suitble to adapt search filter osv.
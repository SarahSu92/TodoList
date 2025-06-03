import type { Todo } from '../models/Todos';
import { TodoPresentation } from './TodoPresentation';

type TodosProps = {
  todos: Todo[];
  removeTodo: (id: number) => void;
  sortBy: 'date' | 'name';
  setSortBy: (value: 'date' | 'name') => void;
};

export const Todos = ({ todos, removeTodo, sortBy, setSortBy }: TodosProps) => {
  return (
    <div>
      <select
        onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
        value={sortBy}
      >
        <option value="date">Sort by Date</option>
        <option value="name">Sort by Name</option>
      </select>
      {todos.map((t) => (
        <TodoPresentation key={t.id} todo={t} removeTodo={removeTodo} />
      ))}
    </div>
  );
};

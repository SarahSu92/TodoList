import type { Todo } from '../models/Todos';
import { TodoPresentation } from './TodoPresentation';

type TodosProps = {
  todos: Todo[];
  sortBy: 'date' | 'name';
  setSortBy: (value: 'date' | 'name') => void;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
};

export const Todos = ({ todos, toggleTodo, removeTodo, sortBy, setSortBy }: TodosProps) => {
 
  return (
    <div className='root'>
      <h1>Todos<span className="sun">☀️</span></h1>
      <select
      className='sort-select'
        onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
        value={sortBy}
      >
        <option value="date">Sort by Date</option>
        <option value="name">Sort by Name</option>
      </select>

      {todos.length === 0 ? (
        <h2>🎉 Congratulations, your todo list is empty!</h2>
      ) : (todos.map((t) => (
      <TodoPresentation 
      key={t.id} todo={t} 
      toggleTodo={toggleTodo} 
      removeTodo={removeTodo} />
    ))
  )}
    </div>
  );
};

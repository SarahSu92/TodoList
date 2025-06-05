import type { FormEvent } from 'react';
import type { Todo } from '../models/Todos';

type TodoPresentationProps = {
  todo: Todo;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
};

export const TodoPresentation = ({
  todo,
  toggleTodo,
  removeTodo,
}: TodoPresentationProps) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="todo-container">
      <ul className="todo-card">
        <li
          className="todo-name"
          style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
        >
          {todo.name}
        </li>
        <li className="todo-info">ID: {todo.id}</li>
        <li className="todo-info">
          Created at: {new Date(todo.created_at).toLocaleString()}
        </li>
        <li>
          <label className="todo-actions">
            ✅ Check as done:{''}
            <input
              type="checkbox"
              defaultChecked={false}
              onChange={() => toggleTodo(todo.id)}
            />
          </label>
          <button type="button" onClick={() => removeTodo(todo.id)}>
            ❌ Remove todo
          </button>
        </li>
      </ul>
    </form>
  );
};

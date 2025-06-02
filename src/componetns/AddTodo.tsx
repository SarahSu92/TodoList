import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Todo } from '../models/Todos';

type AddTodoProps = {
  addTodo: (t: Todo) => void;
};

export const AddTodo = ({ addTodo }: AddTodoProps) => {
  const [newTodo, setnewTodo] = useState<Todo>({
    id:  Number(`${Date.now()}${Math.floor(Math.random() * 1000)}`),
    name: '',
    created_at: Number(`${Date.now()}${Math.floor(Math.random() * 1000)}`),
    done: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === 'text') {
      setnewTodo({ ...newTodo, [e.target.id]: e.target.value });
    }
    if (e.target.type === 'number') {
      setnewTodo({ ...newTodo, [e.target.id]: parseInt(e.target.value) });
    }
    if (e.target.type === 'checkbox') {
      setnewTodo({ ...newTodo, [e.target.id]: e.target.checked });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const created_at = new Date().toISOString(); // e.g., "2025-06-02T14:37:00.123Z"
    localStorage.setItem('created_at', created_at);

    addTodo(newTodo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="name"
        type="text"
        value={newTodo.name}
        onChange={handleChange}
        placeholder='New todo'
        required
      />
      <input
        id="done"
        type="checkbox"
        checked={newTodo.done}
        onChange={handleChange}
        placeholder='New todo'
        required
      />
      <button>Add new Todo!</button>
    </form>
  );
};

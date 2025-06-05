import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Todo } from '../models/Todos';

type AddTodoProps = {
  addTodo: (t: Todo) => void;
};

export const AddTodo = ({ addTodo }: AddTodoProps) => {
  const [newTodo, setnewTodo] = useState<Todo>({
    id:  Number(Date.now()),
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
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    //New id and timestamp
     const todoToAdd = {
      ...newTodo,
      id: Date.now(),
      created_at: Number(`${Date.now()}${Math.floor(Math.random() * 1000)}`),
    };

    addTodo(todoToAdd);


    //Local storage
    const existingTodos: Todo[] = JSON.parse(localStorage.getItem('todos') || '[]');
    const updatedTodos = [...existingTodos, todoToAdd];
    localStorage.setItem('todos', JSON.stringify(updatedTodos));


    //Empty input
    setnewTodo({
      id: Date.now(),
      name: '',
      created_at: 0,
      done: false,
    })
  };

  return (
    <form onSubmit={handleSubmit} className='newtodo'>
      <input className='add'
        id="name"
        type="text"
        value={newTodo.name}
        onChange={handleChange}
        placeholder='New todo'
        required
      />
     
      <button>Add new Todo!</button>
    </form>
  );
};

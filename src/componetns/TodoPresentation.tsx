import type { Todo } from "../models/Todos";

type TodoPresentationProps = {
    todo: Todo;
    toggleTodo: (id: number) => void;
    removeTodo: (id: number) => void;
        
}

export const TodoPresentation = ({todo, toggleTodo, removeTodo}: TodoPresentationProps) => {
  return (
  <div className="container">
    <ul>
      <li style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
          {todo.name}
        </li>
        <li>ID: {todo.id}</li>
        <li>Created at: {new Date(todo.created_at).toLocaleString()}</li>
         <li>
          <label>
            Done:{''}
            <input
              type="checkbox"
              defaultChecked={false}
              onChange={() =>toggleTodo(todo.id)}
              />
              <button onClick={() => removeTodo(todo.id)}>Remove todo</button>
          </label>
        </li>
    </ul>
   </div>
);
}

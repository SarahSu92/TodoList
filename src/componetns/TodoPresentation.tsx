import type { Todo } from "../models/Todos";

type TodoPresentationProps = {
    todo: Todo;
    removeTodo: (id: number) => void;
        
}

export const TodoPresentation = ({todo, removeTodo}: TodoPresentationProps) => {
  const handleDoneChange = () => {
    removeTodo(todo.id);
  }  
  return (
  <div className="container">
    <ul>
        <li>{todo.name}</li>
        <li>ID: {todo.id}</li>
        <li>Created at: {new Date(todo.created_at).toLocaleString()}</li>
         <li>
          <label>
            Done:{''}
            <input
              type="checkbox"
              defaultChecked={false}
              onChange={handleDoneChange}
              />
          </label>
        </li>
    </ul>
   </div>
);
}

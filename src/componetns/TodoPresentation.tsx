import type { Todo } from "../models/Todos";

type TodoPresentationProps = {
    todo: Todo;
    
}

export const TodoPresentation = ({todo}: TodoPresentationProps) => {
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
              
            />
          </label>
        </li>
    </ul>
   
  
  </div>
);
}

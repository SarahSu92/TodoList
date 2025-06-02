interface ITodo {
  id: number;
  name: string;
  created_at: string;
  done: string;
}

export const Todos = () => {
//   const created_at = new Date(Todo.created_at);
//   const done = Todo.done ? new Date(Todo.done) : null;
  const Todos: ITodo[] = [
    {
      id: 1,
      name: 'Clean House',
      created_at: new Date().toISOString(),
      done: new Date().toISOString(),
    },
       {
      id: 2,
      name: 'Study',
      created_at: new Date().toISOString(),
      done: new Date().toISOString(),
    },
       {
      id: 3,
      name: 'Cook Food',
      created_at: new Date().toISOString(),
      done: new Date().toISOString(),
    },
       {
      id: 4,
      name: 'Shop groceries',
      created_at: new Date().toISOString(),
      done: new Date().toISOString(),
    },
       {
      id: 5,
      name: 'Water the plants',
      created_at: new Date().toISOString(),
      done: new Date().toISOString(),
    },
  ];




return (
  <>
    <div className="container">
      {Todos.map((todo) => (
        <div key={todo.id}>
          <ul>
            <li>{todo.id}</li>
            <li>{todo.name}</li>
            <li>{new Date(todo.created_at).toLocaleDateString()}</li>
            <li>{todo.done ? new Date(todo.done).toLocaleDateString() : "Not done"}</li>
          </ul>
        </div>
      ))}
    </div>
  </>
);
};

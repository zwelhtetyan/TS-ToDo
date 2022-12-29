import { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addNewTodoHandler = (newTodo: string) => {
    const newTodoObject = new Todo(newTodo);
    setTodos((prevTodos) => [newTodoObject, ...prevTodos]);
  };

  const removeTodoHandler = (todoId: number) =>
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));

  return (
    <div>
      <NewTodo addNewTodoHandler={addNewTodoHandler} />
      <Todos items={todos} removeTodoHandler={removeTodoHandler} />
    </div>
  );
}

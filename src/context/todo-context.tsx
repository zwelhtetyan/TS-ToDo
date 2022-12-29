import React, { createContext, useContext, useState } from 'react';
import Todo from '../models/todo';

type TodoContextObj = {
  todos: Todo[];
  addNewTodoHandler: (newTodo: string) => void;
  removeTodoHandler: (todoId: number) => void;
};

const TodoContext = createContext<TodoContextObj>({
  todos: [],
  addNewTodoHandler: (newTodo: string) => {},
  removeTodoHandler: (todoId: number) => {},
});

const TodoContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addNewTodoHandler = (newTodo: string) => {
    const newTodoObject = new Todo(newTodo);
    setTodos((prevTodos) => [newTodoObject, ...prevTodos]);
  };

  const removeTodoHandler = (todoId: number) =>
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));

  const contextValue: TodoContextObj = {
    todos,
    addNewTodoHandler,
    removeTodoHandler,
  };

  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};

export default TodoContextProvider;

export const useTodoContext = () => useContext(TodoContext);

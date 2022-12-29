import { useRef } from 'react';
import { useTodoContext } from '../context/todo-context';
import classes from './NewTodo.module.css';

const NewTodo: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { addNewTodoHandler } = useTodoContext();

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();

    const newTodo = inputRef.current!.value.trim();

    if (newTodo) addNewTodoHandler(newTodo);

    inputRef.current!.value = '';
  };

  return (
    <form onSubmit={handleAddTodo} className={classes.form}>
      <input type='text' ref={inputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;

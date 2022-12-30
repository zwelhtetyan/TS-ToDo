import { useTodoContext } from '../context/todo-context';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';

const Todos = () => {
  const { todos, removeTodoHandler } = useTodoContext();

  return (
    <ul className={classes.todos}>
      {todos.length > 0 && <p>Double click to delete todo.</p>}

      {todos.map((item) => (
        <TodoItem
          key={item.id}
          todoText={item.todoText}
          removeTodoHandler={() => removeTodoHandler(item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;

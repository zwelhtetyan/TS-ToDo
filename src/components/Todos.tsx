import Todo from '../models/todo';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';

const Todos: React.FC<{
  items: Todo[];
  removeTodoHandler: (todoId: number) => void;
}> = ({ items, removeTodoHandler }) => {
  return (
    <ul className={classes.todos}>
      {items.length > 0 && <p>Double click to delete todo.</p>}

      {items.map((item) => (
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

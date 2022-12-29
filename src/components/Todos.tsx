import Todo from '../models/todo';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';

const Todos: React.FC<{ items: Todo[] }> = ({ items }) => {
  return (
    <ul className={classes.todos}>
      {items.map((item) => (
        <TodoItem key={item.id} todoText={item.todoText} />
      ))}
    </ul>
  );
};

export default Todos;

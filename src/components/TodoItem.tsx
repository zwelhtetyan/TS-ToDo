import classes from './TodoItem.module.css';

const TodoItem: React.FC<{
  todoText: string;
  removeTodoHandler: () => void;
}> = ({ todoText, removeTodoHandler }) => {
  return (
    <li className={classes.item} onDoubleClick={removeTodoHandler}>
      {todoText}
    </li>
  );
};

export default TodoItem;

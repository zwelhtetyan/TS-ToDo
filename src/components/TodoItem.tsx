import classes from './TodoItem.module.css';

type TodoItemProps = { todoText: string; removeTodoHandler: () => void };

const TodoItem = ({ todoText, removeTodoHandler }: TodoItemProps) => {
  return (
    <li className={classes.item} onDoubleClick={removeTodoHandler}>
      {todoText}
    </li>
  );
};

export default TodoItem;

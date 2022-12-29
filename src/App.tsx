import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import TodoContextProvider from './context/todo-context';

export default function App() {
  return (
    <TodoContextProvider>
      <NewTodo />
      <Todos />
    </TodoContextProvider>
  );
}

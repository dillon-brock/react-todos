import { completeTodo, deleteTodo } from '../../services/todos';
import './Todo.css';

export default function Todo({ id, complete, description, setTodos }) {
  const handleDeleteTodo = async () => {
    await deleteTodo(id);
    setTodos(prevTodos => prevTodos.filter(todo => id !== todo.id));
  };

  const handleCompleteTodo = async () => {
    await completeTodo(id, !complete);
    setTodos(prev => prev.map(todo => todo.id === id ? { ...todo, complete: !todo.complete } : todo));
  };

  return (
    <div className='todo'>
      <input type='checkbox' checked={complete} onChange={handleCompleteTodo} />
      <h4 className='todo-description'>{description}</h4>
      <button className='delete-todo-button' onClick={() => {
        handleDeleteTodo(id);
      }}>x</button>
    </div>
  );
}
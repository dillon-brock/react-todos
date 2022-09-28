import { deleteTodo } from '../../services/todos';
import './Todo.css';

export default function Todo({ id, description, complete, setTodos }) {

  const handleDeleteTodo = async (id) => {
    const deletedTodo = await deleteTodo(id);
    setTodos(prevTodos => prevTodos.filter(todo => id !== todo.id));
  };

  return (
    <div className='todo'>
      <h4 className='todo-description'>{description}</h4>
      <button className='delete-todo-button' onClick={() => {
        handleDeleteTodo(id);
      }}>x</button>
    </div>
  );
}
import { useState } from 'react';
import { completeTodo, deleteTodo } from '../../services/todos';
import './Todo.css';

export default function Todo({ id, description, complete, setTodos }) {
  const [completed, setCompleted] = useState(complete);

  const handleDeleteTodo = async (id) => {
    await deleteTodo(id);
    setTodos(prevTodos => prevTodos.filter(todo => id !== todo.id));
  };

  const handleCompleteTodo = async () => {
    setCompleted(prev => !prev);
    await completeTodo(id, !completed);
  };

  return (
    <div className='todo'>
      <input type='checkbox' onChange={handleCompleteTodo} />
      <h4 className='todo-description'>{description}</h4>
      <button className='delete-todo-button' onClick={() => {
        handleDeleteTodo(id);
      }}>x</button>
    </div>
  );
}
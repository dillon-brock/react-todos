import { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { useTodos } from '../../hooks/useTodos';
import { createNewTodo } from '../../services/todos';

export default function Todos() {
  const { user } = useContext(UserContext);
  const { todos, setTodos } = useTodos();
  const [description, setDescription] = useState('');

  if (!user) return <Redirect to='/auth/sign-in' />;

  const handleAddTodo = async () => {
    await createNewTodo(description);
    setTodos((prevTodos) => [...prevTodos, { description }]);
    setDescription('');
  };

  return (
    <div className='main'>
      <div className='add-todo'>
        <input type='text' placeholder='New Todo' value={description} onChange={(e) => {
          setDescription(e.target.value);
        }} />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <div className='todos'>
        {todos.map(todo => <h4 key={todo.id}>{todo.description}</h4>)}
      </div>
    </div>
  );
}
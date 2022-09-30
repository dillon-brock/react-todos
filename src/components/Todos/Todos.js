import { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { useTodos } from '../../hooks/useTodos';
import { createNewTodo } from '../../services/todos';
import Todo from '../Todo/Todo';

export default function Todos() {
  const { user } = useContext(UserContext);
  const { todos, setTodos } = useTodos();
  const [description, setDescription] = useState('');

  if (!user) return <Redirect to='/auth/sign-in' />;

  const handleAddTodo = async () => {
    const newTodo = await createNewTodo(description);
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setDescription('');
  };

  return (
    <div className='main'>
      <div className='add-todo'>
        <input className="input add-todo-input" type='text' placeholder='New Todo' value={description} onChange={(e) => {
          setDescription(e.target.value);
        }} />
        <button className="button is-success add-todo-button" onClick={handleAddTodo}>Add</button>
      </div>
      <div className='todos'>
        {todos.map(todo => <Todo key={todo.id} { ...todo } setTodos={setTodos} todos={todos} />)}
      </div>
    </div>
  );
}
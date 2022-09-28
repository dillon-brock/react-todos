import { useContext, useState } from 'react';
import { NavLink, Redirect, useParams } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { authUser } from '../../services/auth';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { type } = useParams();

  const { user, setUser } = useContext(UserContext);

  const submitAuth = async () => {
    const userResponse = await authUser(email, password, type);
    setUser(userResponse);
    setEmail('');
    setPassword('');
  };

  if (user) return <Redirect to='/todos' />;

  return (
    <div className='auth-container'>
      <div className='auth-links'>
        <NavLink className='auth-link' to='/auth/sign-in'>Sign In</NavLink>
        <NavLink className='auth-link' to='/auth/sign-up'>Sign Up</NavLink>
      </div>
      <div className='auth-form'>
        <label>
          Email
          <input type='text' placeholder='name@example.com' value={email} onChange={(e) => {
            setEmail(e.target.value);
          }} />
        </label>
        <label>
          Password
          <input type='password' placeholder='Password' value={password} onChange={(e) => {
            setPassword(e.target.value);
          }} />
        </label>
        <button className='auth-submit' onClick={submitAuth}>Submit</button>
      </div>
    </div>
  );
}
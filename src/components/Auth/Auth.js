import { useContext, useState } from 'react';
import { NavLink, Redirect, useParams } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { authUser } from '../../services/auth';
import './Auth.css';

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
      <div className='auth-form box'>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input className="input" type='text' placeholder='name@example.com' value={email} onChange={(e) => {
              setEmail(e.target.value);
            }} />
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input className="input" type='password' placeholder='Password' value={password} onChange={(e) => {
              setPassword(e.target.value);
            }} />
          </div>
        </div>
        <button className='button is-primary auth-submit' onClick={submitAuth}>Submit</button>
      </div>
    </div>
  );
}
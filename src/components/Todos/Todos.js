import { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

export default function Todos() {
  const { user } = useContext(UserContext);

  if (!user) return <Redirect to='/auth/sign-in' />;
}
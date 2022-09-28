import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { signOut } from '../../services/auth';

export default function Header() {
  const { user, setUser } = useContext(UserContext);

  const handleSignOut = async () => {
    try {
      await signOut();
      setUser(null);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  };

  return (
    <header>
      <h1 className='title'>TODOS</h1>
      {user && (
        <>
          <h3>hello {user.email}</h3>
          <button className='sign-out-button' onClick={handleSignOut}>Sign Out</button>
        </>
      )}
    </header>
  );
}
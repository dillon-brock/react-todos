import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth/Auth';
import Header from './components/Header/Header';
import Todos from './components/Todos/Todos';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/auth/:type' component={Auth} />
        <Route path='/todos' component={Todos} />
        <Route path='*'>
          <Redirect to='/auth/sign-in' />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

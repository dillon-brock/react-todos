import { Route, Switch } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth/Auth';
import Todos from './components/Todos/Todos';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/auth/:type' component={Auth} />
        <Route path='/todos' component={Todos} />
      </Switch>
    </div>
  );
}

export default App;

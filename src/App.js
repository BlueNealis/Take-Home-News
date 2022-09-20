import Dashboard from './Components/Dashboard'
import DetailView from './Components/DetailView'
import './App.css';
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div>
    <Switch>
      <Route exact path='/'>
        <Dashboard />
      </Route>
      <Route path='/detail'
        <DetailView />
      </Route>
    </Switch>

    </div>
  );
}

export default App;

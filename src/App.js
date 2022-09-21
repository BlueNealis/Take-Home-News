import Dashboard from './Components/Dashboard'
import DetailView from './Components/DetailView'
import './App.css';
import { Switch, Route } from 'react-router-dom'
import React, {useState} from 'react'

function App() {
  const [detailArticle, setDetailArticle] = useState({})
  const handleArticleChoice = (e) => {

  }

  return (
    <div>
    <h1 className='title'>Top News of Today</h1>
    <Switch>
      <Route exact path='/'>
        <Dashboard handleChoice={handleArticleChoice}/>
      </Route>
      <Route path='/detail/:title'>
        <DetailView />
      </Route>
    </Switch>
    </div>
  );
}

export default App;

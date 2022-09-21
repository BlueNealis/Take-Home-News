import Dashboard from './Components/Dashboard'
import DetailView from './Components/DetailView'
import './App.css';
import { Switch, Route } from 'react-router-dom'
import React, {useState} from 'react'
import grabArticles from './apiCalls'

function App() {
  const [detailArticle, setDetailArticle] = useState({})

  const handleArticleChoice = (e) => {
    grabArticles().then(data => {setDetailArticle(data.results.find((result) => {
      if(result.title === e.target.id) {
        console.log(result)
        return result
      }
    }))
  }
)
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

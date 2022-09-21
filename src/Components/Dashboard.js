import SummaryCard from './SummaryCard'
import React, {useState, useEffect} from 'react'
import './Dashboard.css'
import grabArticles from '../apiCalls'

function Dashboard({handleChoice}) {
  const [cards, setCards] = useState([])
  const [category, setCategory] = useState('world')

  useEffect(() => {
    setCards([])
    grabArticles(category).then(data => {setCards(data.results.map((result) => {
      if(!result.title){
        return
      }
    return (<SummaryCard key={result.title}
    handleChoice={handleChoice}
    title={result.title}
    url={result.multimedia[1].url}
    date={result.created_date} />)
  }))
})
},[category])

  return(
    <div>
      <label>Top News in:</label>
      <select onChange={(e) => setCategory(e.target.value)}className='filter'>
        <option value='world'>World</option>
        <option value='us'>United States</option>
        <option value='arts'>Arts</option>
        <option value='home'>Home</option>
        <option value='science'>Science</option>
      </select>
      <div className='card-container'>
        {cards}
      </div>
    </div>
  )
}

export default Dashboard

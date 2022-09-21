import SummaryCard from './SummaryCard'
import React, {useState, useEffect} from 'react'
import './Dashboard.css'
import grabArticles from '../apiCalls'

function Dashboard({handleChoice}) {
  const [cards, setCards] = useState([])
  const [loading, setLoading] = useState('')
  const [category, setCategory] = useState('world')

  useEffect(() => {
    setCards([])
    setLoading('Loading.....')
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
  setLoading('')
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
      {loading && <h1>{loading}</h1>}
        {cards}
      </div>
    </div>
  )
}

export default Dashboard

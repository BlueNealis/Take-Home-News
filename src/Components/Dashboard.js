import SummaryCard from './SummaryCard'
import React, {useState, useEffect} from 'react'
import './Dashboard.css'
import grabArticles from '../apiCalls'

function Dashboard({handleChoice}) {
  const [cards, setCards] = useState([])
  const [category, setCategory] = useState('world')

  useEffect(() => {
    grabArticles(category).then(data => {setCards(data.results.map((result) => {
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
      <select className='filter'>
        <option>World</option>
        <option>United States</option>
        <option>Arts</option>
        <option>Home</option>
        <option>Science</option>
        <option>All Categories</option>
      </select>
      <div className='card-container'>
        {cards}
      </div>
    </div>
  )
}

export default Dashboard

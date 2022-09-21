import SummaryCard from './SummaryCard'
import React, {useState, useEffect} from 'react'
import './Dashboard.css'
import grabArticles from '../apiCalls'

function Dashboard({handleChoice}) {
  const [cards, setCards] = useState([])

  useEffect(() => {
    grabArticles().then(data => {setCards(data.results.map((result) => {
    return (<SummaryCard key={result.title}
    handleChoice={handleChoice}
    title={result.title}
    url={result.multimedia[1].url}
    date={result.created_date} />)
  }))
})
  },[])

  return(
    <div>
      <select className='filter'>
        <option>Date</option>
      </select>
      <div className='card-container'>
        {cards}
      </div>
    </div>
  )
}

export default Dashboard

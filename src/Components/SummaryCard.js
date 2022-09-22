import React from 'react'
import './SummaryCard.css'
import {Link} from 'react-router-dom'

function SummaryCard({handleChoice, title, url, date}) {
  return (
  <Link to={`/details/${title}`}>
    <div onClick={handleChoice} id={title} className='card'>
      <img id={title} className='card-img' src={url} alt='jellyfish'/>
      <h1 id={title}>{title}</h1>
      <p id={title}>{date}</p>
    </div>
  </Link>
  )
}

export default SummaryCard

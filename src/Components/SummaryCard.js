import React from 'react'
import './SummaryCard.css'
import {Link} from 'react-router-dom'

function SummaryCard({title, url, date}) {
  return (
  <Link to={`/details?title=${title}`}>
    <div className='card'>
      <img className='card-img' src={url} alt='jellyfish'/>
      <h1>{title}</h1>
      <p>{date}</p>
    </div>
  </Link>
  )
}

export default SummaryCard

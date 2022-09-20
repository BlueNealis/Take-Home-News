import React from 'react'
import './SummaryCard.css'

function SummaryCard({title, imgUrl, date}) {
  return (
    <div className='card'>
      <img src={imgURL}/>
      <h1>{title}</h1>
      <p>{date}</p>
    </div>
  )
}

export default SummaryCard

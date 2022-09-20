import SummaryCard from './SummaryCard'
import React, { useState } from 'react'

function Dashboard() {
  const [cards, setCards] = useState([])
  return(
    <div>
      <SummaryCard /> 
    </div>
  )
}

export default Dashboard

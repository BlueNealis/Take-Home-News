import SummaryCard from './SummaryCard'
import React, { useState } from 'react'
import './Dashboard.css'

function Dashboard() {
  const [cards, setCards] = useState([])
  return(
    <div>
      <select className='filter'>
        <option>Date</option>
      </select>
      <div className='card-container'>
        <SummaryCard title={'A Title'}
        url={"https://www.foodnavigator.com/var/wrbm_gb_food_pharma/storage/images/_aliases/wrbm_large/publications/food-beverage-nutrition/foodnavigator.com/news/market-trends/jellyfish-a-new-sustainable-nutritious-and-oyster-like-food-for-the-western-world/9974704-1-eng-GB/Jellyfish-A-new-sustainable-nutritious-and-oyster-like-food-for-the-Western-world.jpg"}
        date={'January 6, 2022'}/>
      </div>
    </div>
  )
}

export default Dashboard

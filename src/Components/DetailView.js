import React from 'react'
import Route from 'react-router-dom'

function DetailView({articleInfo}) {
  console.log('this is rendering', articleInfo)
  return(
    <div>
      <h1>{articleInfo.title}</h1>
    </div>
  )
}

export default DetailView

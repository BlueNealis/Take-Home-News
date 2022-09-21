import React from 'react'
import Route from 'react-router-dom'
import './DetailView.css'

function DetailView({articleInfo}) {
  console.log(articleInfo)
  return(
    <div className='article-container'>
      <img src={articleInfo.multimedia[1].url} alt={articleInfo.multimedia[1].caption}/>
      <h1 className='title'>{articleInfo.title}</h1>
    </div>
  )
}

export default DetailView

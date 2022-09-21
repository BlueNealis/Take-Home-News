import React from 'react'
import {Link} from 'react-router-dom'
import './DetailView.css'
function DetailView({articleInfo}) {
  console.log(articleInfo)
  return(<>
    <Link to='/'>
      <h1 className='redirect-main'>Back To Main</h1>
    </Link>
    <div className='article-container'>
      <img src={articleInfo.multimedia[1].url} alt={articleInfo.multimedia[1].caption}/>
      <div className='article-grab'>
        <h1 className='title'>{articleInfo.title}</h1>
        <p>{articleInfo.abstract}</p>
      </div>
    </div>
    </>
  )
}

export default DetailView

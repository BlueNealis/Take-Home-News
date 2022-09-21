const grabArticles = (category) => {

  return fetch(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${process.env.REACT_APP_API_KEY}`)
    .then(response => response.json())
}

export default grabArticles

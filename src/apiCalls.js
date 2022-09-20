const grabArticles = () => {

  return fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${process.env.REACT_APP_API_KEY}`)
    .then(response => response.json())
}

export default grabArticles

import key from './apikey'

function getGif() {
  return window
    .fetch(
      'https://api.giphy.com/v1/gifs/random?rating=pg&tag=snake&api_key=' + key,
      // process.env.API_KEY,
    )
    .then((res) => {
      if (!res.ok) {
        throw new Error('HTTP error')
      }
      return res
    })
    .then((res) => res.json())
}

export default getGif

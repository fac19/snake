const checkResponse = response => {
  if (response.status !== 200) {
    console.log(`Error with the request! ${response.status}`);
    return;
  }
  return response.json();
};

export const getRandomSnakes = () => {
  return fetch("api.giphy.com/v1/gifs/random/tag=snake&api_key="+process.ENV.api_key)
    .then(checkResponse)
    .catch(err => {
      throw new Error(`fetch getRandomSnakes failed ${err}`);
    });
};

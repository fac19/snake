function getGif() {
    return window
      .fetch(`https://api.giphy.com/v1/gifs/random?rating=pg&tag=snake&api_key=Q2YD4kTLX6Q1m1OKDrh5eFLNoj3xyTbL`)
      .then((res) => {
        if (!res.ok) throw new Error("HTTP error");
        return res;
      })
      .then((res) => res.json());
  }

  export default getGif;
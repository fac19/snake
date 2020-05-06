const getRandomCoordinates = () => {
  let min = 1
  let max = 98
  let x = Math.floor((Math.random() * (max - min + 1)) / 2) * 2
  let y = Math.floor((Math.random() * (max - min + 1)) / 2) * 2

  return [x, y]
}

export default getRandomCoordinates

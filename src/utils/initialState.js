import getRandomCoordinates from './getRandomCoordinates'

const initialState = {
  speed: 200,
  food: getRandomCoordinates,
  direction: 'down',
  snakeDots: [
    [0, 0],
    [2, 0],
    [4, 0],
    [6, 0],
    [8, 0],
  ],
}

export default initialState

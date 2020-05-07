import React, { useState, useEffect } from 'react'
import Score from './components/score'
import Snake from './components/snake'
import Food from './components/food'
import CharacterSelector from './components/characterSelector'
import getRandomCoordinates from './utils/getRandomCoordinates'
import initialState from './utils/initialState'
import onKeydown from './utils/keyDown'
import getGif from './utils/getSnake'
import useInterval from './utils/useInterval'

function App() {
  const [speed, setSpeed] = useState(initialState.speed)
  const [food, setFood] = useState(initialState.food)
  const [direction, setDirection] = useState(initialState.direction)
  const [snakeDots, setSnakeDots] = useState(initialState.snakeDots)
  const [backgroundURL, setBackgroundURL] = useState(initialState.id)
  const [gamePlay, setGamePlay] = useState(false)
  const [removeSegment, setRemoveSegment] = useState(0)
  const [character, setCharacter] = useState('boris')
  const [score, setScore] = useState(0)
  const [topScore, setTopScore] = useState(0)

  useEffect(() => {
    const keyDownCallback = (e) => setDirection(onKeydown(e, direction)) //include in presentation
    window.addEventListener('keydown', keyDownCallback)
    return () => window.removeEventListener('keydown', keyDownCallback)
  }, [snakeDots])

  function handleChange(event) {
    setGamePlay(true)
    setSpeed(initialState.speed)
    setCharacter(event.target.id)
  }

  const moveSnake = () => {
    let dots = [...snakeDots]
    let head = dots[dots.length - 1]

    if (dots.length > 0) {
      switch (direction) {
        case 'right':
          head = [head[0] + 2, head[1]]
          break
        case 'left':
          head = [head[0] - 2, head[1]]
          break
        case 'up':
          head = [head[0], head[1] - 2]
          break
        case 'down':
          head = [head[0], head[1] + 2]
          break
        default:
          head = [head[0] + 2, head[1]]
      }
    }
    dots.push(head)
    dots.shift()
    setScore(score + 1 * -(210 - speed) * 0.1)
    setRemoveSegment(removeSegment + 1)
    if (removeSegment % 30 == 0) {
      dots.shift()
    }

    setSnakeDots(dots)
  }

  const checkIfOutOfBorders = () => {
    let head = snakeDots[snakeDots.length - 1]
    if (head[0] >= 100 || head[0] < 0 || head[1] >= 100 || head[1] < 0) {
      onGameOver()
    }
  }

  const checkIfCollided = () => {
    let snake = [...snakeDots]
    let head = snake[snake.length - 1]
    snake.pop()
    snake.forEach((dot) => {
      if (head[0] === dot[0] && head[1] === dot[1]) {
        onGameOver()
      }
    })
  }

  const checkEat = () => {
    let head = snakeDots[snakeDots.length - 1]
    let foodPosition = food

    if (head[0] === foodPosition[0] && head[1] === food[1]) {
      setFood(getRandomCoordinates())
      getGif().then((res) => setBackgroundURL(res.data.id))
      enlargeSnake()
      increaseSpeed()
    }
  }

  const enlargeSnake = () => {
    let newSnake = [...snakeDots]
    newSnake.unshift([])
    setSnakeDots(newSnake)
  }

  const increaseSpeed = () => {
    if (speed > 10) {
      setSpeed(speed - 10)
    }
  }

  const onGameOver = () => {
    setSpeed(null)
    setGamePlay(false)
    setFood(initialState.food)
    setDirection(initialState.direction)
    setSnakeDots(initialState.snakeDots)
    setRemoveSegment(0)
    if (score < topScore) {
      setTopScore(score)
    }
    setScore(0)
  }

  useInterval(moveSnake, speed)

  useEffect(() => {
    if (snakeDots.length > 0) {
      checkIfOutOfBorders()
      checkIfCollided()
      checkEat()
    } else {
      onGameOver()
    }
  })

  if (gamePlay) {
    return (
      <div
        className="game-area"
        style={{
          backgroundImage: `url(https://media.giphy.com/media/${
            backgroundURL ? backgroundURL : initialState.id
          }/giphy.gif)`,
        }}
      >
        <Score consts={snakeDots.length} pointScore={score} />
        <Snake snakeDots={snakeDots} character={character} />
        <Food dot={food} />
      </div>
    )
  } else {
    return <CharacterSelector onChange={handleChange} topScore={topScore} />
  }
}

export default App

import React, { useState, useEffect } from 'react'
import Snake from './snake'
import Food from './food'

const getRandomCoordinates = () => {
  let min = 1
  let max = 98
  let x = Math.floor((Math.random() * (max - min + 1)) / 2) * 2
  let y = Math.floor((Math.random() * (max - min + 1)) / 2) * 2

  return [x, y]
}

const initialState = {
  speed: 200,
  food: getRandomCoordinates(),
  direction: 'right',
  snakeDots: [
    [0, 0],
    [2, 0],
    [4, 0],
    [6, 0],
    [8, 0],
  ],
}

function getRandomSnakes() {
  fetch('api.giphy.com/v1/gifs/random/tag=snake&api_key=' + process.ENV.api_key)
    .then((response) => response.json())
    .then(console.log)
    .catch(console.error)
}

function App(props) {
  const [speed, setSpeed] = useState(initialState.speed)
  const [food, setFood] = useState(initialState.food)
  const [direction, setDirection] = useState(initialState.direction)
  const [snakeDots, setSnakeDots] = useState(initialState.snakeDots)

  React.useEffect(() => {
    setInterval(moveSnake, speed)
    document.onkeydown = onKeyDown
  }, [])

  React.useEffect(() => {
    checkIfOutOfBorders()
    checkIfCollided()
    checkEat()
  }, [snakeDots])

  const onKeyDown = (event) => {
    event = event || window.event
    switch (event.keyCode) {
      case 38:
        setDirection('up')
        break
      case 40:
        setDirection('down')
        break
      case 37:
        setDirection('left')
        break
      case 39:
        setDirection('right')
        break
    }
  }

  const moveSnake = () => {
    let dots = [...snakeDots]
    let head = dots[dots.length - 1]

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
    }
    dots.push(head)
    dots.shift()
    setSnakeDots(dots)
  }

  const checkIfOutOfBorders = () => {
    let head = snakeDots[snakeDots.length - 1]
    console.log(head)
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
    alert(`Game Over. Snake length ${snakeDots.length}`)
    setSpeed(initialState.speed)
    setFood(initialState.food)
    setDirection(initialState.direction)
    setSnakeDots(initialState.snakeDots)
  }

  return (
    <div className="game-area">
      <Snake snakeDots={snakeDots} />
      <Food dot={food} />
    </div>
  )
}

export default App

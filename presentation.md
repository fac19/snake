# Sssssnake :snake:

```JavaScript
let project = '?'

reactWeek ? project='Boris&NigelAreSnakes' 
: project='somethingSensibleAndPoliticallyNeutral'

```
 

---

[DEMO IT](https://sssssnake.netlify.app)

---

![](https://i.imgur.com/VK78p7s.gif)
[YouTube video](https://www.youtube.com/watch?v=-oOgsGP3t5o)

---

## Converting react classes to hooks

![captain hooks](https://media.giphy.com/media/tYAolvs3tZIhG/giphy.gif =400x)

---

## Sssssstate of play

---

### initialise

```javascript=2
// initialState.js
const initialState = {
  speed: 200,
  food: getRandomCoordinates,
  direction: 'right',
  snakeDots: [
    [0, 0],
    [2, 0],
    [4, 0],
    [6, 0],
    [8, 0],
    [10, 0],
    [12, 0],
  ],
  character: 'boris',
  id: 'QtZKO7mb7ebpC',
}
```

---

### choose character

```javascript=37
  //app.js
  function chooseCharacter(event) { 
      setCharacter(event.target.id)
  }
```

---

## Re-inventing the wheel (Radio)

![](https://media.giphy.com/media/3og0INyCmHlNylks9O/giphy.gif =400x400)

---

### choose difficulty

```JavaScript
 case 'leeds':
        setLoseTail(30)
        selectors[1].className = 'difficulty difficulty-selected'
        selectors[0].className = 'difficulty difficulty-not-selected'
        selectors[2].className = 'difficulty difficulty-not-selected'
        initialState.speed = 250
```

---

### render snake

```javascript=6
//snake.js
{snakeDots.map((dot, i) => {
        const style = {
          left: `${dot[0]}%`,
          top: `${dot[1]}%`,
        }
        return (
          <div
            className={
              i === snakeDots.length - 1
                ? `snake-dot segment${i} head ${character}`
                : `snake-dot segment${i}`
            }
            key={i}
            style={style}
          ></div>
        )
      })}
```

---

### move snake

```javascript=77
//app.js
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
```

---

### move snake regularly

```javascript=
// app.js
 useInterval(moveSnake, speed);
 
//useInterval.js
function useInterval(callback, snakeSpeed) {
    const savedCallback = useRef
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback
    }, [callback, savedCallback])
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current()
      }
      if (snakeSpeed !== null) {
        let id = setInterval(tick, snakeSpeed)
        return () => clearInterval(id)
      }
    }, [snakeSpeed, savedCallback])
  }

export default useInterval;
```

---

### game over

```javascript=168
//app.js
 useEffect(() => {
    if (snakeDots.length > 0) {
      checkIfOutOfBorders()
      checkIfCollided()
      checkEat()
    } else {
      onGameOver()
    }
  })
```

---

### re-initialise

```javascript=153
//app.js
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
```

---

### Call that function in the functions function
- handler function 👉 child component 👉 update the parent component's state variable
![](https://media.giphy.com/media/1pA8SLUn8ObV57ZmIZ/giphy.gif)


---

```javascript=
const keyDownCallback = (e) => setDirection(onKeydown(e, direction))
    
window.addEventListener('keydown', keyDownCallback)

```

---

```javascript=
const onKeydown = (event, direction) => {
  event = event || window.event
  switch (event.keyCode) {
    case 38:
      return direction === 'down' ? 'down' : 'up'
    case 40:
      return direction === 'up' ? 'up' : 'down'
    case 37:
      return direction === 'right' ? 'right' : 'left'
    case 39:
      return direction === 'left' ? 'left' : 'right'
    default:
  }
}
```

---

### with more time
  
- change grid size
- hiding API key properly (REACT_APP_API_KEY) 

---

![](https://media.giphy.com/media/zPdwt79PXjMEo/giphy.gif)

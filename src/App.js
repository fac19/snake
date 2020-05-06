import React, {Component} from 'react';
import Snake from './snake';
import Food from './food';

const getRandomCoordinates = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor(Math.random()*(max-min+1)/2)*2;
  let y = Math.floor(Math.random()*(max-min+1)/2)*2;

  return [x,y];
}

const initialState = {
  speed: 200,
  food: getRandomCoordinates(),
  direction: 'right',
  snakeDots: [
    [0,0],
    [2,0],
    [4,0],
    [6,0],
    [8,0]
  ]
}

class App extends Component {

  state = initialState;

  componentDidMount() {
    setInterval(this.moveSnake, this.state.speed)
    document.onkeydown = this.onKeyDown;
  }

  componentDidUpdate() {
    this.checkIfOutOfBorders();
    this.checkIfCollided();
    this.checkEat();
  }

  onKeyDown = event => {
    event = event || window.event;
    switch (event.keyCode) {
      case 38:
        this.setState({direction: 'up'});
        break;
      case 40:
        this.setState({direction: 'down'});
        break;
      case 37:
        this.setState({direction: 'left'});
        break;
      case 39:
        this.setState({direction: 'right'});
        break;
    }
  }

  moveSnake = () => {
    let dots = [...this.state.snakeDots];
    let head = dots[dots.length-1];

    switch (this.state.direction) {
      case 'right':
        head = [head[0]+2, head[1]];
        break;
      case 'left':
        head = [head[0]-2, head[1]];
        break;
      case 'up':
        head = [head[0], head[1]-2];
        break;
      case 'down':
        head = [head[0], head[1]+2];
        break;
    }
    dots.push(head)
    dots.shift();
    this.setState({
      snakeDots: dots
    })
  }

  checkIfOutOfBorders() {
    let head = this.state.snakeDots[this.state.snakeDots.length-1];
    console.log(head);
    if (head[0] >= 100 || head[0] < 0 || head[1] >= 100 || head[1] < 0) {
      this.onGameOver();
    }
  }

  checkIfCollided() {
    let snake = [...this.state.snakeDots];
    let head = snake[snake.length-1];
    snake.pop();
    snake.forEach(dot => {
      if (head[0] === dot[0] && head[1] === dot[1]){
        this.onGameOver();
      }
    })
  }

  checkEat() {
    let head = this.state.snakeDots[this.state.snakeDots.length-1];
    let food = this.state.food;

    if (head[0] === food[0] && head[1] === food[1]) {
      this.setState({
        food: getRandomCoordinates()
      })
      this.enlargeSnake();
      this.increaseSpeed();
    }
  }

  enlargeSnake() {
    let newSnake = [...this.state.snakeDots];
    newSnake.unshift([])
    this.setState({
      snakeDots:newSnake
    })
  }

  increaseSpeed(){
    if(this.state.speed > 10) {
      this.setState({
        speed: this.state.speed-10
      })
    }
  }

  onGameOver() {
    alert(`Game Over. Snake length ${this.state.snakeDots.length}`);
    this.setState(initialState);
  }

  render() {
  return (
    <div className="game-area">
      <Snake snakeDots={this.state.snakeDots} />
      <Food dot={this.state.food} />
    </div>
  )
  }
}

export default App;
const onKeydown = (event) => {
  event = event || window.event
  switch (event.keyCode) {
    case 38:
      return 'up'
    case 40:
      return 'down'
    case 37:
      return 'left'
    case 39:
      return 'right'
    default:
    //   setDirection('right')
  }
}

export default onKeydown

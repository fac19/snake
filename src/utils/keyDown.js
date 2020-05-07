const onKeydown = (event, direction) => {
  event = event || window.event
  switch (event.keyCode) {
    case 38:
      return direction == 'down' ? 'down' : 'up'
    case 40:
      return direction == 'up' ? 'up' : 'down'
    case 37:
      return direction == 'right' ? 'right' : 'left'
    case 39:
      return direction == 'left' ? 'left' : 'right'
    default:
  }
}

export default onKeydown

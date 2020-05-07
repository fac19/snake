import React from 'react'

export default ({ dot, gamePlay }) => {
  const style = {
    left: `${dot[0]}%`,
    top: `${dot[1]}%`,
  }

  return <div className={`snake-food`} style={style}></div>
}

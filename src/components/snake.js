import React from 'react'
import './snake.css'

export default ({ snakeDots, character }) => {
  return (
    <div>
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
    </div>
  )
}

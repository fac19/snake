import React from 'react'

export default ({ snakeDots, character }) => {
  return (
    <div>
      {snakeDots.map((dot, i) => {
        const style = {
          left: `${dot[0]}%`,
          top: `${dot[1]}%`,
        }
        if (i == snakeDots.length - 1) {
          return (
            <div
              className={`snake-dot segment${i} head ${character}`}
              key={i}
              style={style}
            ></div>
          )
        } else {
          return (
            <div
              className={`snake-dot segment${i}`}
              key={i}
              style={style}
            ></div>
          )
        }
      })}
    </div>
  )
}

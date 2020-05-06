import React from 'react'
import { generateBoard } from '../utils/generateBoard'
export const SnakeBoard = () => {
  const [rows, setRows] = React.useState(generateBoard)
  const [snake, setSnake] = React.useState([{ x: 0, y: 0 }])
  const displaySnake = () => {
    const newRows = rows
    snake.forEach((segment) => {
      // newRows[segment.x][segment.y]=
    })
  }
  const displayRows = rows.map((row) => {
    return (
      <li>
        {row.map((tile) => {
          switch (tile) {
            case 'blank':
              return <div className="tile"></div>
          }
        })}
      </li>
    )
  })

  return <div>{displayRows}</div>
}

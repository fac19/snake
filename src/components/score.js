import React from 'react'
import './score.css'

const Score = ({ consts, pointScore }) => {
  return (
    <div className="score">
      <output>{consts - 1} constituents!</output>
      <output>You have {pointScore} points!</output>
    </div>
  )
}

export default Score

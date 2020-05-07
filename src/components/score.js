import React from 'react'

const Score = ({ consts, pointScore }) => {
  return (
    <div className="score">
      <output>{consts} constituents!</output>
      <output>You have {pointScore} points!</output>
    </div>
  )
}

export default Score

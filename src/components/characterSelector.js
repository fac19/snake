import React from 'react'

export default ({ gamePlay, onChange }) => {
  const visible = gamePlay ? 'hidden' : ''

  return (
    <div className={visible}>
      <h2 className="title">Choose Your Snake</h2>
      <a href="#" onClick={onChange} className="character">
        <span className="character-inside">
          <img src="https://www.thesun.co.uk/wp-content/uploads/2017/01/nintchdbpict000134758332-e1483823755938.jpg" />
          <span className="character-name">Nigel Farage</span>
        </span>
      </a>
      <a href="#" onClick={onChange} className="character">
        <span className="character-inside">
          <img src="https://assets.lbc.co.uk/2016/33/boris-johnson-6-1471423735-view-0.jpg" />
          <span className="character-name">Boris Johnson</span>
        </span>
      </a>
    </div>
  )
}

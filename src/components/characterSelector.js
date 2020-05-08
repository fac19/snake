import React from 'react'

export default ({ startGame, topScore, chooseCharacter, chooseDifficulty }) => {
  return (
    <div>
      <h2 className="title">Choose Your Snake</h2>
      <a href="#" onClick={chooseCharacter} className="character" id="nigel">
        <span className="character-inside">
          <img src="https://www.thesun.co.uk/wp-content/uploads/2017/01/nintchdbpict000134758332-e1483823755938.jpg" />
          <span className="character-name">Nigel Farage</span>
        </span>
      </a>
      <a href="#" onClick={chooseCharacter} className="character" id="boris">
        <span className="character-inside">
          <img src="https://assets.lbc.co.uk/2016/33/boris-johnson-6-1471423735-view-0.jpg" />
          <span className="character-name">Boris Johnson</span>
        </span>
      </a>
      <output class="top-score">Top score: {topScore} </output>
      <div>
        <a href="#" className="difficulty" id="stokeOnTrent" onClick={chooseDifficulty}>Stoke-on-Trent</a>
        <a href="#" className="difficulty" id="leeds" onClick={chooseDifficulty}>Leeds</a>
        <a href="#" className="difficulty" id="lambeth" onClick={chooseDifficulty}>Lambeth</a>
      </div>
      <a href="#" className="difficulty" onClick={startGame}>GO</a>
      <div>
        <h3 className="title">How To Play</h3>
        <p className="instructions">
          Using the keypad: Help your chosen snake slither across the country
          collecting votes. <br />
          As they gather votes the amount of constituencies grow. <br /> But
          time is of the essence! As your constituencies grow weary of your
          serpentine anticts they will leave. <br />{' '}
          <span className="accent">How long can you last in UK politics?</span>
        </p>
      </div>
    </div>
  )
}

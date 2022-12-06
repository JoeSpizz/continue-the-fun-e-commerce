import React from 'react'

function MiniMarketCard(game) {
  return (
    <div className='miniMarketCard'>
        <div className='miniMarketImg'>
        <img src={game.boardgame.image_url} alt="game"/>
        </div>
        {game.price ? <p>${game.price}</p> : null}
    </div>
  )
}

export default MiniMarketCard
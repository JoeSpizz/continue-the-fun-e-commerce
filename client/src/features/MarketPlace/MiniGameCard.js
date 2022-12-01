import React from 'react'

function MiniGameCard(game) {
  return (
    <div className='miniCard'>
        <img src={game.game.image_url} alt="Game Box"/>
        <div className='miniDetails'>
            <ul>
            <li>
        {game.game.name}
        </li>
        <li>
           Traditional Retail Price: ${game.game.price}
        </li>
        </ul>
        </div>
    </div>
  )
}

export default MiniGameCard
import React from 'react'
import { Button } from 'semantic-ui-react'

function MiniGameCard(game) {
    console.log(game)
  return (
    <div className='miniCard'>
        <img src={game.game.image_url} alt="Game Box"/>
        {game.game.name}
    

    <Button circular icon="add circle" color="violet"></Button>
    </div>
  )
}

export default MiniGameCard
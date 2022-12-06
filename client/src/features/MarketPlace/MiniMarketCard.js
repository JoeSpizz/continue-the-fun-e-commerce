import React from 'react'
import { useNavigate } from 'react-router-dom'

function MiniMarketCard(game) {
    const navigate = useNavigate()
    const sendToFull = ()=>{
        navigate('/BigMarketCard', {state: game})
    }
  return (
    <div className='miniMarketCard' onClick={sendToFull}>
        <div className='miniMarketImg'>
        <img src={game.boardgame.image_url} alt="game"/>
        </div>
        {game.price ? <p>${game.price}</p> : <p>Offered for Free!</p>}
    </div>
  )
}

export default MiniMarketCard
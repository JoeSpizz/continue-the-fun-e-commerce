import React from 'react'
import { useNavigate } from 'react-router-dom'

function CarouselCard(game) {
    const navigate = useNavigate()
    const sendToFull = ()=>{
        navigate('/BigMarketCard', {state: game})
    }
  return (
    <div className='carouselCard' onClick={sendToFull}>
        <div className='carouselImg'>
        <img src={game.boardgame.image_url} alt="game"/>
        </div>
        {game.price ? <p>${game.price}</p> : <p>Offered for Free!</p>}
    </div>
  )
}

export default CarouselCard
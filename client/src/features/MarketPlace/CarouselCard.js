import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CarouselCard(game) {
    const [detail, setDetail] = useState(false)
    const navigate = useNavigate()
    const sendToFull = ()=>{
        navigate('/BigMarketCard', {state: game})
    }
    const hover = ()=>{
       setDetail(!detail)
    }
  return (

    <div className='carouselCard' onClick={sendToFull} onMouseEnter={hover} onMouseLeave={hover}>
        {detail
        ? 
        <div >
            <img className='hoveredImg' src={game.boardgame.image_url} alt="game"/>
            <h3 className='hoveredText'> {game.price ? <p> {game.user.username} is selling this game for ${game.price}</p> : <p>{game.user.username} is Offering this game for Free!</p>}
        The game is in {game.condition} condition. {game.condition_detail}</h3>
            </div>
        : 
        <div className='carouselImg'>
        <img src={game.boardgame.image_url} alt="game"/>
        {game.price ? <p> {game.user.username} is selling this game for ${game.price}</p> : <p>{game.user.username} is Offering this game for Free!</p>}
    
        </div>}
        
        
    </div>
  )
}

export default CarouselCard
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import ReactShowMoreText from 'react-show-more-text'
import { Button } from 'semantic-ui-react'

function BigMarketCard() {
    const [detail, setDetail]=useState(false)
    const game = useLocation().state
    console.log(game)
   
    const detailClick = ()=>{
        setDetail(!detail)
    }
  return (
    <div>
         <a href="/">Back to Marketplace</a>
           <h1 className="gameName" >{game.title}</h1>
        <div className='fullGame'>
        <img src={game.boardgame.image_url} alt={game.title}/>
        
         <ul >
             <li>Condition: {game.condition}{game.condition_detail ? <p>Details: {game.condition_detail}</p> : null}</li>
             
        {game.price? <li>{game.user.username} is selling this game for ${game.price}</li> : null}
        <li>Players: {game.boardgame.min_players}-{game.boardgame.max_players}</li>
        <button className='detailsBtn' onClick={detailClick}>{detail? "Hide Details..." : "Game Details..."}</button>
        { detail ? 
        <React.Fragment>
        <li>Typical minimum game length: {game.boardgame.min_playtime} minutes</li>
        <li > Description:
             <ReactShowMoreText 
                 lines={5}
                 more="Show more"
                 less="Show less"
                 className="content-css"
                 expanded={false}
                 width={500}
                 truncatedEndingComponent={"... "}
                 ><p   dangerouslySetInnerHTML={{__html: game.boardgame.description}}></p></ReactShowMoreText>
             </li>
             </React.Fragment>
             : null
}
    </ul>
    <Button basic color="violet"> Add to Cart</Button>

    </div>
    </div>
  )
}

export default BigMarketCard
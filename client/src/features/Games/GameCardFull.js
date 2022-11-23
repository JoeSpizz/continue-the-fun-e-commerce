import React, { useEffect, useState } from 'react'
import ShowMoreText from "react-show-more-text";

function GameCardFull({user}) {
    const [game, setGame] = useState({})
    const [wishCheck, setWishCheck] = useState([])
    useEffect(()=>{
        let route = window.location.pathname
        fetch(`${route}`)
        .then(r=>r.json())
        .then(data=>{
            setGame(data)
            // if(game.wishlists){
            // let test = game.wishlists.filter(item=> item.user_id === user.id)
            // setWishCheck(test)
            // }
        })
    },[])

  return (
    <div >
        <h1 className="gameName" >{game.name}</h1>
        <div className='fullGame'>
        <img src={game.image_url} alt={game.name}/>
        
         <ul >
             <li > Description:
             <ShowMoreText 
                 lines={5}
                 more="Show more"
                 less="Show less"
                 className="content-css"
                 expanded={false}
                 width={500}
                 truncatedEndingComponent={"... "}
                 ><p   dangerouslySetInnerHTML={{__html: game.description}}></p></ShowMoreText>
             </li>
        <li>Retail Price: {game.price}</li>
        <li>Players: {game.min_players}-{game.max_players}</li>
        <li>Typical minimum game length: {game.min_playtime} minutes</li>
    </ul>
    </div>
    </div>
  )
}

export default GameCardFull
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ReactShowMoreText from 'react-show-more-text'
import { Button } from 'semantic-ui-react'
import swal from 'sweetalert'

function BigMarketCard({user, login}) {
    const [detail, setDetail]=useState(false)
    const game = useLocation().state
    const navigate = useNavigate()
    const detailClick = ()=>{
        setDetail(!detail)
    }
    const addToCart = ()=>{
        if (!user || Object.keys(user).length===0) {
           swal('Please log in first')
        }
        else{
        fetch('/carts',{
            method: "POST",
            headers: {
                "Content-type" : "Application/json"
            },
            body: JSON.stringify({
                marketplace_item_id : game.id
            })
        })
        .then(r=>{
            if(r.ok){
                r.json().then(swal("Added to cart"),
                    navigate('/cart'))
            }
            else{
                r.json().then(data=> alert(data))
            }
        })
    }}
  return (
    <div>
         <a href="/">Back to Marketplace</a>
           <h1 className="gameName" >{game.title}</h1>
        <div className='fullGame'>
        <img src={game.boardgame.image_url} alt={game.title}/>
         <ul className='listingPrimary'>
             <li>Condition: {game.condition}{game.condition_detail ? <p>Details: {game.condition_detail}</p> : null}</li>
             
        {game.price? <li>{game.user.username} is selling this game for ${game.price}</li> : null}
       
    </ul>
    <Button color="violet" className='addToCart' onClick={addToCart}> Add to Cart</Button>
    <button className='detailsBtn' onClick={detailClick}>{detail? "Hide Details..." : "Game Details..."}</button>
    { detail ? 
        <ul className='listingDetails'>
            <li>Players: {game.boardgame.min_players}-{game.boardgame.max_players}</li>
        <li>Average minimum game length: {game.boardgame.min_playtime} minutes</li>
        <li > Description:
             <ReactShowMoreText 
                 lines={5}
                 more="More"
                 less="Less"
                 className="content-css"
                 expanded={false}
                 width={500}
                 truncatedEndingComponent={"... "}
                 ><p   dangerouslySetInnerHTML={{__html: game.boardgame.description}}></p></ReactShowMoreText>
             </li>
             </ul>
             : null
}

    </div>
    </div>
  )
}

export default BigMarketCard
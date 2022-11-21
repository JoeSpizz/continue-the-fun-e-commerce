import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

function GameCardWish({game, publishWish}) {

    function addToWishlist(e){
        console.log(game)
        fetch('/wishlists', {
            method: "POST",
            headers: {
                "Content-type": "Application/json"
            },
            body: JSON.stringify(game)
        })
        .then(r=>r.json())
        .then(data=>publishWish(data))
    }
  return (
      <div className='gameCardWish'>
    <img className="gameCardImage" src={game.image_url} alt={game.name}/>
    <h2 >{game.name}</h2>
    <p >Expected Price: {game.price}</p>
    <p>Players: {game.min_players}-{game.max_players}</p>
    <p>Length (minimum): {game.min_playtime} minutes</p>
    <p>Product Type: {game.type}</p>
    <Button color="violet" onClick={addToWishlist}>Wishlist  <Icon name='add circle'/></Button>
   </div> 
  )
}

export default GameCardWish
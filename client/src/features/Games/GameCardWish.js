import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import swal from 'sweetalert'

function GameCardWish({game, publishWish, exists, resetWishlist}) {

    function addToWishlist(e){
    //    e.preventDefault()
    //    e.stopPropagation()
        fetch('/wishlists', {
            method: "POST",
            headers: {
                "Content-type": "Application/json"
            },
            body: JSON.stringify(game)
        })
        .then(r=> {if(r.ok){
            r.json()
            .then(data=>publishWish(data))}
            else{
                r.json().then(data=>{
                    let error = data.errors[0]
                    swal(error)})
            }
    })}

    function removeFromWishlist(e){
        e.preventDefault();
        fetch(`/wishlists/${game.id}`, {
            method: "DELETE"
        })
        .then(resetWishlist(game))
    }
  

  return (
      <div className='gameCardWish' >
    <img className="gameCardImage" src={game.image_url} alt={game.name}/>
    <div className="gameName"><h4 >{game.name}</h4>
    {exists ? <Button color="red" circular compact size="mini" icon="remove circle" onClick={removeFromWishlist}/> 
   :
    <Button color="violet" compact size="mini" onClick={addToWishlist}>Wishlist  <Icon name='add circle'/></Button>
    }
    </div>
  
   </div> 
  )
}

export default GameCardWish
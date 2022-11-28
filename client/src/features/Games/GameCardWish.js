import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Button, Icon } from 'semantic-ui-react'
import swal from 'sweetalert'

function GameCardWish({game, publishWish, resetWishlist, isList}) {
    const wishlist = useSelector(state=>(state.wishlist.entities))
    const [exist, setExist] = useState([])
    useEffect(()=>{
        let test = wishlist.filter(item=> item.name === game.name)
        setExist(test)
    }, [wishlist, game.name])
    function addToWishlist(e){
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
            })
            e.stopPropagation()
    }

    function removeFromWishlist(e){
        e.preventDefault();
        fetch(`/wishlists/${game.id}`, {
            method: "DELETE"
        })
        .then(resetWishlist(game))
        e.stopPropagation()
    }
  

  return (
      <div className='gameCardWish' >
    <img className="gameCardImage" src={game.image_url} alt={game.name}/>
    <div className="gameName"><h4 >{game.name}</h4>
    

    {isList ? <Button color="red" circular compact size="mini" icon="remove circle" onClick={removeFromWishlist}/> : null}
    {(exist.length > 0) && (isList===false) ? <Button color="grey" disabled compact size="mini">Wished</Button> 
   :null
    }
    {(exist.length === 0) && (isList===false) ? <Button color="violet" compact size="mini" onClick={addToWishlist}>Wishlist  <Icon name='add circle'/></Button> : null}
    </div>
  
   </div> 
  )
}

export default GameCardWish
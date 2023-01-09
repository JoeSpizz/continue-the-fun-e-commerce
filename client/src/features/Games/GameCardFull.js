import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import ShowMoreText from "react-show-more-text";
import { Button, Icon } from 'semantic-ui-react';
import swal from 'sweetalert';


function GameCardFull() {
    const [game, setGame] = useState({})
    const wishlist = useSelector(state=>(state.wishlist.entities))
    const [exist, setExist] = useState([])
    useEffect(()=>{
        let route = window.location.pathname
        fetch(`${route}`)
        .then(r=>r.json())
        .then(data=>{
            setGame(data)
        })
    },[])

    useEffect(()=>{
        let test = wishlist.filter(item=> item.name === game.name)
        setExist(test)
    }, [wishlist, game.name])

    function wishAddFromFull(){
        fetch('/wishlists', {
            method: "POST",
            headers: {
                "Content-type": "Application/json"
            },
            body: JSON.stringify(game)
        })
        .then(r=> {if(r.ok){
            r.json()
            .then(setExist([game]))}
            else{
                r.json().then(data=>{
                    let error = data.errors[0]
                    swal(error)})
            }
            })
    
    }
    function wishRemoveFromFull(){
       
        fetch(`/wishlists/${game.id}`, {
            method: "DELETE"
        })
        .then(setExist([]))
        
    }
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
    {(exist.length > 0) ? <Button color="red" circular compact size="mini"  onClick={wishRemoveFromFull}>UN-Wishlist <Icon name='remove circle'/></Button>
   :<Button color="violet" compact size="mini" onClick={wishAddFromFull}>Wishlist  <Icon name='add circle'/></Button>
    }
 

    </div>
  )
}

export default GameCardFull
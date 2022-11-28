import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card, Form, Input } from 'semantic-ui-react'
import swal from 'sweetalert'
import GameCardWish from '../Games/GameCardWish'
import Login from './Login'
import { fetchWishlist } from './wishlistSlice'
import { useSelector, useDispatch } from "react-redux"

function Wishlist({user,login}) {
  const[search, setSearch]=useState("")
  const[searchedGames, setSearchedGames] = useState(null)
  const[wishlist, setWishlist] = useState([])
  const dispatch = useDispatch()
  const wishTest = useSelector(state=>(state.wishlist.entities))
let navigate = useNavigate()
  useEffect(()=>{
    dispatch(fetchWishlist())
  }, [dispatch])
 
  console.log(wishTest)

  function handleType(e){
    setSearch(e.target.value)
  }
function handleSubmit(e){
  e.preventDefault()
  fetch(`https://api.boardgameatlas.com/api/search?name=${search}&limit=100&pretty=true&client_id=cXouSHFcOH`)
  .then(r=>{
    if(r.ok){
      r.json().then(data=>{
        if (data.games.length > 0) {
          setSearchedGames(data)
        }
        else{
          swal("No Games Found. Please check for Typos")
        }
      })
    }
    else{
      swal("API Response Error: Contact Admin")
    }
  })
}
function closeSearch(){
  setSearchedGames(null)
}
function publishWish(game){
  dispatch({
    type: "wishlistAdded",
    action: game
  })
}
function resetWishlist(game){
  let newWishlist = wishlist.filter(item=> item.id !== game.id)
  setWishlist(newWishlist)

}
function cardClick(game){
  //Check if the game exists in database HERE. Post request with game AS if it was a wishlist add?
  fetch(`/boardgames`, {
    method: "POST",
    headers: {
        "Content-type": "Application/json"
    },
    body: JSON.stringify(game)
})
.then(r=> {if(r.ok){
  navigate(`/boardgames/${game.name}`)}
  else{
    swal("something went wrong")}
  })
}
  if (!user) return <Login login={login}/>
  return (
    <div>
      <h1>Wishlist</h1>
      <Card.Group>
      {wishTest.map(game=><div onClick={()=>cardClick(game)}><GameCardWish game={game} key={game.id} exists={true} resetWishlist={resetWishlist}/></div>)}
      </Card.Group>
      <h3> Add a game, we'll notify you when it's available!</h3>
      <Form inverted onSubmit={handleSubmit}>
        <Form.Group>
        <Form.Field onChange={handleType} type="text" control={Input} placeholder="Search for Game" icon="searchengin"/>
        <Button type="submit">Find</Button>
        <Button onClick={closeSearch}>Close</Button>
        </Form.Group>
      </Form>
      
      {searchedGames ? 
      <Card.Group > 
        {searchedGames.games.map(game=><div 
        // onClick={()=>cardClick(game)}
        ><GameCardWish game={game} key={game.id} publishWish={publishWish} exists={false}/></div>)}
        </Card.Group>
        : null}
        
    </div>
  )
}

export default Wishlist
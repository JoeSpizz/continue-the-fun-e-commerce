import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Form, Grid, Input } from 'semantic-ui-react'
import MiniMarketCard from './MiniMarketCard'

function Home() {
  const [market, setMarket] = useState([])
  const [search, setSearch] = useState("")
  const navigate = useNavigate()
  // fetch all games from backend database.
  // take data and create games cards based on pricing
  useEffect(()=>{
    fetch('/marketplace_items')
    .then(r=>r.json())
    .then(data=>setMarket(data))
  }, [])
  let offer = market.filter(game=>game.price === null)
  let sale = market.filter(game=> game.price!== null)

const handleType = (e)=>{
  setSearch(e.target.value)
}
const handleSubmit= (e)=>{
  e.preventDefault()
  navigate('/marketplace_search', {state: search})
}
console.log(offer)
  return (
    <div>
      <h1>Find Your Next Fun</h1>
      <Form inverted onSubmit={handleSubmit}>
        <Form.Group>
        <Form.Field onChange={handleType} type="text" control={Input} placeholder="Search for Game" icon="searchengin"/>
        <Button type="submit">Find</Button>
        </Form.Group>
      </Form>

        <h2> For Sale:</h2>
        <Grid>
          {
        sale.map(game=><MiniMarketCard {...game} key={game.id} />)
        }
         </Grid>
          <h2> Free (shipping sometimes required):</h2>
          <Grid>
          {offer.map(game=><MiniMarketCard {...game} key={game.id}/>)}
          </Grid>
          </div>
  )
}

export default Home
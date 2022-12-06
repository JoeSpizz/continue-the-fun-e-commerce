import React, { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Form, Input, Message } from 'semantic-ui-react'
import MiniMarketCard from './MiniMarketCard'

function MarketplaceSearch() {
    const state = useLocation()
    const [search, setSearch] = useState(state.state)
    const [market, setMarket] = useState([])
    const [found, setFound] = useState([])
 

    useEffect(()=>{
        fetch('/marketplace_items')
        .then(r=>r.json())
        .then(data=>setMarket(data))
      }, [])
      useEffect(()=>{
        setFound(market.filter(game=> game.title.toLowerCase().includes(search.toLowerCase()))
      )}, [market,search])
    //   let found = market.filter(game=> game.title.toLowerCase().includes(search.toLowerCase()))
   
    const handleType = (e)=>{
        setSearch(e.target.value)
      }
  return (
    <div>
        <a href="/">Back to Marketplace</a>
        <h2>There's always more fun to be had!</h2>
         <Form inverted>
        <Form.Group>
        <Form.Field onChange={handleType} type="text" control={Input} placeholder="Search for Game" icon="searchengin" value={search}/>
        </Form.Group>
      </Form>
      {found.length>0 ? found.map(game=> <MiniMarketCard {...game} key={game.id}/>): <Message negative as={Link} to={'/wishlist'}>We couldn't find a match amongst currently listed games. Would you like to search for and add this game to your wishlist?</Message>}
    </div>
  )
}

export default MarketplaceSearch
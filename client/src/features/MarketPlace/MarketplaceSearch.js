import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Button, Form, Input } from 'semantic-ui-react'

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
         <Form inverted>
        <Form.Group>
        <Form.Field onChange={handleType} type="text" control={Input} placeholder="Search for Game" icon="searchengin" value={search}/>
        <Button type="submit">Find</Button>
        {/* <Button onClick={closeSearch}>Close</Button> */}
        </Form.Group>
      </Form>
      {found.length>0 ? found.map(game=> game.title): "No games found, search to add a game to wishlist?"}
    </div>
  )
}

export default MarketplaceSearch
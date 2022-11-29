import React, { useState } from 'react'
import { Form, Button, Input } from 'semantic-ui-react'
import swal from 'sweetalert'
import MiniGameCard from './MiniGameCard'

function OfferGame() {
    const [search, setSearch] = useState("")
    const [found, setFound] = useState(null)

    // Functions to search for a game from Game API
    const handleSubmit = ()=>{
        fetch(`https://api.boardgameatlas.com/api/search?name=${search}&limit=100&pretty=true&client_id=cXouSHFcOH`)
        .then(r=>{
          if(r.ok){
            r.json().then(data=>{
              if (data.games.length > 0) {
                setFound(data)
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
        console.log(search)
    }
    const handleType= (e)=>{
        setSearch(e.target.value)
    }

  return (
    <div>
        <Form inverted onSubmit={handleSubmit}>
        <Form.Group>
        <Form.Field onChange={handleType} type="text" control={Input} placeholder="Search for Game" icon="searchengin"/>
        <Button type="submit">Find</Button>
        {/* <Button onClick={closeSearch}>Close</Button> */}
        </Form.Group>
      </Form>

      <div>
          {found? found.games.map(item=><MiniGameCard game={item} key={item.id}/>): null}
      </div>
    </div>

  )
}

export default OfferGame
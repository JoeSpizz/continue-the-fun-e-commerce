import React, { useState } from 'react'
import { Form, Button, Input, Card } from 'semantic-ui-react'
import swal from 'sweetalert'
import Login from '../Login_User/Login'
import MiniGameCard from './MiniGameCard'


//This component handles logic for both Offering and Selling a game. 

function OfferGame({user, login}) {
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
    }
    const handleType= (e)=>{
        setSearch(e.target.value)
    }
if (!user || Object.keys(user).length===0) return <Login login={login}/>
  return (
    <div className='listingPage'>
        <Form inverted onSubmit={handleSubmit} id='listingForm'>
        <Form.Group>
        <Form.Field onChange={handleType} type="text" control={Input} placeholder="Game Name..." icon="searchengin"/>
        <Button type="submit">Find</Button>
        </Form.Group>
      </Form>

      <div id="listingCards">
          {found? found.games.map(item=><div><MiniGameCard game={item} key={item.id}/></div>)
          :
          <Card id="offerIntro" >
          <Card.Header >Search And Select</Card.Header>
          <Card.Content >Don't Worry, you'll customize the listing next.</Card.Content>
          </Card>
           }
      </div>
      <h1 id="listingTitle"> Start your listing</h1>
    </div>

  )
}

export default OfferGame
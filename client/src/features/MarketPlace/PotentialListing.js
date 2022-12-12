import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Form, Input, Popup, Radio, TextArea } from 'semantic-ui-react'
import swal from 'sweetalert'

function PotentialListing() {
    const[game, setGame]=useState({})
    const[listing, setListing] =useState({})
    const[select, setSelect]=useState("")
    const navigate = useNavigate()
    let route = window.location.pathname
   const isItOffer = route.charAt(1)
    useEffect(()=>{
        fetch(`${route}`)
        .then(r=>r.json())
        .then(data=>{
            setGame(data)
            let test = window.location.pathname.charAt(1)
            if(test === 'o'){
                setListing({
                    title: data.name,
                    price: null,
                    condition: "decent",
                    condition_detail: "",
                    boardgame_id: game.id,
                    image : game.image_url
                })
            }
            else {setListing({
                title: data.name,
                price: (data.price)/2,
                condition: "decent",
                condition_detail: "",
                boardgame_id: game.id,
                image : game.image_url
            })}
        })
        // swal("Any listed game MUST contain all of the pieces.")
    },[route, game.id, game.image_url])

    const listGame =(e)=>{
        e.preventDefault()
    //   send listing to Ruby. if statement checks if we're offering vs selling by checking route. Then alters price if needed.
      fetch('/marketplace_items', {
          method: "POST",
          headers:{
              "Content-type": "Application/json"
          },
          body: JSON.stringify(
            listing
          )
      })
      .then (r=>{
        if (r.ok) {
        swal("Thank you for listing with Continue the Fun")
            navigate('/gamecenter')
        }
        else{
            r.json().then(data=>swal(data))
        }
    })
    }
    
    const listingChange = (e)=>{
        let key = e.target.name
        let value = e.target.value
            parseInt(value)
            setListing({...listing,
            [key]: value})
    }
 

    const handleChange = (e, { value }) => {
        setSelect(value)
        setListing({...listing,
        condition: value})
    }
  return (
    <div >
      <div className='potentialListing'>
        <img src={game.image_url} alt={game.name}/>
        <Form inverted onSubmit={listGame}>
           <Popup trigger={
        <Form.Field 
        label="Title" inline
            placeholder={game.name}
            name="title"
            control={Input}
            value={listing.title}
            onChange={listingChange}
        />
           }>
               <Popup.Header>Title</Popup.Header>
               <Popup.Content>By default the listing will be the game title, you can add "tags" or other keywords. We do NOT suggest altering the game's name.</Popup.Content>
           </Popup>
            {isItOffer ==="o" ? null :
            <Form.Group>
        <Popup trigger={
        <Form.Field
            control={Input}
            inline
            name="price"
            input="number"
            label="Price $"
            value={`${(listing.price)}`}
            onChange={listingChange}
        />
        }>
            <Popup.Content>By default the price entered is half the expected retail value of a new copy of the game</Popup.Content>
        </Popup>
       
            </Form.Group>
            }
           <Form.Group inline>
          <label>Condition</label>
          <Form.Field
            control={Radio}
            label='Like New'
            value='Like New'
            checked={select === 'Like New'}
            onChange={handleChange}
          />
          <Form.Field
            control={Radio}
            label='Good'
            value='Good'
            checked={select==='Good'}
            onChange={handleChange}
          />
          <Form.Field
            control={Radio}
            label='Decent'
            value='Decent'
            checked={select === 'Decent'}
            onChange={handleChange}
          />
            <Form.Field
            control={Radio}
            label='Sub-Par'
            value='Sub-par'
            checked={select === 'Sub-par'}
            onChange={handleChange}
          />
          <Form.Field
            control={Radio}
            label='Bad'
            value='Bad'
            checked={select === 'Bad'}
            onChange={handleChange}
          />
        </Form.Group>
            <Form.TextArea
                control={TextArea}
                label="Condition Detail" inline
                name="condition_detail"
                value={`${listing.condition_detail}`}
                placeholder="List specific details about the games condition"
                onChange={listingChange}
            />
            <Button type="submit">Create Listing!</Button>
        </Form>
        </div>
    </div>
  )
}

export default PotentialListing
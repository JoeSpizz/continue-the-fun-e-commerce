import React, { useEffect, useState } from 'react'
import { Form, Input, Popup, Radio } from 'semantic-ui-react'
import swal from 'sweetalert'

function PotentialListing() {
    const[game, setGame]=useState({})
    const[listing, setListing] =useState({})
    const[select, setSelect]=useState("")
    let route = window.location.pathname
   const isItOffer = route.charAt(1)
    useEffect(()=>{
        fetch(`${route}`)
        .then(r=>r.json())
        .then(data=>{
            setGame(data)
            setListing({
                title: data.name,
                price: (data.price)/2,
                condition: "decent",
                conditionDetails: ""
            })
        })
        // swal("Any listed game MUST contain all of the pieces.")
    },[route])

    const listingChange = (e)=>{
        let key = e.target.name
        let value = e.target.value
            parseInt(value)
            setListing({...listing,
            [key]: value})
    }
    console.log(listing)

    const handleChange = (e, { value }) => {
        setSelect(value)
        setListing({...listing,
        condition: value})
    }
  return (
    <div >
      <div className='potentialListing'>
        <img src={game.image_url} alt={game.name}/>
        <Form inverted >
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
            value='like_new'
            checked={select === 'like_new'}
            onChange={handleChange}
          />
          <Form.Field
            control={Radio}
            label='Good'
            value='good'
            checked={select==='good'}
            onChange={handleChange}
          />
          <Form.Field
            control={Radio}
            label='Decent'
            value='decent'
            checked={select === 'decent'}
            onChange={handleChange}
          />
            <Form.Field
            control={Radio}
            label='Sub-Par'
            value='subpar'
            checked={select === 'subpar'}
            onChange={handleChange}
          />
          <Form.Field
            control={Radio}
            label='Bad'
            value='bad'
            checked={select === 'bad'}
            onChange={handleChange}
          />
        </Form.Group>
            <Form.Field
                control={Input}
                label="Condition Details" inline
                name="conditionDetails"
                value={`${listing.conditionDetails}`}
                placeholder="List specific details about the games condition"
                onChange={listingChange}
            />
        </Form>
        </div>
    </div>
  )
}

export default PotentialListing
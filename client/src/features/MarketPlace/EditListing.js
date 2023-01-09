import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button, Form, Input, Popup, Radio, TextArea } from 'semantic-ui-react'
import swal from 'sweetalert'

function EditListing() {
const navigate = useNavigate()
const location = useLocation()
const game = location.state
const[listing, setListing]=useState({
    title : game.title,
    price : game.price,
    condition : game.condition,
    condition_detail : game.condition_detail
})
const[select, setSelect]=useState(game.condition)
const editGame = ()=>{
    fetch(`/marketplace_items/${game.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type" : "Application/json"
        },
        body: JSON.stringify(listing)
    })
    .then(r=>{
        if(r.ok){
            r.json().then(swal({
                  title: "Listing Updated",
                  text: "You can view the listing on the Marketplace or go back to all your listings:",
                  icon: "success",
                  buttons:["Go Back", "View Listing"]
                })
                .then((whichRoute) => {
                  if (whichRoute) {
                    swal("Your Listing on the Marketplace");
                navigate('/BigMarketCard', {state: game})
                  } else {
                    swal("Your Listings");
                navigate('/my_listings')
                  }
                }))
        }
    })
}
const detailUpdate = (e)=>{
    let key = e.target.name
    let value = e.target.value
        parseInt(value)
        setListing({...listing,
        [key]: value})
}
const updateCondition = (e, { value })=>{
    setSelect(value)
    setListing({...listing,
    condition: value})
}
return (
    <div >
        <h1 id="editHeader"> Editing <em>{game.title}</em></h1>
        <div className='editListing'>
         <img src={game.image_url} alt={game.name}/>
        <Form inverted onSubmit={editGame}>
           <Popup trigger={
        <Form.Field 
        label="Title" inline
            placeholder={listing.name}
            name="title"
            control={Input}
            value={listing.title}
            onChange={detailUpdate}
        />
           }>
               <Popup.Header>Title</Popup.Header>
               <Popup.Content>By default the listing will be the game title, you can add "tags" or other keywords. We do NOT suggest altering the game's name.</Popup.Content>
           </Popup>
           
            <Form.Group>
        <Popup trigger={
        <Form.Field
            control={Input}
            inline
            name="price"
            input="number"
            label="Price $"
            placeholder="Leave Blank For Free"
            value={`${(listing.price)}`}
            onChange={detailUpdate}
        />
        }>
            <Popup.Content>By default the price entered is half the expected retail value of a new copy of the game</Popup.Content>
        </Popup>
       
            </Form.Group>
           <Form.Group inline>
          <label>Condition</label>
          <Form.Field
            control={Radio}
            label='Like New'
            value='Like New'
            checked={select === 'Like New'}
            onChange={updateCondition}
          />
          <Form.Field
            control={Radio}
            label='Good'
            value='Good'
            checked={select==='Good'}
            onChange={updateCondition}
          />
          <Form.Field
            control={Radio}
            label='Decent'
            value='Decent'
            checked={select === 'Decent'}
            onChange={updateCondition}
          />
            <Form.Field
            control={Radio}
            label='Sub-Par'
            value='Sub-par'
            checked={select === 'Sub-par'}
            onChange={updateCondition}
          />
          <Form.Field
            control={Radio}
            label='Bad'
            value='Bad'
            checked={select === 'Bad'}
            onChange={updateCondition}
          />
        </Form.Group>
            <Form.TextArea
                control={TextArea}
                label="Condition Detail" inline
                name="condition_detail"
                value={`${listing.condition_detail}`}
                placeholder="List specific details about the games condition"
                onChange={detailUpdate}
            />
            <Button type="submit">Update Listing!</Button>
        </Form>
        </div>
    </div>
  )
}

export default EditListing
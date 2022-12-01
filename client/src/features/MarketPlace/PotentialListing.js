import React, { useEffect, useState } from 'react'
import ShowMoreText from 'react-show-more-text'
import { Form, Input, Message, Select } from 'semantic-ui-react'

function PotentialListing() {
    const[game, setGame]=useState({})
    const[listing, setListing] =useState({})
    useEffect(()=>{
        let route = window.location.pathname
        console.log(route)
        fetch(`${route}`)
        .then(r=>r.json())
        .then(data=>{
            setGame(data)
            setListing({
                title: data.name,
                price: (data.price)/2,
                condition: "decent"
            })
        })
    },[])

    const listingChange = (e)=>{
        let key = e.target.name
        setListing({
            [key]: e.target.value})
    }
    console.log(listing)
    const selecting=(e)=>{
        console.log(e.target.name)
    }
  return (
    <div className='potentialListing'>
        <Form inverted >
            <Message 
            header='Title'
            list={[
                'By default the listing will be the game title, you can add "tags" or other keywords. We do NOT suggest altering the game name.'
            ]}
            />
        <Form.Field 
            placeholder={game.name}
            name="title"
            control={Input}
            value={listing.title}
            onChange={listingChange}
        />
        <img src={game.image_url} alt={game.name}/>
        <Form.Field
            control={Input}
            inline
            name="price"
            label="$"
            value={`${(listing.price)}`}
            onChange={listingChange}
        />
        <Message 
            header='By default the price entered above is half the normal expected retail value'
            />
            <Form.Field
            control={Select}
            name="Condition"
            options={[
                {text: "Like New", title: "like_new"},
                {text: "Good", title: "good"},
                {text: "Decent", title: "decent"},
                {text: "Sub-Par", title: "subpar"},
                {text: "Bad", title: "bad"}
            ]}
            placeholder="Condition"
            onChange={selecting}
            />
        </Form>
        <div className='fullGame'>
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
    </div>
  )
}

export default PotentialListing
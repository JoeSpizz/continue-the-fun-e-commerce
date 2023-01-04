import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Form, Grid, Input } from 'semantic-ui-react'
import MiniMarketCard from './MiniMarketCard'
import Slider from "react-slick";
import CarouselCard from './CarouselCard';
import MiniMarketCardOffer from './MiniMarketCardOffer';

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
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3500,
    autoplay: true,
    arrows: true
  };

const handleType = (e)=>{
  setSearch(e.target.value)
}
const handleSubmit= (e)=>{
  e.preventDefault()
  navigate('/marketplace_search', {state: search})
}

let carousel = market.sort(() => .5 - Math.random()).slice(0,5)
  return (
    <div>
      <div className='homeHeader'>
      <img src="https://res.cloudinary.com/doqo7su1s/image/upload/v1672766746/CTF_Logo_Light_otpioj.png" alt="Continue the Fun!"/>
      
    <div className='sliderContainer'>
      <Slider {...settings}>
     {carousel.map(game=>{
       return(
         <div className='carousel'>
           <CarouselCard {...game} key={game.id}/>
         </div>
       )
     })}
    </Slider>
    </div>
    <Form inverted onSubmit={handleSubmit}>
      <Form.Group className='homeSearch'>
        <Form.Field onChange={handleType} type="text" control={Input} placeholder="Search for Game" icon="searchengin"/>
        <Button type="submit">Find</Button>
        </Form.Group>
      </Form>
      </div>
      <div className='listedItems'>
        <h3> For Sale:</h3>
        <Grid stackable doubling columns={4}>
          {
        sale.map(game=><Grid.Column><MiniMarketCard {...game} key={game.id} /></Grid.Column>)
        }
         </Grid>
         
          <h3> Free (shipping required  ):</h3>
          <Grid columns={3} doubling stackable>
          {offer.map(game=><Grid.Column><MiniMarketCardOffer {...game} key={game.id}/></Grid.Column>)}
          </Grid>
          </div>
          </div>
  )
}

export default Home
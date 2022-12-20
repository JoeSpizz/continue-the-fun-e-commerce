import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Form, Grid, Input } from 'semantic-ui-react'
import MiniMarketCard from './MiniMarketCard'
import Slider from "react-slick";

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
      <h1>It is time to <strong> Continue the Fun</strong></h1>
      <Form inverted onSubmit={handleSubmit}>
        <Form.Field id="homeSearch" onChange={handleType} type="text" control={Input} placeholder="Search for Game" icon="searchengin"/>
        <Button type="submit">Find</Button>
      </Form>
      </div>
    <div className='sliderContainer'>
      <Slider {...settings}>
     {carousel.map(game=>{
       return(
         <div className='carousel'>
           <MiniMarketCard {...game} key={game.id}/>
         </div>
       )
     })}
    </Slider>
    </div>
    <br></br>

        <h3> For Sale:</h3>
        <Grid>
          {
        sale.map(game=><MiniMarketCard {...game} key={game.id} />)
        }
         </Grid>
          <h3> Free (shipping required  ):</h3>
          <Grid>
          {offer.map(game=><MiniMarketCard {...game} key={game.id}/>)}
          </Grid>
          </div>
  )
}

export default Home
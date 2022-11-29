import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from 'semantic-ui-react'
import Login from './Login'

function GameCenter({user, login}) {
const navigate = useNavigate()
  const sellGame = ()=>{
    navigate('/sellGame')
  }
  const offerGame = ()=>{
    navigate('/offerGame')
  }

  if (!user || Object.keys(user).length===0) return <Login login={login}/>
  return (
    <div id="gamecenter" style={{ 
      backgroundImage: `url("https://res.cloudinary.com/doqo7su1s/image/upload/v1669141704/GameCenter_Background_gtwzn8.jpg")` 
    }}>
    <img src="https://res.cloudinary.com/doqo7su1s/image/upload/v1669141700/Game_Center_Header_Good_mlwpbz.jpg" alt="Gamecenter Welcome"/>
      <Card id="listCard" >
        <Card.Header id="listCardHead">Ready to Continue the Fun?</Card.Header>
        <Card.Content id="listCardContent">Whether you decide to <strong>sell</   strong> your game or offer it for <em>free</em>, we make it easy for your old games to have a new life!</Card.Content>
         <div class="ui buttons">
          <button class="ui positive button" onClick={sellGame} >Sell</button>
          <div class="or"></div>
          <button class="ui primary button" onClick={offerGame} >Offer</button>
         </div>
      </Card>

      <div id="listedGames">
        {/* fetch games currently listed. (marketplace Game. will have to create). 
            Marketplace item has a Game_id (belongs to) price, condition, 
            set into listedGames, map through listedGames to publish GameCenter mini-cards. Click on a mini-card bring up the option to edit details.
            */}

      </div>




      </div>
  )
}

export default GameCenter

// From the game center a user will search and add a game for sale or for free
// When this game is selected/added we need to create a Boardgame IF one doesn't exist, create a Marketplace item every time. This section should also have sold/bought history? 
import React from 'react'
import { Button, Container } from 'semantic-ui-react'
import Login from './Login'

function GameCenter({user, login}) {


  if (!user) return <Login login={login}/>
  return (
    <div id="gamecenter" style={{ 
      backgroundImage: `url("https://res.cloudinary.com/doqo7su1s/image/upload/v1669141704/GameCenter_Background_gtwzn8.jpg")` 
    }}>
    <img src="https://res.cloudinary.com/doqo7su1s/image/upload/v1669141700/Game_Center_Header_Good_mlwpbz.jpg" alt="Gamecenter Welcome"/>
      <Container>
        <h2>Make Some Money by selling with CTF</h2>
        <Button color="violet">List a Game</Button>
      </Container>
      </div>
  )
}

export default GameCenter

// From the game center a user will search and add a game for sale or for free
// When this game is selected/added we need to create a Boardgame IF one doesn't exist, create a Marketplace item every time. This section should also have sold/bought history? 
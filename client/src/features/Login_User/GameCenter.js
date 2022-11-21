import React from 'react'
import Login from './Login'

function GameCenter({user, login}) {


  if (!user) return <Login login={login}/>
  return (
    <div>
      <h1>GameCenter</h1>
      
      </div>
  )
}

export default GameCenter
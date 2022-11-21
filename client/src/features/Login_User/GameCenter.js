import React from 'react'
import Login from './Login'

function GameCenter({user, login}) {
  if (!user) return <Login login={login}/>
  return (
    <div>GameCenter</div>
  )
}

export default GameCenter
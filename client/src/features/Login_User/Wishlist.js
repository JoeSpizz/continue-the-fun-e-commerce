import React from 'react'
import Login from './Login'

function Wishlist({user,login}) {
  if (!user) return <Login login={login}/>
  return (
    <div>Wishlist</div>
  )
}

export default Wishlist
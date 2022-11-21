import React from 'react'
import Login from './Login';

function UserProfile({user, login}) {
  if (!user) return <Login login={login}/>
  return (
    <div>
  
      <h1>{user}'s Profile</h1>
     
      </div>
  )
}

export default UserProfile
import React from 'react'
import Login from './Login';

function UserProfile({user, login}) {
  if (!user) return <Login login={login}/>
  return (
    <div>
  
      <h1>{user.username}'s Profile</h1>
      <ul>
        <li>Username: {user.username}</li>
        <li>Address: {user.address}</li> 
        <li>Email: {user.email}</li>
      </ul>
     
      </div>
  )
}

export default UserProfile
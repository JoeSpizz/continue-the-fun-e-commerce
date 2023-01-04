import React from 'react'
import Login from '../Login_User/Login'

function SellGame({user,login}) {


    if (!user || Object.keys(user).length===0) return <Login login={login}/>
  return (
    <div>SellGame</div>
  )
}

export default SellGame
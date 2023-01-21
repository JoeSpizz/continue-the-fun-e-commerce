import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { button, Form, Input } from 'semantic-ui-react';
import swal from 'sweetalert';
import Login from './Login';

function UserProfile({user, login}) {
  const navigate = useNavigate()
  const [profile, setProfile]= useState({
    username : user.username,
    street : user.address,
    zipcode : user.zipcode,
    email : user.email})
  useEffect(()=>{
  setProfile({
    username : user.username,
    street : user.address,
    zipcode : user.zipcode,
    email : user.email
  })
  }, [user])

const updateProfile = (e)=>{
  setProfile({
    ...profile,
    [e.target.name] : e.target.value
  })
}
const submitUpdate =()=>{
  fetch(`/users/${user.id}`,{
    method: "PATCH",
    headers:{
      "Content-type" : "Application/json"
    },
    body: JSON.stringify(profile)
  })
  .then(r=>{
    if(r.ok){
      r.json().then(swal("Profile Updated!"))
    }
    else(swal("error"))
  })
}
const deleteProfile = ()=>{
  swal({
      title: "Delete Profile",
      text: "Deleting a profile is PERMANENT and will immediately remove any listings you've put up on the marketplace. This CANNOT be undone.",
      icon: "warning",
      buttons:["Cancel", "Delete Forever"]
    })
    .then((whichRoute) => {
      if (whichRoute) {
        swal("Profile Deleted");
        fetch(`/users/${user.id}`,{
          method: "DELETE"
        })
        .then(r=>{
          if(r.ok){
            navigate('/')
          }

        })
   
      } else {
        swal("Cancelled");
  
      }
    })
}
  
if (!user || Object.keys(user).length===0) return <Login login={login}/>
  return (
    <div id="profile">
            <img src="https://res.cloudinary.com/doqo7su1s/image/upload/v1672766746/CTF_Logo_Light_otpioj.png" alt="Continue the Fun!"/>

      <h1>{profile.username}'s Profile</h1>
      <h3> Check out your <a href="/wishlist">Wishlist</a>, or <a href="/gamecenter">list a game</a> to help Continue the Fun</h3>
      <div className='profileGrid'>
      <div id="formC3R1">
        <Form inverted ><Form.Group>
          <Form.Field control={Input} type="text" name="username" value={profile.username} onChange={updateProfile}/> 
          </Form.Group> </Form> 
          </div>

          <div id="formC3R2">
        <Form><Form.Group><Form.Field control={Input} type="text" name="address" value={profile.street} onChange={updateProfile}/><Form.Field control={Input} type="number" placeholder="zipcode" name="zipcode" value={profile.zipcode} onChange={updateProfile}/> </Form.Group> </Form>
        </div>
        <div id="formC3R3">
        <Form><Form.Group><Form.Field control={Input} type="email" name="email" value={profile.email} onChange={updateProfile}/> </Form.Group> </Form>
  </div>
  
          <div id="labelC2R1">
          <h3>Username</h3>
          </div>
          <div id="labelC2R2">
          <h3>Street Address and Zip Code</h3>
          </div>
          <div id="labelC2R3">
          <h3>E-mail</h3>
        </div>
        </div>
        <button id="saveProfile" onClick={submitUpdate}>Save Profile</button>
        <button className='detailsBtn' id="deleteProfile" onClick={deleteProfile}> Delete Profile</button>

      </div>
  )
}

export default UserProfile
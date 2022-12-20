import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { button, Form, Input } from 'semantic-ui-react';
import swal from 'sweetalert';
import Login from './Login';

function UserProfile({user, login}) {
  const navigate = useNavigate()
  const [editName, setEditName]= useState(false)
  const [editAddress, setEditAddress]= useState(false)
  const [editEmail, setEditEmail]= useState(false)
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

const editNameStatus=()=>{
  setEditName(!editName)
}
const editAddressStatus=()=>{
  setEditAddress(!editAddress)
}
const editEmailStatus=()=>{
  setEditEmail(!editEmail)
}
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
  setEditAddress(false)
  setEditEmail(false)
  setEditName(false)
}
const deleteProfile = ()=>{
  swal({
      title: "Delete Profile",
      text: "Deleting a profile is permanent and will immediately remove any listings you've put up on the marketplace. This CANNOT be undone.",
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
      <h1>{profile.username}'s Profile</h1>
      <div id="FormContainer">
        {editName ? <Form className='profileSection'><Form.Group>
          <Form.Field control={Input} type="text" name="username" value={profile.username} onChange={updateProfile}/> 
          <button className='profileBtn' onClick={submitUpdate}>Update</button></Form.Group> </Form> 
          :<p className='profileSection'>Username: {profile.username} 
          <button color='violet' className='profileBtn' onClick={editNameStatus}>Edit</button></p>}

        {editAddress ?<Form><Form.Group><Form.Field control={Input} type="text" name="address" value={profile.street} onChange={updateProfile}/><Form.Field control={Input} type="number" placeholder="zipcode" name="zipcode" value={profile.zipcode} onChange={updateProfile}/> <button onClick={submitUpdate}>Update</button></Form.Group> </Form> :<p>Address: {profile.street}, {profile.zipcode} <button  className='profileBtn' color='violet' onClick={editAddressStatus}>Edit</button></p> }

        { editEmail?<Form><Form.Group><Form.Field control={Input} type="email" name="email" value={profile.email} onChange={updateProfile}/> <button className='profileBtn' onClick={submitUpdate}>Update</button></Form.Group> </Form>:<p>Email: {profile.email} <button className='profileBtn' color='violet' onClick={editEmailStatus}>Edit</button></p>}
        </div>
        <button className='detailsBtn' id="deleteProfile" onClick={deleteProfile}> Delete Profile</button>
     
      </div>
  )
}

export default UserProfile
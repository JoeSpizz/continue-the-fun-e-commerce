import React, { useState } from 'react'
import {Button, Form, Input} from 'semantic-ui-react'

function Login({login}) {
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const [create, setCreate] = useState(false)
const [newUser, setNewUser] = useState({})
// sets login info in state
function handleChange(e){
    if (e.target.id === "userName"){
        setUsername(e.target.value)
    }
    else{
        setPassword(e.target.value)
    }
}
// logs in, returns errors from Rails if unsuccessful
function attemptLogin(e){
    e.preventDefault()
    console.log(username + password)
    // fetch('/login', {
    //     method: "POST",
    //     headers: {"Content-type" : "Application/json"},
    //     body: JSON.stringify({
    //         username : username, 
    //         password : password}
    //     )
    // })
    // .then (r=>{
    //     if (r.ok) {
    //     r.json().then(data=>login(data.username))
    //     }
    //     else{
    //         r.json().then(data=>alert(data.errors))
    //     }})
}
// along with ternary in the Return this sets visiblity of login vs create user form
function toggleCreateUserForm(e){
    setCreate(!create)
}
// sets parameters for new form
function handleNewUserInput (e){
    const value = e.target.value
    setNewUser({...newUser, 
        [e.target.name] : value
    })
}
function createUser(e){
    e.preventDefault()
    console.log(newUser)
}

  return (
    <div>
        {/* What follow is a ternary for the login vs create user form */}
        { create 
        ?
        // What you will see this user creation form only if you select "create new user"
        <div className='create'>
            <Form onSubmit={createUser}>
                <Form.Group>
                    <Form.Field
                    id="newUsername"
                    control={Input}
                    label="Desired Username"
                    name="username"
                    placeholder="Desired Username"
                    onChange={handleNewUserInput}
                    />
                     <Form.Field
                    id="newPassword"
                    control={Input}
                    label="Desired Password"
                    placeholder="Desired Password"
                    name="password"
                    onChange={handleNewUserInput}
                    />
                </Form.Group>
                <Form.Field 
            id="create-button"
            control={Button}
            content="Create"
            label='Label with htmlFor'
            color="green"
            />
            </Form>

        <Button color="linkedin" onClick={toggleCreateUserForm}>Back to Login</Button>
        </div> 
        : 
        // The login form that you will see by default
        <div className="login">
        <h1>Log in to Continue the Fun</h1>
        <Form onSubmit={attemptLogin}>
            <Form.Group>
                <Form.Field
                    id="userName"
                    control={Input}
                    label="Enter Username"
                    placeholder="Username"
                    onChange={handleChange}
                    />
                <Form.Field
                    id="password"
                    control={Input}
                    label="Enter Password"
                    placeholder="Password"
                    type="password"
                    onChange={handleChange}
                    />
            </Form.Group>
            <Form.Field 
            id="login-button"
            control={Button}
            content="Login"
            label='Label with htmlFor'
            color="green"
            />
        </Form>
        <Button color="linkedin" onClick={toggleCreateUserForm}>Create New User</Button>
        </div>}
    </div>
  )
}

export default Login
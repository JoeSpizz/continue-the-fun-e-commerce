import React, { useState } from 'react'
import {Button, Form, Input} from 'semantic-ui-react'
import swal from 'sweetalert'

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
    fetch('/login', {
        method: "POST",
        headers: {"Content-type" : "Application/json"},
        body: JSON.stringify({
            username : username, 
            password : password}
        )
    })
    .then (r=>{
        if (r.ok) {
        r.json().then(data=>login(data))
        }
        else{
            r.json().then(data=>alert(data.errors))
        }})
}
// along with ternary in the Return this sets visiblity of login vs create user form
function toggleCreateUserForm(e){
    setCreate(!create)
}
// sets ALL parameters for new form
function handleNewUserInput (e){
    const value = e.target.value
    setNewUser({...newUser, 
        [e.target.name] : value
    })
}
// sends request to Rails for User Creation. Logs in User.
function createUser(e){
    e.preventDefault()
        fetch("/signup", {
            method: "POST",
            headers:{
                "Content-type" : "Application/json"
            },
            body: JSON.stringify(
               newUser
            )})
            .then (r=>{
                if (r.ok) {
                r.json().then(data=>swal(data.username+ " created, please log in"))
                setCreate(!create)
                }
                else{
                    r.json().then(data=>swal(data.errors))
                }
        })
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
                    type="password"
                    onChange={handleNewUserInput}
                    />
                     <Form.Field
                    id="passwordConfirmation"
                    control={Input}
                    label="Password Confirmation"
                    placeholder="Type Password Again"
                    name="password_confirmation"
                    type="password"
                    onChange={handleNewUserInput}
                    />
                </Form.Group>
                <Form.Group>
                <Form.Field
                    id="newEmail"
                    control={Input}
                    label="Email"
                    placeholder="Your Email"
                    name="email"
                    type="email"
                    onChange={handleNewUserInput}
                    />
                     <Form.Field
                    id="newAddress"
                    control={Input}
                    label="Address"
                    placeholder="Your Address"
                    name="address"
                    type="address"
                    onChange={handleNewUserInput}
                    />
                    </Form.Group>
                <Form.Field 
            id="create-button"
            control={Button}
            content="Create"
            label='Create'
            color="green"
            />
            </Form>

        <Button color="linkedin" onClick={toggleCreateUserForm}>Back to Login</Button>
        </div> 
        : 
        // The login form that you will see by default
        <div className="login">
        <h1>Log in to Continue the Fun</h1>
        <Form onSubmit={attemptLogin} inverted>
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
            label=''
            color="green"
            />
        </Form>
        <Button color="linkedin" onClick={toggleCreateUserForm}>Create New User</Button>
        </div>}
    </div>
  )
}

export default Login
import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Dropdown, Icon, Menu } from 'semantic-ui-react'
import swal from 'sweetalert'


function UserNav({ user, logout}) {
const navigate = useNavigate()
    const cartTest = useSelector(state=>state.cart.entities)
    const logoutStepOne = ()=>{
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
              navigate("/")
              swal("You have been logged out")
              logout()
            }
          });}

  return (
    <div >
        <Menu color="violet" attached="top" inverted id="NavBar">
        <Menu.Item className='menuItem' as={Link} to="/"> CTF</Menu.Item>
            <Dropdown className='ui right aligned' item icon={"user"} >
                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/profile">
                        Profile
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/wishlist">
                        Wishlist
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/gamecenter">
                        Game Center
                    </Dropdown.Item>
                    {!user || Object.keys(user).length===0 ? null : <Dropdown.Item onClick={logoutStepOne}>
                        Logout
                    </Dropdown.Item> }
                </Dropdown.Menu>
            </Dropdown>
            <Menu.Item floated="right" as={Link} to="/cart">
                {cartTest.length>0 ? <Icon name="cart plus"/>:<Icon name="shopping cart"/>}
                </Menu.Item>
        </Menu>
    </div>
  )
}

export default UserNav
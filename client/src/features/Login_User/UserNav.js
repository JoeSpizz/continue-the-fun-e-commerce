import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Dropdown, Icon, Menu } from 'semantic-ui-react'


function UserNav({ user, logout}) {

    const cartTest = useSelector(state=>state.cart.entities)
   

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
                    {user ? <Dropdown.Item onClick={logout}>
                        Logout
                    </Dropdown.Item> : null }
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
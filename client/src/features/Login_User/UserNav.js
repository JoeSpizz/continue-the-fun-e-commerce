import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Dropdown, Menu } from 'semantic-ui-react'


function UserNav({ user, logout}) {
const[search, setSearch]= useState("")
const navigate = useNavigate()
   
    // console.log(user)
function handleSearch(e){
    setSearch(e.target.value)
}
    function gameSearch(){
        navigate('/GameSearch')

    }
  return (
    <div >
        <Menu color="violet" attached="top" inverted id="NavBar">
        <Menu.Item className='menuItem' as={Link} to="/"> CTF</Menu.Item>
        <Menu.Menu onClick={gameSearch}
        position='left'>
        <div className='ui left aligned category search item'>
          <div className='ui icon input'>
            <input
              className='prompt'
              type='text'
              placeholder='Search For a Game'
              value={search}
              onChange={handleSearch}
            />
            <i className='search link icon' />
          </div>
          <div className='results' />
        </div>
      </Menu.Menu>
            <Dropdown className='ui right aligned' item icon={"user"} simple >
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
        </Menu>
    </div>
  )
}

export default UserNav
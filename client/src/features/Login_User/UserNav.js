import React from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, Menu } from 'semantic-ui-react'

function UserNav({ user, setUser}) {
    function logout (){
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
              setUser(null);
              
            }
          });
    }
  return (
    <div>
        <Menu attached="top">
            <Dropdown item icon={"user"} simple>
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
                    </Dropdown.Item> : <Dropdown.Item as={Link} to="/login">
                        Login
                    </Dropdown.Item> }
                </Dropdown.Menu>
            </Dropdown>

        </Menu>
    </div>
  )
}

export default UserNav
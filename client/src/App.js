
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from './features/Login_User/Login';
import Home from './features/MarketPlace/Home';
import UserProfile from './features/Login_User/UserProfile';
import Cart from './features/MarketPlace/Cart';
import Wishlist from './features/Login_User/Wishlist';
import GameCenter from './features/Login_User/GameCenter';
import { useState } from 'react';
import UserNav from './features/Login_User/UserNav';
import swal from 'sweetalert';

function App() {
  // Handles logic for Logging in/setting user. 
  const [user, setUser]= useState(null)
  function login (name){
    console.log(name)
    setUser(name)
    swal(name + " has been logged in")
  }

console.log(user)


  return (
    <div className="App">
    <BrowserRouter>
    <UserNav user={user} setUser={setUser}/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/login" element={<Login login={login}/>}/>
      <Route exact path="/profile" element={<UserProfile user={user}/>}/>
      <Route exact path="/cart" element={<Cart user={user}/>}/>
      <Route exact path="/wishlist" element ={<Wishlist user={user}/>}/>
      <Route exact path="/gamecenter" element ={<GameCenter user={user}/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

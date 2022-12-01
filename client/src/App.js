
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
import { useEffect, useState } from 'react';
import UserNav from './features/Login_User/UserNav';
import swal from 'sweetalert';
import GameSearch from './features/Games/GameSearch';
import GameCardFull from './features/Games/GameCardFull';
import SellGame from './features/MarketPlace/SellGame';
import OfferGame from './features/MarketPlace/OfferGame';
import PotentialListing from './features/MarketPlace/PotentialListing';

function App() {
  // Handles logic for Logging in/setting user. 
  const [user, setUser]= useState(null)
  const [userData, setUserData]= useState({})
  useEffect(()=>{
    fetch('/me')
    .then(r=>{
      if(r.ok){
        r.json().then(data=>{
          setUserData(data)
          setUser(data.username)})}})
  }, [])

  function login (user){
    setUserData(user)
    setUser(user.username)
    swal(user.username + " has been logged in")
  }
  const logout = ()=>{
      fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
            setUserData(null)
            swal("You have been logged out")
          }
        });
  
  }

  return (
    <div className="App">
    <BrowserRouter>
    <UserNav user={user} setUser={setUser} logout={logout}/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/login" element={<Login login={login}/>}/>
      <Route exact path="/profile" element={<UserProfile user={userData} login={login}/>}/>
      <Route exact path="/cart" element={<Cart user={user} />}/>
      <Route exact path="/wishlist" element ={<Wishlist user={userData} login={login}/>}/>
      <Route exact path="/gamecenter" element ={<GameCenter user={userData} login={login}/>}/>
      <Route exact path="/gamesearch" element ={<GameSearch/>}/>
      <Route path ={`/boardgames/:id`} element={<GameCardFull/>}/>
      <Route path ='/sellGame' element={<SellGame user={userData} login={login}/>}/>
      <Route path ='/offerGame' element={<OfferGame user={userData} login={login}/>}/>
      <Route path ={`listing/:id`} element={<PotentialListing/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;


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
import OfferGame from './features/MarketPlace/OfferGame';
import PotentialListing from './features/MarketPlace/PotentialListing';
import MarketplaceSearch from './features/MarketPlace/MarketplaceSearch';
import BigMarketCard from './features/MarketPlace/BigMarketCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart } from './features/MarketPlace/cartSlice';

function App() {
  // Handles logic for Logging in/setting user. 
  const [user, setUser]= useState(null)
  const [userData, setUserData]= useState({})
  const dispatch = useDispatch()
  const cart = useSelector(state=>state.cart.entities)
  useEffect(()=>{
    fetch('/me')
    .then(r=>{
      if(r.ok){
        r.json().then(data=>{
          setUserData(data)
          setUser(data.username)})}})
  }, [])


  useEffect(()=>{
    dispatch(fetchCart())
  }, [dispatch])

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
      <Route exact path="/cart" element={<Cart user={user} cart={cart} login={login}/>}/>
      <Route exact path="/wishlist" element ={<Wishlist user={userData} login={login}/>}/>
      <Route exact path="/gamecenter" element ={<GameCenter user={userData} login={login}/>}/>
      <Route exact path="/gamesearch" element ={<GameSearch/>}/>
      <Route path ={`/boardgames/:id`} element={<GameCardFull/>}/>
      <Route path ='/listGame' element={<OfferGame user={userData} login={login}/>}/>
      <Route path ={`offer/:id`} element={<PotentialListing/>}/>
      <Route path ={`sell/:id`} element={<PotentialListing/>}/>
      <Route path ="/marketplace_search" element={<MarketplaceSearch/>}/>
      <Route path ="/BigMarketCard" element={<BigMarketCard/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

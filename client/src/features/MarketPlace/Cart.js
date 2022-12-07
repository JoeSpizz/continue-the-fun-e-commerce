import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Login from '../Login_User/Login'
import CartItemCard from './CartItemCard'
import { fetchCart } from './cartSlice'

function Cart({user, login}) {
const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchCart())
  }, [dispatch])
  const list = useSelector(state=>state.cart.entities)

 
  if (!user || Object.keys(user).length===0) return <Login login={login}/>
  return (
    <div className='cart'>
      <h1>{user}'s Shopping Cart</h1>
      <div className='cartItemsContainer'>
      {list.map(game=> <CartItemCard game={game} key={game.id}/>)}
      </div>
      

    </div>
  )
}

export default Cart
import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import Login from '../Login_User/Login'
import CartItemCard from './CartItemCard'
import { fetchCart } from './cartSlice'

function Cart({user, login}) {
  const navigate = useNavigate()
const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchCart())
  }, [dispatch])
  const list = useSelector(state=>state.cart.entities)
 
 

  const checkout = ()=>{
    navigate('/checkout')
  }

 
  if (!user || Object.keys(user).length===0) return <Login login={login}/>
  return (
    <div className='cart'>
      <h1 className='cartHeader'>{user}'s Shopping Cart</h1>
      <div className='cartItemsContainer'>
      {list.length>0 ? list.map(game=> <CartItemCard game={game} key={game.id}/>): null}
      </div>
      <div className='checkoutBtn'>
        <Button color='linkedin' circular onClick={checkout}>Start Checkout</Button>
        {list.length>0 ? <h2>Cart Total: ${list.reduce((acc, obj)=>acc + obj.marketplace_item.price, 0)}</h2>: null}
        <p>(before shipping costs)</p>
      </div>
      

    </div>
  )
}

export default Cart
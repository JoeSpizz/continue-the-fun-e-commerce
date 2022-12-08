import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCart } from './cartSlice'

function Checkout({user}) {
    const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchCart())
  }, [dispatch])
  const list = useSelector(state=>state.cart.entities)
  let total = list.reduce((acc, obj)=>acc + obj.marketplace_item.price, 0);


console.log()
  return (
    <div>
        <h2>Checkout</h2>
        <h3> Shipping Address</h3>
        <p>{user.address}</p>
        <h1>${total}</h1>
        </div>
  )
}

export default Checkout
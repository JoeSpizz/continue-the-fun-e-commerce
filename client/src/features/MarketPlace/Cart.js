import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCart } from './cartSlice'

function Cart() {
const dispatch = useDispatch()
const list = useSelector(state=>state.cart.entities)

  useEffect(()=>{
    dispatch(fetchCart())
  }, [dispatch])

  console.log(list)

  return (
    <div>Cart</div>
  )
}

export default Cart
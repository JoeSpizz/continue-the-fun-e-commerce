import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button, Form, Input, Popup, Radio } from 'semantic-ui-react'
import swal from 'sweetalert'
import CartItemCard from './CartItemCard'
import { fetchCart } from './cartSlice'

function Checkout({user}) {
    const [edit, setEdit] = useState(false)
    const [address, setAddress] = useState({})
    const [billing, setBilling] = useState(false)
    const [billAddress, setBillAddress] = useState({})
    const [select, setSelect] = useState("7.47")
    const dispatch = useDispatch()
    const navigate = useNavigate()
  useEffect(()=>{
    dispatch(fetchCart())
  }, [dispatch])
  useEffect(()=>{
      setAddress({
          name: user.username,
        street : user.address,
        zipcode : user.zipcode
      })
  },[user.address, user.zipcode, user.username])
  const list = useSelector(state=>state.cart.entities)
  let total = list.reduce((acc, obj)=>acc + obj.marketplace_item.price, 0);
const editStatus = ()=>{
setEdit(!edit)
}
const handleChange = (e)=>{
    let key= e.target.name
    let value= e.target.value
   setAddress({...address,
[key]: value})
}
const createNewAddress = ()=>{
    setEdit(!edit)
    console.log(address)
}
const editBilling = ()=>{
    setBilling(!billing)
}
const billingChange = (e)=>{
   let key= e.target.name
    let value = e.target.value
    setBillAddress({ ...billAddress,
        [key]:value
    })
}
const radioSelect = (e, {value})=>{
    setSelect(value)
} 


const placeOrder = ()=>{
    swal("Thank you for trying out the Continue the Fun app. For the sake of demo purposes the selected games will be removed from your cart and re-added to the Marketplace.")
    fetch('/purchase')
    .then(r=>{
        if(r.ok){
            navigate('/')
        }
        else{
            r.json().then(data=>console.log(data))
        }
    })
    // navigate('/')
}
  return (
    <div className='checkout'>
        <h2 id="checkoutHead">Checkout <em>{list.length} item(s)</em></h2>
        <div className='checkoutComponent'>
        <h3> Shipping Address </h3>
        <Form inverted>
        <Form.Group inline>
          <label>Delivery Options:</label>
          <Form.Field
            control={Radio}
            label='Standard $7.47'
            value='7.47'
            checked={select === '7.47'}
            onChange={radioSelect}
          />
          <Form.Field
            control={Radio}
            label='Priority $15.00'
            value='15'
            checked={select==='15'}
            onChange={radioSelect}
          />
          </Form.Group>
          </Form>

        {edit
        ? 
        <Form inverted>
            <button className='detailsBtn' onClick={createNewAddress}>Submit</button>
            <Form.Field control={Input} type="text" label="Name" placeholder="Name" name="name" onChange={handleChange}/>
            <Form.Group>
                <Form.Field type="address" control={Input} label="Street" placeholder="Street" name="street" onChange={handleChange}/>
                <Form.Field type="number" control={Input} label="Zipcode" placeholder="Zipcode" name="zipcode" onChange={handleChange}/>
            </Form.Group>
        </Form> 
        :
         <div id="checkoutAddress">
        <button className='detailsBtn' onClick={editStatus}>Change</button>
        <h4>{address.name}</h4>
        <p>{address.street}, {address.zipcode}</p></div>
        }
        </div>
        <div className='checkoutComponent2'>
            <h3>Payment Information</h3>
            <Form inverted>
            <Popup content="Disabled so you don't accidentally give away you payment info to a random school project on the internet" trigger={
                <div>
                <Form.Group>
                <Form.Field disabled control={Input} label="Credit Card" type="credit card" placeholder="card details"/>
                <Form.Field disabled control={Input} label="CCV" type="number" placeholder="CCV"/>
                </Form.Group>
                <Form.Field disabled type="date" control={Input} label="Expiration" placeholder="Expiration" name="whaterv" id="expDate"/>
                </div>
            } />
            {Object.keys(billAddress).length > 0 ? 
            <div id="billingAddress">
            <h4>{billAddress.billName}</h4>
            <p>{billAddress.billStreet}, {billAddress.billZipcode}</p></div>
            : null}
            {billing ?
            <Form inverted>
            <Form.Field control={Input} type="text" label="Billing Name" placeholder="Name" name="billName" onChange={billingChange}/>
            <Form.Group>
                <Form.Field type="address" control={Input} label="Street" placeholder="Street" name="billStreet" onChange={billingChange}/>
                <Form.Field type="number" control={Input} label="Zipcode" placeholder="Zipcode" name="billZipcode" onChange={billingChange}/>
            </Form.Group>
            <Button color="linkedin" onClick={editBilling}>Submit</Button>
        </Form> 
            : <button className='detailsBtn' onClick={editBilling}>Change Billing Address</button>}
            </Form>
        </div>
        <div className='checkoutCards'>
        {list.map(game=> <CartItemCard game={game} key={game.id}/>)}
        </div>
        <div className='checkoutTotal'>
        <h2>Items Subtotal: ${total}</h2>
        <p> Shipping: {select} </p>
        <h1>Order Total: ${total + parseFloat(select)}</h1>
        <Button color="violet" circular onClick={placeOrder}>Place Order</Button>
        </div>
        </div>
  )
}

export default Checkout
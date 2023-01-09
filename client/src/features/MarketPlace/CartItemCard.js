import React from 'react'
import { useDispatch } from 'react-redux'
import {button } from 'semantic-ui-react'
import swal from 'sweetalert'

function CartItemCard({game}) {
    const dispatch = useDispatch()
   
    const deleteFromCart = ()=>{
        fetch(`/carts/${game.id}`,{
            method: "DELETE"
        })
        .then(r=>{
            if(r.ok){
                dispatch({
                    type: "cart/cartRemoved",
                    payload: game
                  })
                  swal("Removed From Cart")
            }
            else{
                r.json()
                .then(data=>swal(data.error))
            }

        })
    }
    
  return (
    <div className='cartCard'>
        <img src={game.marketplace_item.image_url} alt="cover" className='cartImage'/>
        <h2 className='cartTitle'>
        {game.marketplace_item.title} <em>listed by</em> {game.marketplace_item.seller}</h2>
        <p className='cartCondition'>
        <strong>{game.marketplace_item.condition}</strong></p>
        {game.marketplace_item.price? <p className='cartCost'>${game.marketplace_item.price}</p> : <p className='cartCost'>Shipping Cost Only</p>}
        <button color="red" basic onClick={deleteFromCart} className="detailsBtn">Remove</button>
    </div>
  )
}

export default CartItemCard
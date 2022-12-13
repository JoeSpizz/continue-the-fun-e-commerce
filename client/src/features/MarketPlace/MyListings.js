import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import Login from '../Login_User/Login'

function MyListings({user, login}) {
    const [listings, setListings] = useState([])
    const navigate = useNavigate()
    
    useEffect(()=>{
        fetch('/mylistings')
        .then(r=>{
            if(r.ok){
                r.json().then(data=>setListings(data))
            }
            else{
                r.json().then(data=>swal("Please Login"))
            }
        })
    }, [user])

    const goToEdit = (game)=>{
        navigate(`/my_listings/${game.id}`, {state:game})
    }
const deleteListing = (game)=>{
    fetch(`/marketplace_items/${game.id}`,{
        method: "DELETE"
    })
    .then(r=>{
        if(r.ok){
            swal("Deleted")
            setListings(listings.filter(item=>item.id!==game.id))
        }
    })
}

if (!user || Object.keys(user).length===0) return <Login login={login}/>
  return (
    <div>
        <h1 id='listingsTitle'>Your Games</h1>
        {listings.map(game=>{
            return(
                <div>
                <div className='myMiniListing' onClick={()=>goToEdit(game)}>
                    <h2>{game.title}</h2>
                    <p>In <strong>{game.condition}</strong> condition</p> 
                    {game.price? <p>Listed for ${game.price}</p>: <p>Offering for Free</p>}
                    </div>
                    <button className='detailsBtn deleteListing' onClick={()=>deleteListing(game)}>Delete Listing</button>
                    </div>
            )
        })}
    </div>
  )
}

export default MyListings
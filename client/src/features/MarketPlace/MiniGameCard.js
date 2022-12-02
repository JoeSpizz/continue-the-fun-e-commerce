import React from 'react'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'

function MiniGameCard(game) {
    let navigate = useNavigate()
    const sellGame = ()=>{
        fetch(`/boardgames`, {
            method: "POST",
            headers: {
                "Content-type": "Application/json"
            },
            body: JSON.stringify(game.game)
        })
        .then(r=> {if(r.ok){r.json().then(data=>{
         
          navigate(`/sell/${data.id}`)
        })
        }
          else{
            swal("something went wrong")}
          })
        }
    const offerGame = ()=>[
        fetch(`/boardgames`, {
            method: "POST",
            headers: {
                "Content-type": "Application/json"
            },
            body: JSON.stringify(game.game)
        })
        .then(r=> {if(r.ok){r.json().then(data=>{
         
          navigate(`/offer/${data.id}`)
        })
        }
          else{
            swal("something went wrong")}
          })
    ]
  return (
    <div className='miniCard'>
        <img src={game.game.image_url} alt="Game Box"/>
        <div className='miniDetails'>
            <ul>
            <li>
        {game.game.name}
        </li>
        <li>
           Traditional Retail Price: ${game.game.price}
        </li>
        </ul>
        <div className="ui buttons">
            <button className="ui positive button" onClick={sellGame}>Sell</button>
            <div className="or"></div>
            <button className="ui primary button"  onClick={offerGame}>Offer</button>
          </div>
        </div>
       
    </div>
  )
}

export default MiniGameCard
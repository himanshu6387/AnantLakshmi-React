import React from 'react'

const EventHandling = () => {

    const popUp=()=>{
        alert('Product is Added into the Cart..')
        alert('Continue to explore our website!!!')
    }

  return (
    <div>
        <button onClick={popUp} style={{width:'150px',backgroundColor:'goldenrod',padding:'10px',border:'none',borderRadius:'10px'}}>Add To Cart</button>
    </div>
  )
}

export default EventHandling
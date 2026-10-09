import React from 'react'

const Cart = () => {

    let cart = 10200
  return (
    <div style={{boxShadow:'0 0 10px 2px gray',width:'200px',padding:'10px',borderRadius:'10px',margin:'10px'}}>
        <h1 className="cart">Cart Page</h1>
        {/* By Using {} we can write js into JSX */}
        <h2>{cart}</h2>
        <p>Cart is Empty!!!</p>
        <button style={{backgroundColor:'green',padding:'15px',width:'150px',border:'none',borderRadius:'10px',color:'white'}}>Click Me!!</button>
    </div>
  )
}

export default Cart
import React from 'react'

const ConditionalRendering = () => {

    let isLoggedIn = false 

  return (
    <div>
        {
           isLoggedIn?
           (
           <>
           <h1>Welcome To User DashBoard</h1>
           </>
           ):(
            <>
            <h1>Plllss Login Into the Website</h1>
            </>
           ) 
        }
    </div>
  )
}

export default ConditionalRendering
import React, { useState } from 'react'

const Counter = () => {

    const [count,setCount] = useState(0)    

    const increment=()=>{
       setCount(count+1)
    }

  return (
    <div style={{width:'200px',boxShadow:'0 0 10px 1px gray',padding:'15px',borderRadius:'20px',textAlign:'center',margin:'auto'}}>
        <h2>Counter Program</h2>
        <h2>{count}</h2>
        <button onClick={increment}>Increment</button>
    </div>
  )
}

export default Counter
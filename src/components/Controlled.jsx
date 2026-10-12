import React, { useState } from 'react'

const Controlled = () => {

    const [name,setName] = useState('')
    console.log(name)

    // const handleChange=(e)=>
    //     setName(e.target.value)
    // }
  return (
    <div>
        <h3>Name</h3>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        {/* <input type="text" value={name} onChange={handleChange} /> */}
        <br />
    </div>
  )
}

export default Controlled
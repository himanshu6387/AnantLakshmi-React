import React from 'react'

const Child = ({prop,data,obj,fun}) => {
    console.log(prop)
    console.log(data)
    console.log(obj)
  return (
    <div>
        <h2>I am a Child Component & I'm a Data Consumer</h2>
        <h3>{prop}</h3>
        <h4>{data}</h4>
        <h4>Product:{obj.productName}. Price: &#8377;{obj.price}</h4>
        <button onClick={fun}>Click Me</button>
    </div>
  )
}

export default Child
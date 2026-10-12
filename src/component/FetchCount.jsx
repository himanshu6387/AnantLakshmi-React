import React, { useEffect, useState } from 'react'

const FetchCount = () => {

    const [count,setCount] = useState(0)
    const increment=()=>{
        setCount(count+1)
    }

    const [apiData,setapiData] = useState([])
    console.log(apiData)




   useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data=> setapiData(data))
    .catch(err=> console.log(err))
   },[])
    

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>

        {
            apiData.map((ele,index)=>(
                <div key={index} style={{boxShadow:'0 0 10px 1px gray',padding:'10px',margin:'10px',borderRadius:'10px'}}>
                    <h3>User Id:{ele.userId}</h3>
                    <h4>Title: {ele.title}</h4>
                    <p>Description: {ele.body}</p>
                </div>
            ))
        }
    </div>
  )
}

export default FetchCount
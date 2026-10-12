import React from 'react'

const Login = () => {

  const arr = [10,20,30,40,50,60]

  // for(let i=0;i<arr.length;i++){
  //   console.log(arr[i])
  // }
  return (
    <div>
      {
        arr.map((ele,i)=>(
          <div>
            <h3>Element:{ele}, Index: {i}</h3>
          </div>
        ))
      }
    </div>
  )
}

export default Login
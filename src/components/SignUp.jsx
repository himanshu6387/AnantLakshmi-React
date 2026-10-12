import React, { useState } from 'react'

const SignUp = () => {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    

    const handleSubmit=(e)=>{
        e.preventDefault()

        if(!name || !email || !password){
            alert('Missing input fields..')
            return
        }
        const formdata = {name,email,password}
        alert('User SignedUp Successfully..')
        console.log('Submitted Data',formdata)
    }


  return (
    <div style={{width:'300px',boxShadow:'0 0 10px 1px gray',padding:'15px',margin:'auto',marginTop:'100px',borderRadius:'20px'}}>
        <form onSubmit={handleSubmit}>
            <h2 style={{textAlign:'center'}}><u>SignUp Here</u></h2>
            <h3>Name</h3>
            <input type="text" value={name} onChange={(e)=> setName(e.target.value)}  placeholder='Enter the Name' style={{width:'90%',padding:'10px'}}/>

            <h3>Email</h3>
            <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Enter the Mail'  style={{width:'90%',padding:'10px'}} />

            <h3>Password</h3>
            <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}  placeholder='Enter the Password'  style={{width:'90%',padding:'10px'}} />

            <br />
            <button type='submit'  style={{width:'98%',padding:'10px',backgroundColor:'goldenrod',border:'none',marginTop:'10px'}}>Submit</button>
        </form>
    </div>
  )
}

export default SignUp
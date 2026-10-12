import React from 'react'
import Home from './components/Home'
import Cart from './components/Cart'
import Child from './components/Child'
import ConditionalRendering from './components/ConditionalRendering'
import EventHandling from './components/EventHandling'
import Counter from './components/Counter'
import Controlled from './components/Controlled'
import SignUp from './components/SignUp'
import Login from './component/Login'
import FetchCount from './component/FetchCount'
import Anjali from './component/Anjali'

const App = () => {

  let name = "Mohith CSE-C"
  const product = ['Iphone','AC','Cooler','Kettle','Fridge']
  const car = {
    productName:'Wagoner',
    price:700000,
    color:'White',
    model:'VX LXi',
    built:2018
  }

  function popUp(){
    alert('Hii !! Guys What is Happening..')
    alert('Are you doing well ??????')
  }

  return (
    <div>

      {/* <Anjali/> */}
      {/* <FetchCount/> */}
      {/* <SignUp/> */}
      <Login/>
      {/* <Controlled/>
      <EventHandling/>
      <Counter/>
      <Home/>
      <Cart/> */}
      {/* <Child prop={name} data={product} obj={car} fun={popUp}/> */}
      {/* <Child name="Mohith CSE-C"/> */}
      {/* <ConditionalRendering/>  */}
    </div>
  )
}

export default App

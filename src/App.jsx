import React from 'react'
import Home from './components/Home'
import Cart from './components/Cart'
import Child from './components/Child'
import ConditionalRendering from './components/ConditionalRendering'
import EventHandling from './components/EventHandling'
import Counter from './components/Counter'

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
      <EventHandling/>
      <Counter/>
      <Home/>
      <Cart/>
      <Child prop={name} data={product} obj={car} fun={popUp}/>
      {/* <Child name="Mohith CSE-C"/> */}
      <ConditionalRendering/> 
    </div>
  )
}

export default App

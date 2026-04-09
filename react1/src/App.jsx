import { useState } from 'react'
import Card1 from './Component/cart'
import './index.css'

function App() {
  // let counter =15
  let [counter,setCounter] = useState(15)

  
    let myobj ={
        username: "varun",
        age :24,

    }
    let arr =[1,2,3]


  const btn1 =()=>{ 
    // console.log("increament",Math.random())
    // if(counter<20){
      // setCounter(counter+1)
setCounter(prevCounter => prevCounter+1)   //callback
setCounter(prevCounter => prevCounter+1)
setCounter(prevCounter => prevCounter+1)
setCounter(prevCounter => prevCounter+1)

    // }
       
  }


  const btn2 =() =>{
    // console.log("Decreament",-1)
    if(counter>0){
      setCounter(counter-1)

    }

    
  }

  return (
    <>
     <h1>Hello varun</h1>
     <h2>Count Value: {counter}</h2>
<div className="btn-group">
  <button onClick={btn1}>Increment</button>
  <button onClick={btn2}>Decrement</button>
</div>
<Card1 username ="sharma" someo ="Click me"/>
<Card1  username ="sardar" someo ="Learn more"/>
</>
  )
}

export default App

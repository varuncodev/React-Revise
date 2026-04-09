import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  // let counter =15
  let [counter,setCounter] = useState(15)

  const btn1 =()=>{ 
    // console.log("increament",Math.random())
       setCounter(counter+1)
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
     <button onClick={btn1}>Increment</button>
     <br/>
     <button onClick={btn2}>Decrement</button>
    </>
  )
}

export default App

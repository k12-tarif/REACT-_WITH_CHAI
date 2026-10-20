import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  let [Counter, setCounter] = useState(15)  //in setCounter set is a just a name
  // let Counter = 15

  const addValue = () => {
    // Counter = Counter + 1    
    setCounter(Counter + 1)
    // console.log("Clicked", Counter);
  }

  let remValue = () => {
    setCounter(Counter - 1)
    // console.log("Clicked", Counter);
  }

  return (
  <>
      <h1>Hello, Vite!</h1>
      <h2>Counter value: {Counter}</h2>

      <button
      onClick={addValue}
      >Add value :{Counter}</button>
      <br />
      <button
      onClick={remValue}
      >Remove value:{Counter}</button>
      <p>Footer: {Counter}</p>
  </>
  )
}

export default App

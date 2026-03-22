import { useState } from 'react'
import './App.css'

function App() {

  let [count, setCount] = useState(7)


  const addval = () => {
    count = count + 1;
    setCount(count)

  }
  const rmoveval = () => {
    if(count>=1) setCount(count-1)

  }

  return (
    <>
      <h1> coffee with prince</h1>
      <h3> project counter</h3>
      <h3>counter value : {count} </h3>

      <button onClick={addval}> add value</button><br></br>
      <button  onClick={rmoveval}> remove value</button>


    </>
  )
}

export default App

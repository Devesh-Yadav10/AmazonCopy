import { useState } from 'react'
import './App.css'
import Navbar from './components/HomePage/Navbar'
function App() {
  const [count, setCount] = useState(0)
  const handleSearch =(inputvalue) =>{
    console.log("input taken")
    console.log("value in the input field is: ", inputvalue)
  } 
  return (
    <>
      <Navbar onType={handleSearch}/>
        
    </>
  )
}

export default App

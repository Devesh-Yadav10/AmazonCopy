import { useState } from 'react'
import './App.css'
import Home  from './components/HomePage/index.jsx'
function App() {
  const [count, setCount] = useState(0)
  const handleSearch =(inputvalue) =>{
    console.log("input taken")
    console.log("value in the input field is: ", inputvalue)
  } 
  return (
    <>
      <Home onType={handleSearch}/>
        
    </>
  )
}

export default App

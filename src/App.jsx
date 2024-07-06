import { useState } from 'react'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-screen bg-slate-700'>
      <Header/>
      <Navbar/>
    </div>
    
  )
}

export default App

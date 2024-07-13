import { useState } from 'react'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import SportsNews from './Components/SportsNews/SportsNews'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-screen bg-slate-700'>
      <Header/>
      <Navbar/>
      <SportsNews/>
    </div>
    
  )
}

export default App

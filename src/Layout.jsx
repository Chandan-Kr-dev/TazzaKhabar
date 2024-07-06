import React from 'react'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import {Outlet} from 'react-router-dom'

function Layout() {
  return (
    <div>
        <Header/>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Layout
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'

import TopHeadlines from './Components/TopHeadlines/TopHeadlines.jsx'
import SportsNews from './Components/SportsNews/SportsNews.jsx'
import Entertainment from './Components/Entertainment/Entertainment.jsx'
import ScienceNews from './Components/ScienceNews/ScienceNews.jsx'


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<TopHeadlines/>}/>
      <Route path='/SportsNews' element={<SportsNews/>}/>
      <Route path='/Entertainment' element={<Entertainment/>}/>
      <Route path='/ScienceNews' element={<ScienceNews/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

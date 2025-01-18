import React from 'react'
import Nav from '../components/Navpar/Nav'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (<>
    <Nav/>

    <div><Outlet/></div> 
    
    <Footer/> 
    </>
  )
}

export default Layout
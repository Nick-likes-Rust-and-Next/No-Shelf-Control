import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className='app'>
        <Navbar />
        <div className='page'>
          <Outlet />
        </div>
    </div>
  )
}

export default Layout;
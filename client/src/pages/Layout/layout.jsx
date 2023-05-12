import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import './layout.scss';

function Layout(props) {
  return (
    <div className='app'>
        <Navbar themeSwitch={props.themeSwitch}/>
        <div className='page'>
          <Outlet />
        </div>
    </div>
  )
}

export default Layout;
import React from 'react'
import { Outlet } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div>
        <h1>header</h1>
      </div>
        <Outlet/>
    </div>
  )
}

export default Header

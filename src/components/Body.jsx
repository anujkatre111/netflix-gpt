import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Header from './Header'
import Login from './Login'
import Browse from './Browse'

const Body = () => {
  return (
    <div>
        <Router>
            <Routes>
                    <Route path='/' element={<Login/>}/>
                    <Route path='/browse' element={<Browse/>}/>
            </Routes>
        </Router>
    </div>
  )
}

export default Body

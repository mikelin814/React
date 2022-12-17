import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Component/Home'
import Read from './Component/Read'

function Routing() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/usd/:id' element={<Read/>}/>
    </Routes>
  )
}

export default Routing
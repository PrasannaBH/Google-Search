import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';

import {Results} from './Results'

export const Routing = () => {
  return (
    <div className='p-4'>

      {/* ANIC */}

        <Routes>
          <Route exact path="/" element={<Navigate to="/search" />} />
          <Route exact path="/search" element={<Results/>} />
          <Route path="/image" element={<Results/>} />
          <Route path="/news" element={<Results/>} />
          <Route path="/video" element={<Results/>} />
        </Routes> 
    </div>
  )
}

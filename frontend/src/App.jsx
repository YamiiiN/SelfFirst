import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>

          {/* HOME ROUTE */}
          <Route path='/' element={<Home />} />

          
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App

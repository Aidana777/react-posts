

import React from 'react';
import './styles/App.css';
import './styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Posts from './pages/Posts';
import Navbar from './components/UI/Navbar/Navbar'


function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/posts' element={<Posts />} />
      
        </Routes>


      </BrowserRouter>






    </div>
  )
}

export default App;

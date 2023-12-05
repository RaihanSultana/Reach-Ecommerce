import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './Login'



function App(){
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Header/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

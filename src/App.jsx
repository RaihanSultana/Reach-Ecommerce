import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import {BrowserRouter as Router} from 'react-router-dom'



function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
      </div>
    </Router>
  )
}

export default App;

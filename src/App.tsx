// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home'
import Register from './components/register'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/register' element={<Register/>} />
        </Routes>
      </div>
    </>
  )
}

export default App

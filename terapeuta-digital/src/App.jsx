import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Pages/Login'
import Consultas from './components/Pages/Consultas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Login />} />
            <Route path='consultas' element={<Consultas />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

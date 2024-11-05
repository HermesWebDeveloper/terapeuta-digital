import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Pages/Login'
import Consultas from './components/Pages/Consultas'
import EditarConsulta from './components/Pages/EditarConsulta'
import NovaConsulta from './components/Pages/NovaConsulta'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Login />} />
            <Route path='consultas' element={<Consultas />} />
            <Route path='consultas/:id' element={<EditarConsulta />} />
            <Route path='novaconsulta' element={<NovaConsulta />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

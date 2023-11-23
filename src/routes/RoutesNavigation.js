import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import ListarTarefa from '../pages/tarefa/ListarTarefa'

function RoutesNavigation () {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={
          <Home />
        } />

        <Route path='/login' element={
          <Login />
        } />

        <Route path='/tarefas' element={
          <ListarTarefa />
        } />

      </Routes>
    </BrowserRouter>
  )
}

export { RoutesNavigation }
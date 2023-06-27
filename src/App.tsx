import { Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import CartPage from './pages/CartPage'
import './App.css'

function App() {

  return (
    <>
      <NavBar />  
      <div className='container'>
        <Routes>
          <Route path='/' element={ <HomePage /> } /> 
          <Route path='/categories/:id' element={ <CategoryPage /> } /> 
          <Route path='/cart' element={ <CartPage /> } /> 
        </Routes>
      </div>  
    </>
  )
}

export default App


import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import LogIn from './components/LogIn'
import ProductList from './components/Menu'
import Cart from './components/Cart'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='menu' element={<ProductList />} />
          <Route path='login' element={<LogIn />} />
          <Route path='cart' element={<Cart />} />
          <Route path='dashboard' element={<Dashboard/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

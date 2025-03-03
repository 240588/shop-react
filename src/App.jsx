import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routers } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProductDetail from './pages/productDetail'
import CartPage from './pages/CartPage'


export default function App() {
 const [cartItems, setCartItems] = useState([])

 const addToCart = (product) =>{
  setCartItems(prev => [...prev, product])
 }

 const removeFromCart = (id) => {
  setCartItems(prev => prev.filter(item => item.id !== id))
 }

  return (
   <BrowserRouter>
    <Header/>
  <main className='min-h-screen'>
  <Routes>
        <Route path='/' element={<Home addToCart={addToCart}/>} />
        <Route path='/product/:id' element={<ProductDetail addToCart={addToCart}/>} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart}/>}/>  
   </Routes>
  </main>
    <Footer/>
   </BrowserRouter>
  )
}




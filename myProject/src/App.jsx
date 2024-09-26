import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Collection from './Pages/Collection'
import Cart from './Pages/Cart'
import Product from './Pages/Product'
import PlaceOrder from './Pages/PlaceOrder'
import Login from './Pages/Login'
import Orders from './Pages/Orders'
import Contact from './Pages/Contact'
import Navbar from './Componentd/Navbar'
import Footer from './Componentd/Footer'
import SearchBar from './Componentd/searchBar'

function App() {
    return (
        <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
            <Navbar/>
            <SearchBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/About' element={<About/>}/>   
                <Route path='/collection' element={<Collection/>}/>   
                <Route path='/cart' element={<Cart/>}/>   
                <Route path='/PlaceOrder' element={<PlaceOrder/>}/>   
                <Route path='/Login' element={<Login/>}/>   
                <Route path='/product/:productId' element={<Product/>}/>   
                <Route path='/orders' element={<Orders/>}/>   
                <Route path='/contact' element={<Contact/>}/>   
            </Routes>
            <Footer/>
        
        </div>
    )
}

export default App

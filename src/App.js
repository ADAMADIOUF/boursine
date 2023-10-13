import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
 
} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import History from './components/History'
import Blog from './components/Blog'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import SingleProduct from './components/SingleProduct'
import SingleBlog from './components/SingleBlog'
import Footer from './components/Footer'


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/history' element={<History />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='contact' element={<Contact />} />
        <Route path='product/:id' element={<SingleProduct />} />
        <Route path='blog/:id' element={<SingleBlog />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/home/Home'
import About from './Pages/about/About'
import Contact from './Pages/contact/Contact'
import Gallery from './Pages/gallery/Gallery'
import Plans from './Pages/plans/Plans'
import Trainers from './Pages/trainers/Trainers'
import NotFound from './Pages/notFound/NotFound'
import Payment from './Pages/payment/payment'
import Navbar from './components/navbar/Navbar'
import './App.css'
import Footer from './components/Footer'

function App() {
  

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='gallery' element={<Gallery/>}/>
        <Route path='plans' element={<Plans/>}/>
        <Route path='trainers' element={<Trainers/>}/>
        <Route path='*' element={<NotFound/>}/>      
        <Route path='Payment' element={<Payment/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App

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
import Register from './Pages/register/register'
import './App.css'
import Footer from './components/Footer'
import Login from './Pages/loginPage/login'

function App() {
  
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:3001/api/data')
  //     .then(response => response.json())
  //     .then(data => setData(data))
  //     .catch(error => console.error(error));
  // }, []);

  // return (
  //   <div>
  //     {data.map(item => (
  //       <p key={item.id}>{item.name}</p>
  //     ))}
  //   </div>
  // );
 
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
        <Route path='Register' element={<Register/>}/>
        <Route path='Login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App

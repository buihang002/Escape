// import logo from './logo.svg';
import './App.css';
import Text from './components/modules/Header/Text/Text';
import Section from './components/modules/Body/Detail/Section/Section'
import Footer from './components/modules/Footer/Footer';
import Navbar from './components/modules/Header/Navbar/Navbar';

import About from './pages/About/About';
import Categories from './pages/Categories/Categories';
import Contact from './pages/Contact/Contact';
import { Route, Routes } from 'react-router-dom';
import Home from './components/modules/Body/Home/Home';
function App() {
  return (


    <>
<Navbar />
      <Routes>
 <Route path='/' element={<Home/>} />

<Route path='/about' element={<About />} />
<Route path='/categories' element={<Categories />} />
<Route path='/contact' element={<Contact />} />

</Routes>
        {/* <Navbar/> */}
        {/* <Text />
        <Section /> */}
        <div className=''>
        <Footer />
      </div>
    </>
  )
}

export default App;

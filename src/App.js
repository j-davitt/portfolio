import './App.css';
import HeaderComponent from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Components/About';

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

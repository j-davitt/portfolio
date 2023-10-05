import './App.css';
import HeaderComponent from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Components/About';

function App() {
  return (
    <>
    <div style={{ backgroundColor: '#C5C7C7' }}>

      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;

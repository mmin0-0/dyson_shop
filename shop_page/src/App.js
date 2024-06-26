import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import Cart from './pages/Cart.jsx';
import Detail from './pages/Detail.jsx';
import PdDetail from './pages/PdDetail.jsx';
import data from './data.js';
import './assets/scss/main.scss';

function App() {
  const [shoes] = useState(data);

  return (
    <div className="App" id="wrapper">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home shoes={shoes} />} />
        <Route path="*" element={<div>없는페이지</div>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail" element={<Detail shoes={shoes} />} />
        <Route path="/detail/:id" element={<PdDetail shoes={shoes} />} />
      </Routes>
    </div>
  );
}

export default App;

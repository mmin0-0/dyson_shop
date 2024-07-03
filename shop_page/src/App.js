import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Cart from './pages/Cart.jsx';
import Detail from './pages/Detail.jsx';
import PdDetail from './pages/PdDetail.jsx';
import PdList from './data.js';
import './assets/scss/main.scss';

function App() {
  const [product] = useState(PdList);

  return (
    <div className="App" id="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home product={product} />} />
        <Route path="*" element={<div>없는페이지</div>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail" element={<Detail />} />
        {/* <Route path="/detail/:id" element={<PdDetail product={product} />} /> */}
        <Route path="/detail/:id/:dataId" element={<PdDetail product={product} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import QuickMenu from './components/QuickMenu.jsx';
import Error from './pages/404_error.jsx';
import Home from './pages/Home.jsx';
import Cart from './pages/Cart.jsx';
import Detail from './pages/Detail.jsx';
import PdDetail from './pages/PdDetail.jsx';
import { pdList, benefit, tabMenu } from './data.js';
import './assets/scss/main.scss';

function App() {
  const [product] = useState(pdList);
  const price = (num) => {
    return num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <div className="App" id="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home product={product} />} />
        <Route path="*" element={<Error />} />
        <Route path="/cart" element={<Cart />} price={price} />
        <Route path="/detail" element={<Detail product={product} price={price} />} />
        <Route path="/detail/:id/:dataId" element={<PdDetail product={product} price={price} />} />
      </Routes>
      <Footer />
      <QuickMenu product={product} price={price} />
    </div>
  );
}

export default App;

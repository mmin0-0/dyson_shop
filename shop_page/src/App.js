import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Cart from './components/Cart.jsx';
import Detail from './components/Detail.jsx';

function App() {
  // const [shoes, setShoes] = useState(data);
  return (
    <div className="App" id="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;

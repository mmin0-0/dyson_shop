import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Modal from './components/Modal.jsx';
import QuickMenu from './components/QuickMenu.jsx';
import Error from './pages/404_error.jsx';
import Search from './pages/Search.jsx';
import Home from './pages/Home.jsx';
import Cart from './pages/Cart.jsx';
import Detail from './pages/Detail.jsx';
import PdDetail from './pages/PdDetail.jsx';
import './assets/scss/main.scss';

function App() {
  const price = (num) => {
    return num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  };

  const [isModalOpen, SetIsModalOpen] = useState(false);
  const toggleModal = ()=>{
    SetIsModalOpen(!isModalOpen);
  };
  // useEffect(()=>{
  //   if (!isModalOpen) {
  //     document.body.classList.add('fixed');
  //   } else {
  //     document.body.classList.remove('fixed');
  //   }
  // }, []);

  return (
    <div className="App" id="wrapper">
      <Header toggleModal={toggleModal} />
      {isModalOpen && <Modal isModalOpen={isModalOpen} toggleModal={toggleModal} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/search" element={<Search price={price} />} />
        <Route path="/cart" element={<Cart price={price} />} />
        <Route path="/detail" element={<Detail price={price} />} />
        <Route path="/detail/:id/:dataId" element={<PdDetail price={price} />} />
      </Routes>
      <Footer />
      <QuickMenu price={price} />
    </div>
  );
}

export default App;
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MediaProvider } from './MediaContext';
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

export default function App() {
  const price = (num) => {
    return num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  };

  const [isModalOpen, SetIsModalOpen] = useState(false);
  const toggleModal = ()=>{
    SetIsModalOpen(!isModalOpen);
  };
  
  const ScrollTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <div className="App" id="wrapper">
      <MediaProvider>
        <ScrollTop />
        <Header toggleModal={toggleModal} />
        {isModalOpen && <Modal isModalOpen={isModalOpen} toggleModal={toggleModal} />}
        <div id="wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error />} />
            <Route path="/search" element={<Search price={price} />} />
            <Route path="/cart" element={<Cart price={price} />} />
            <Route path="/detail" element={<Detail price={price} />} />
            <Route path="/detail/:id/:dataId" element={<PdDetail price={price} />} />
          </Routes>
        </div>
        <Footer />
        <QuickMenu price={price} />
      </MediaProvider>
    </div>
  );
}


import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './assets/scss/common.scss';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Cart from './components/Cart.jsx';

function App() {
  return (
    <div className="App" id="wrapper">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
    </div>
  );
}

export default App;

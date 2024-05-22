import logo from './logo.svg';
// import './App.css';
import './assets/scss/common.scss';
import Header from './components/Header.js';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/basket" element={<div>장바구니</div>} />
      </Routes>
      <div className="title">안녕하세요</div>
    </div>
  );
}

export default App;

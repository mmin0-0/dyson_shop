import { Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
// import './App.css';
import './assets/scss/common.scss';
import Header from './components/Header.jsx';
import Cart from './components/Cart.jsx';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route path="/cart" element={<div>왜안되는겨</div>}>카트탓</Route>
      </Routes>
      <Link to=""></Link>
      <div className="title">안녕하세요</div>
      <div style={{height: '2000px'}}>test</div>
    </div>
  );
}

export default App;

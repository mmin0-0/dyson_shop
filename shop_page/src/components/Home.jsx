import { useEffect, useState } from "react";
import pdList from '../data.js';
import '../assets/scss/layout/home.scss';

function Home(){
  const [shoes] = useState(pdList);

  return (
    <div id="wrap" className="home">
      <div className="wrap-inner">
        <div className="visual">메인비쥬얼</div>
        <button>sid</button>
        <div className="pd-list">
          {
            shoes.map((a, i) => {
              return <Product shoes={shoes[i]} i={i} />
            })
          }
        </div>
      </div>
    </div>
  )
}

function Product(props){
  return (
    <div className="pd-item" id={props.shoes.id}>
      <div className="img-wrap">
        <img src={'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'} alt="상품이미지" />
      </div>
      <div className="pd-info">
        <strong>{props.shoes.title}</strong>
        <p>{props.shoes.price}</p>
      </div>
    </div>
  )
}

export default Home;
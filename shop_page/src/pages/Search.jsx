import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { menuItems, keyword, pdList, benefit, tabMenu } from '../data.js';

function useQuery(){
  return new URLSearchParams(useLocation().search);
}

function Search({price}){
  const query = useQuery();
  const searchQuery = query.get('q');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (searchQuery) {
      const results = [];
      pdList.forEach(category => {
        category.data.forEach(product => {
          if(product.title.includes(searchQuery) || product.content.includes(searchQuery)){
            results.push({...product, categoryId: category.id});
          }
        });
      });
      setProducts(results);
    }
  }, []);
  
  return(
    <div id="wrap" className="search">
      <div className="wrap-inner">
        <div className="con-box">
          <div className="tit-wrap">
            <strong><span>"{searchQuery}"</span> 에 대한 검색결과</strong>
          </div>
          <div className="con-wrap">
            <div className="result-list">
              {
                products.length > 0 ? (
                  <ul>
                    {
                      products.map(product => (
                        <li key={product.id}>
                          <a href={`/detail/${product.categoryId}/${product.id}`}>
                            <div className="img-wrap">
                              <img src={product.pdImg} alt="product img"  className="org-img"/>
                              <img src={product.hoImg} alt="product img" className="hover-img" />
                            </div>
                            <div className="item-info">
                              <strong>{product.title}</strong>
                              <span>{product.content}</span>
                              {/* <p><span>{product.price}</span>원</p> */}
                              <p><span>{price(product.price)}</span>원</p>
                            </div>
                          </a>
                        </li>
                      ))
                    }
                  </ul>
                ) : (
                  <p>검색결과가 없습니다.</p>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search;
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { menuItems, keyword, pdList, benefit, tabMenu } from '../data.js';

function useQuery(){
  return new URLSearchParams(useLocation().search);
}

function Search(){
  const query = useQuery();
  const searchQuery = query.get('q');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (searchQuery) {
      const results = [];
      pdList.forEach(category => {
        category.data.forEach(product => {
          if(product.title.includes(searchQuery) || product.content.includes(searchQuery)){
            results.push(product);
          }
        });
      });
      setProducts(results);
    }
  }, [searchQuery]);
  
  return(
    <div id="wrap" className="search">
      <div className="wrap-inner">
        <h2>검새결과 {searchQuery}</h2>
        <ul>
        {products.map(product => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.content}</p>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
      </div>
    </div>
  )
}

export default Search;
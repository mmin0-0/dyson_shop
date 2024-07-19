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
      fetch(`/api/products?search=${searchQuery}`)
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.error('Error fetching products:', error));
    }
  }, [searchQuery]);
  
  return(
    <div id="wrap" className="search">
      <div className="wrap-inner">
        <h2>검새결과 {searchQuery}</h2>
        <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
      </div>
    </div>
  )
}

export default Search;
import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import ProductCard from '../component/ProductCard';
import mainVisual01 from '../../public/images/main-visual01.png';

const ProductAll = () => {
  const [productlist, setProductlist] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    let searchQuery = query.get('q') || "";
    // console.log("쿼리값은?", searchQuery);

    let url = `http://localhost:4000/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    
    //console.log(data);
    setProductlist(data);
  }
  useEffect( () => {
    getProducts()
  }, [query])

  return (
    <>
      <div id="mainVisual">
        <img src={mainVisual01} alt="" />
        <div className='mainVisual-info'>
          <p className="subject">Gold big hoops </p>
          <p className="price">$ 68,00</p>
          <button className='btn-viewProduct'>View Product</button>
        </div>
      </div>
      <div id="product-container">      
        <div className="subTop-title">
          <h2>Shop The Latest</h2>
          <Link className='viewAll'>View All</Link>
        </div>
        <div className='product-list'>
          <ul>
            {productlist.map( (menu) => (
              <ProductCard item={menu} key={menu.id} />
            ) )}          
          </ul>
        </div>
      </div>
    </>
  )
}

export default ProductAll
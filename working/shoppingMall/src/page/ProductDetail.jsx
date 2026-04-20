import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `http://localhost:4000/products/${id}`
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data);
    setProduct(data);
  }

  useEffect( () => {
    getProductDetail();
  },[]);

  return (
    <div id="sub-container">
      <div className='productDetail-container'>
        <div className='product-img'>
          <img src={product&&product?.img} alt="" />
        </div>

        <div className="product-info">
          {product&&product?.choice&&<p className='choice'>Md pick</p>}
          {product&&product?.new&&<p className='new'>New</p>}
          <p className="subject">{product&&product?.title}</p>
          <p className="price">$ {product&&product?.price}</p>
          <select name="" id="">
            <option value="" hidden>Color</option>
            {product&&product?.color.slice().map( (color,index) => (
              <option value="" key={index}>{color}</option>
            ) )}
          </select>

          <button className='btn-cart'>ADD TO CART</button>

          <ul className='sns-list'>
            <li className='heart'><FontAwesomeIcon icon={faHeart} /></li>
            <li><FontAwesomeIcon icon={faTwitter} /></li>
            <li><FontAwesomeIcon icon={faEnvelope} /></li>
            <li><FontAwesomeIcon icon={faFacebookF} /></li>
            <li><FontAwesomeIcon icon={faInstagram} /></li>
          </ul>
          
          <ul className="info-list">            
            <li>Weight <span>0.3 kg</span></li>            
            <li>Dimentions: <span>15 x 10 x 1 cm</span></li>
            <li>Colors: <span className='color'>{product&&product?.color.join(", ")}</span></li>
            <li>Material <span>Metal</span></li>
            <li>SKU: <span>12</span></li>
            <li>Categories: <span>Fashion, Style</span></li>
          </ul>
          
        </div>
      </div>
      {/* 
      
          
            <select>
              <option>Color: {product&&product?.color[0]}</option>
              {product&&product?.color.slice(1).map((color, index) => (
                <option key={index}>{color}</option>
              ))}
            </select>
         */}
    </div>

    
  )
}

export default ProductDetail
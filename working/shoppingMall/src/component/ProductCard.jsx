import React from 'react'
import { useNavigate} from 'react-router-dom';

const ProductCard = ( {item} ) => {
  const navigate = useNavigate();
  // console.log(item);
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  }

  return (

    <li key={item?.id} onClick={showDetail}>
      <img src={item?.img} alt="" />
      {item?.choice&&<p className="choice">Md pick</p>}
      {item?.new&&<p className='new'>New</p>}
      <p className="subject">{item&&item?.title}</p>
      <p className="price">$ {item&&item?.price}</p>
      <button className='addToCart'>ADD TO CART</button>
    </li>
  )
}

export default ProductCard
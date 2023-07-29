import React from 'react';
import { Favorite} from '@mui/icons-material';
import "./Card.css";
import Data from './Data';
import { useNavigate } from 'react-router-dom';

const Card = ({offerPrice,image,name,actualPrice,handleAddProduct,productView,itemData,showCartPopup}) => {
    const navigate = useNavigate();

    const navigateToProduct = () => {
        navigate('/product');
      };


return (
    <div className='card'>
        <div className='card__heart'>
            <Favorite/>
        </div>
        <div className='card__image'>
            <img onClick={navigateToProduct}  src={image} alt=""/>
        </div>
        <div className='productDet'>
        <div className='card__details'>
            <p >{name}</p>
            <span className='"span1'>₹{offerPrice}</span>
            <span className='span2'>₹{actualPrice}</span>
            <span className='span3'>56%</span>
        </div>
        <div className='button'>

        <button className='buttonCart' onClick={()=>handleAddProduct(itemData)}> Add to cart </button>
        {showCartPopup && (
        <div className="cart-popup">
          <p>Added to cart!</p>
        </div>
        )}
      

        </div>
        
        <div className='card__size'>
            <p>size<span>6,7,8,9</span></p>

        </div>
        </div>

    </div>
  )
}
export default Card;

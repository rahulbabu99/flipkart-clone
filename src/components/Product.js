import React from 'react'
import Header from './Header'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import "./Product.css"
import { useNavigate } from 'react-router-dom';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Product({/*{addProduct}*/ handleAddProduct,image,itemData}) {
  const navigate = useNavigate();

    const navigateToOrder = () => {
        navigate('/orders');
      };
  return (
    <div className='productDetails'>
      <Header/>
      <div className='details'>
        <div className='product'>
          <div className='singleImg' >
          <img  className='singleImage' src= "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/192781/01/sv01/fnd/PNA/fmt/png/Uproar-Charlotte-ASG-Fade-Basketball-Shoes" />
           </div>
            <div className='btn'>
              <button onClick={()=>handleAddProduct(itemData)} className='cartBtn'>Add to Cart</button>
              <button onClick={navigateToOrder} className='buyBtn'>Buy</button>
            </div>
        </div>
        <div className='productInfo'>
          <p>prodcut</p>
          <p>price</p>
          <div className='offers'>
            <p>Available Offers</p>
            <div className='offer1'>
              <LocalOfferIcon/>
              <p>Bank Offer10% off on ICICI Bank Credit Card Transactions, up to ₹1250, on orders of ₹5,000 and aboveT&C</p>
            </div>
            <div className='offer1'>
    
              <LocalOfferIcon/>
            <p>Bank Offer10% off on ICICI Bank Credit Card EMI Transactions, up to ₹1250, on orders of ₹5,000 and aboveT&C</p>
            </div>
            <div className='offer1'>
    
              <LocalOfferIcon/>
            <p>Bank Offer10% off on IDBI Bank Debit and Credit Card Transactions, up to ₹500. On orders of ₹1,500 and aboveT&C</p>
            </div>
            <div className='offer1'>
    
              <LocalOfferIcon/>
            <p>Buy this Product and Get Extra ₹500 Off on Bikes & ScootersT&C</p>
            </div>
            <div className='offer1'>
    
              <LocalOfferIcon/>
            <p>Bank Offer10% off on SBI Bank Credit Card Transactions, up to ₹1250, on orders of ₹5,000 T&C</p>
            </div>

          </div>

        </div>
    </div>
  </div>
  )
}

export default Product
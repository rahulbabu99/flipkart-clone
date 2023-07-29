import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Header.css';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import MoreT from './MoreT';
import { LoginT } from './LoginT';
import "tippy.js/themes/light.css";
import { useNavigate } from 'react-router-dom';
import { Search } from '@mui/icons-material';


function Header({setSearch,count}) {
    const navigate = useNavigate();

    const navigateToHome=()=>{
        navigate('/')
    }

    const navigateToCart = () => {
      navigate('/cart');
    };
    const navigateToProduct = () => {
        navigate('/product');
      };

  return (
    <div className='header'>
        <div></div>  
        <div className='header__first' onClick={navigateToHome}>
            <img src='flipkart-plus.png' alt="flipkart-logo"/>
            <div className='header__first1'>
                <span style={{
                    fontSize:'11px',
                    color:'white',
                    fontStyle:'italic'}}>Explore
                </span>
                <span style={{
                    fontSize:'11px',
                    color:'#f9e107',
                    fontStyle:'italic'}}>Plus
                </span>
                <span>
                    <img width='10' src="plus.png" alt=""></img>
                </span>
            </div>
        </div>
        <div className='header__second'>
            <input type="text" placeholder='Search for products,brand and more' onChange={(event)=>{setSearch(event.target.value)}} />
            <SearchIcon/>
        </div>
        <div className='header__third'>
            <Tippy theme='light' content={<LoginT/>}
            interactive={true}>

            <button onClick={navigateToProduct}>Login</button>

            </Tippy>
        </div>
        <div className='header__fourth'>
            <Tippy theme='light' content={<MoreT/>}
            interactive={true}
            >

            <span>More</span>
            </Tippy>
            <ExpandMoreIcon/>
        </div>
        <div className='header__fifth' onClick={navigateToCart}>
            <ShoppingCartIcon  />
            <span>  <p>cart</p> <p>{count}</p> </span>
           
        </div>
    </div>
  )
}

export default Header
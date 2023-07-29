import React from 'react'
import Card from "./Card"
import Header from './Header'
import Data from  "./Data"
import { useState } from 'react'
import "./Home.css"
import Footer from './Footer'


function Home({handleAddProduct,productView,showCartPopup,count}) {
    /*const {itemProduct} =Data;*/

    const[search,setSearch]=useState("");

    
  return (
    <div>
        <Header setSearch={setSearch} count={count}/>
        <div className='banner'>
                    <img   src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/72a2a67f18ff327e.jpg?q=50" />
                    
                    
                </div>
    <div className='items' style={{display:"flex", flexWrap:"wrap",}}>

        { Data.filter((item) => {
          if(search===""){
            return item;
          }
          else if(item.name.toLowerCase().includes(search.toLowerCase()))
          {
            return item;
          }
          return item;
        
        }) 
        .map((item) => (
          <Card
          image={item.image}
          name={item.name}
          rating={item.rating}
          actuaLPrice={item.actualPrice}
          offerPrice={item.offerPrice}
          /*itemProduct={itemProduct}*/
          handleAddProduct={handleAddProduct}
          productView={productView}
          itemData={item}
          showCartPopup={showCartPopup}
          />

        ))}
    </div>
    <Footer/>
    </div>
  )
}

export default Home
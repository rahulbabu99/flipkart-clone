import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Cart from "./components/Cart"
import {Data} from  "./components/Data"
import { Card } from "./components/Card";
import Header from "./components/Header";
import { useState } from "react";
//import Signup from "./components/Signup"
import Product from "./components/Product";
import Home from "./components/Home";
import { useNavigate } from "react-router-dom";
import Order from "./components/Order";
//import { auth } from "./firebase";
function App() {
  /*const {itemProduct} =Data;*/
  const [itemCart, setItemCart] =useState([]);

  const[count,setCount]= useState("")
  /*const [addProduct,setAddProduct]=useState([])*/
 /* const [user,setUser]=useState()*/

 const[remove,setRemove]= useState([])
 const [showCartPopup, setShowCartPopup] = useState(false);

 /*const addToCart=(productItem)=>{
  if (!list.find((item) => item.id === productItem.id)) {
  setList([...list,productItem])}
  console.log(productItem);
}*/
  const handleAddProduct=(product)=>{
    
    if (!itemCart.find((item) => item.id === product.id)) {
    setItemCart([...itemCart,{...product}])}
    setCount(count+1)

  }
  /*const productView=(products)=>{
    setAddProduct([...addProduct,...products])
  }*/


 
  return (
  <div className="App">
        <Router>
            <Routes>
              <Route exact path='/cart'  element={<Cart itemCart={itemCart}/>} />
              <Route exact path='/product' element={<Product handleAddProduct={handleAddProduct} /*addProduct={addProduct}*/   />}/>
              <Route path='/' element={<Home handleAddProduct={handleAddProduct} showCartPopup={showCartPopup} count={count}/*productView={productView}*/  />  }/>
              <Route exact path='/orders'  element={<Order/>} />
            </Routes>
        </Router> 
      
    </div>
  );
}

export default App;

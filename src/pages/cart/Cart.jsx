import { useContext } from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import { myContext } from '../../context/Context';
import { Link } from 'react-router-dom';
import './Cart.scss';

const Cart = () => {
  const {basket, remove, calculateTotalPrice, incr, decr} = useContext(myContext);

  if(!Array.isArray(basket) || basket.length === 0){
    return (
      <>
      <Navbar />
        <div className="cart-con">
          <h1>Your cart is empty :(</h1>
          <Link to="/shopAll"><button>Shop Now</button></Link>
        </div>
        <Footer />
      </>
    )
  } 
  return (
    <div>
      <Navbar />
      <div className='cart'>
      {basket.map((item) => {
        return (
          <div key={item.id} className="items-con">
            {/* items */}
            <div className="item">
            <Link to={`/product/${item.id}`}><img src={item.image} alt={item.name} /></Link>
              <h3 className="item-name">{item.name}</h3>
              <h4 className="price">${item.price}</h4>
              <div className="quantity">
              <h6 onClick={()=>decr(item.id, item.price)}>-</h6>
              <h5>{item.quantity}</h5>
              <h6 onClick={()=>incr(item.id)}>+</h6>
              </div>
              <button className="remove-btn" onClick={()=>remove(item.id)}><i className="fa-solid fa-trash"></i></button>
            </div>
          </div>
        );
      })}
      <div className="checkout">
        <div className="total-price-detail">
          <h3>Total Price: <span>${calculateTotalPrice()}</span></h3>
          <button className="checkout-btn" onClick={()=> alert("Checkout")} >Checkout</button>
        </div>
      </div>

      
    </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Cart

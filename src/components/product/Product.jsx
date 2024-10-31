import './Product.scss';
import { Link } from 'react-router-dom';
import { myContext } from '../../context/Context';
import { useContext } from 'react';


const Product = (item) => {
  const {addToCart, fav} = useContext(myContext);
  return (
    <>
            {/* html structure  */}
            <div className="product">
            <div className="product-img">
              <Link to={`/product/${item.id}`} ><img onClick={window.scrollTo(0,0)} src={item.image} alt={item.name} /></Link>
            </div>
            <div className="product-info">
              <h3>{item.name}</h3>
              <h6>{item.des}</h6>
              <p>${item.price}</p>

                <div className="cta">
                  <button className="add" onClick={() =>addToCart(item.id, item.name, item.price, item.image)}>Add to cart<i className="fa-solid fa-cart-shopping"></i></button>
                  <i id='fav' className="fa-regular fa-heart fav" onClick={()=>fav()} ></i>
                </div>

            </div>
          </div>
          </>
  )
}

export default Product

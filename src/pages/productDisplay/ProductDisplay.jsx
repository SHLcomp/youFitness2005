import './ProductDisplay.scss';
import { myContext } from '../../context/Context.jsx';
import { useContext } from 'react';
import Sizes from '../../components/sizes/Sizes.jsx';
import Reviews from '../../components/reviews/Reviews.jsx';
import Relevant from '../../components/relevant/Relevant.jsx';
import SubImg from './SubImg.jsx';

const ProductDisplay = (item) => {
  const {searchProduct} = item;
  const { addToCart } = useContext(myContext);
  return (
    <div>
      {/* to display the products, we need a filtering function that returns the product display, to target the chosen item's id */}
      {/* this page should only use arguments, as a blue print, then passing the values via props */}
      <div className="all">
        <div className="chosen-item">


          <div className="left">
            <img src={searchProduct.image} alt="" />
            <div className="sub-imgs">
            <SubImg sub_images = {searchProduct.sub_images} />
            </div>
          </div>

          <div className="right">
            <div className="item-info">
              <h2>{searchProduct.name}</h2>
              <h4>${searchProduct.price}</h4>
              <p>{searchProduct.long_des}</p>
              <div className="sizes">
                {/* comp here */}
                {/* here I loop through each product's available sizes and display them */}
                <Sizes sizes={searchProduct.sizes}/>
              </div>
              <div className="ctas">
                  <button onClick={() =>addToCart(searchProduct.id, searchProduct.name, searchProduct.price, searchProduct.image)}>Add to cart<i className="fa-solid fa-cart-shopping"></i></button>
              </div>
              
            </div>
          </div>



        </div>
      </div>

      {/* reviews and relevant products */}
      <div className="rev-sec">
      <Reviews reviews={searchProduct.reviews}/>
      </div>

      <div className="relevant-products">
        <h1>Relevant Products</h1>
        <Relevant relevant={searchProduct.relevant}/>
      </div>
    </div>
  )
}

export default ProductDisplay

import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import data from '../../assets/data/data.js';
import Product from "../../components/product/Product.jsx";
import './ShopAll.scss'
import FilterOp from "../../components/filterOptions/FilterOp.jsx";

const ShopAll = () => {
  return (
    <div className="shopAll">
        <Navbar/>
          {/* map over all the products that we have, easy */}

          <div className="conatiner">
          <div className="left">
            <FilterOp />

        </div>


          <div className="right">
          <div className="shop">
          {data.map((item, i)=>{
            return (
              <div className="container">
                <Product key={i} category={item.category} image={item.image} name={item.name} price={item.price} des={item.des} id={item.id} />
              </div>
            )
          })}
          </div>

          </div>
          </div>
        <Footer/>
    </div>
  )
}

export default ShopAll

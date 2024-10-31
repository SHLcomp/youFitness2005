import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import data from "../../assets/data/data";
import Product from "../../components/product/Product";
import './ShopCats.scss';
import FilterOp from "../../components/filterOptions/FilterOp";

const ShopCats = (product) => {
  return (
    <div>
      {/* map over all the products and return an if stmt, that returns the product element with the chosen category...mid */}
      <Navbar />
      <div className="container">
        {/* filtering options */}

        <FilterOp />

      <div className="shop2">
      {data.map((item,i) => {
          if (product.category === item.category)  {
            return (
              <div className="shopAll">
                <Product key={i} id={item.id} name={item.name} image={item.image} price={item.price} des={item.des} category={item.category}/>
              </div>
            )
          }
          else{
            return null;
          }
      })}
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default ShopCats

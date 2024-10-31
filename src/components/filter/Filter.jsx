import { useParams } from "react-router-dom"
import data from "../../assets/data/data";
import ProductDisplay from "../../pages/productDisplay/ProductDisplay";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Filter = () => {
  const {productId} = useParams();
  const searchProduct = data.find((item)=> item.id === Number(productId))
  return (
    <div>
      <Navbar/>
      <ProductDisplay searchProduct={searchProduct}/>
      <Footer/>
    </div>
  )
}

export default Filter

import './Navbar.scss';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { myContext } from '../../context/Context.jsx';

const Navbar = () => {
  const {openBurg} = useContext(myContext);
  //for a dynamic cartCount
  const {basket} = useContext(myContext); 
  //I was stupidly stuck with an error just cuz i imported basket with [] not {} :)
  const [cartCount, setCartCount] = useState(0);
  //updating the cartCount dynamically
  useEffect(()=>{
    const count = basket.map((item)=> item.quantity).reduce((x, y)=> x+y, 0);
    setCartCount(count);
  }, [basket]); //recalculate the basket updates


  return (
    <div>
      <section className="header">
        <nav className="navbar">
            <ul>
              <div className="main-navs">
                <Link to="/"><img className="nav-icons logo-image" src={logo}/></Link>
                <i id='burg' className="fa-solid fa-bars" onClick={()=>openBurg()}></i>
              </div>
                <Link to="/" className='a'><li className="nav-icons">Home</li></Link>
                <Link to="/womens" className='a'><li className="nav-icons">Women&apos;s</li></Link>
                <Link to="/mens" className='a'><li className="nav-icons">Men&apos;s</li></Link>
                <Link to="/kids" className='a'><li className="nav-icons">Kid&apos;s</li></Link>
                <Link to="/shopAll" className='a'><li className="nav-icons">All Categories</li></Link>
                <Link to="/contact" className='a'><li className="nav-icons">Contact Us</li></Link>
                <Link to="/about" className='a'><li className="nav-icons">About Us</li></Link>
            </ul>
            
            
          
        <div className="other-uls">
        <ul>
            <li className="link"><i className="fa-solid fa-magnifying-glass"></i></li>
            <Link to="/cart" className='a'><li className="link"  ><i id="cartCount" className="fa-sharp fa-solid fa-bag-shopping">({cartCount})</i></li></Link>
          
        </ul>
        </div>
        </nav>

        
    </section>
    </div>
  )
}

export default Navbar

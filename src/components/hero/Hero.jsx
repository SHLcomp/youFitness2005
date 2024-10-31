import { Link } from "react-router-dom";
import womenImg from '../../assets/female-1.2.jpeg';
import menImg from '../../assets/male-1.jpg';
import './Hero.scss';



const Hero = () => {
  return (
    <div className="hero">
      <div className="phrase">
        <h2>THEY CALL IT FITNESS, WE SAY LIFESTYLE</h2>
      </div>

      <div className="cat-img">

        <div className="women">
          <img src={womenImg} alt="women's shopping" />
          <div className="info">
            <Link to="/womens"><button>Shop for Women&apos;s</button></Link>
          </div>
        </div>

        <div className="men">
          <img src={menImg} alt="men's shopping" />
          <div className="info">
            <Link to="/mens"><button>Shop for Men&apos;s</button></Link>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Hero

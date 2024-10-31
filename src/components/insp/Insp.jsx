import inspImg from '../../assets/inspirational4.jpg';
import './Insp.scss';
import { Link } from 'react-router-dom';

const Insp = () => {
  return (
    <div className='insp' id='insp'>
      <div className="insp-img">
            <img src={inspImg} alt="" />
          
            <div className="insp-img-text">
                <h1>Inspirational</h1>
                <p>Clothing</p>
                <Link to="/shopAll"><button className="shop-now">Shop Now</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Insp

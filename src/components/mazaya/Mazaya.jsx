import './Mazaya.scss';
import boxImg from '../../assets/box.jpg'


const Mazaya = () => {
  return (
    <div className="con">
      <div className="mazaya">
      <div className="boxes text-center">
        {/* first */}
        <div className="cat-box">
          <div className="box-img">
            <img src={boxImg} alt="" />
          </div>
          <div className="box-text">
            <i className="fa-solid fa-earth-asia icon-size"></i>
            <h2>Worldwide Shipping</h2>
            <p>
              Shop YouFitness from anywhere in the world. Worldwide shipping
              available to anyone outside of the U.S.
            </p>
          </div>
        </div>
        {/* other */}
        <div className="cat-box">
          <div className="box-img">
            <img src={boxImg} alt="" />
          </div>
          <div className="box-text">
            <i className="fa-solid fa-thumbs-up icon-size"></i>
            <h2>Top Quality</h2>
            <p>
              Only the best assortment of materials & athletic apparel to choose
              from, to suit men & women of all ages.
            </p>
          </div>
        </div>

        {/* other */}
        <div className="cat-box">
          <div className="box-img">
            <img src={boxImg} alt="" />
          </div>
          <div className="box-text">
            <i className="fa-sharp fa-solid fa-coins icon-size"></i>
            <h2>The Best Offers</h2>
            <p>
              Competetive pricing and discounted options available for all of
              our inventory. Get in touch with us today!
            </p>
          </div>
        </div>

        {/* other */}
        <div className="cat-box">
          <div className="box-img">
            <img src={boxImg} alt="" />
          </div>
          <div className="box-text">
            <i className="fa-solid fa-lock icon-size"></i>
            <h2>Secure Payments</h2>
            <p>
              Our site is encrypted to ensure secure payment and safety of your
              credit card & personal information.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Mazaya;

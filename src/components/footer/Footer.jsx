import './Footer.scss';


const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container">
      
      
        <div className="row">
            <div className="footer-col">
                <h4>company</h4>
                <ul>
                    <li>about us</li>
                    <li>we&apos;re hiring</li>
                    <li>contact us</li>
                    <li>our services</li>
                </ul>
            </div>


            <div className="footer-col">
                <h4>get help</h4>
                <ul>
                    <li>FAQ</li>
                    <li>customer support</li>
                    <li>privacy policy</li>
                    <li>affiliate program</li>
                </ul>
            </div>


            <div className="footer-col">
                <h4>policy</h4>
                <ul>
                    <li>shipping</li>
                    <li>returns</li>
                    <li>order status</li>
                    <li>payment options</li>
                </ul>
            </div>


            <div className="footer-col">
                <h4>follow us</h4>
                <div className="social-links">
                    <ul>
                    <li><i className= "fab fa-facebook-f"></i></li>
                    <li><i className= "fab fa-twitter"></i></li>
                    <a href="https://www.instagram.com/eng.sarahbader648/" className="a"><li><i className= "fab fa-instagram"></i></li></a>
                    <li><i className= "fab fa-linkedin-in"></i></li>
                    </ul>
            </div>
           
        </div>
    </div>
    </div>
    </footer>
  )
};

export default Footer;

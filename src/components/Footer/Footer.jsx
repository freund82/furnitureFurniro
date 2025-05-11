import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-columns">
          <div className="footer-column">
            <h2 className="footer-title">Furniro</h2>
            <p className="footer-address">400 University Drive Suite 200 Coral Gables, <br></br>
                FL 33134 USA</p>
          </div>
          <div className="footer-column">
            <h5 className="footer-innerTitle">Links</h5>
            <p className="footer-link"><Link to="/">Home</Link></p>
            <p className="footer-link"><Link to="/shop">Shop</Link></p>
            <p className="footer-link"><Link to="/about">About</Link></p>
            <p className="footer-link"><Link to="/contact">Contact</Link></p>
          </div>
          <div className="footer-column">
            <h5 className="footer-innerTitle">Help</h5>
             <p className="footer-link"><Link to="/paymentOptions">Payment Options</Link></p>
            <p className="footer-link"><Link to="/Returns">Returns</Link></p>
            <p className="footer-link"><Link to="/privacy">Privacy</Link></p>
          </div>
          <div className="footer-column">
            <h5 className="footer-innerTitle">Newsletter</h5>
            <input className="footer-input" type="email" placeholder="Enter Your Email Address" /><span className="footer-button" >Subscribe</span>
          </div>
        </div>
        <div class="footer-copyright">
          <p>© 2023 furniro. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
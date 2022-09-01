import './Footer.css';

function Footer() {
    return (
        <footer className="footer paddingtop7">
          <div className="container">
        
            <div>
              <h1>Delivery</h1>
              <p>
                Order Products Faster Easier
              </p>
            </div>
            <div>
              <h1>Our Services
              </h1>
              <div className="nav-list">
                <ul className="bottomlist">
                <li>Pricing</li>
                <li>Discounts</li>
                <li>Report a bug</li>
                <li>Terms of Service</li>
              </ul>
              </div>
            </div>
            <div>
              <h1>Our Company
              </h1>
              <div className="nav-list">
                <ul className="bottomlist">
                <li>Blog</li>
                <li>Our mission</li>
                <li>Get in touch</li>
              </ul>
              </div>
            </div>
            <div className="last-text">
              <p>Bedimcode. All right reserved</p>
            </div>
          </div>
        </footer>
    )
}

export default Footer;









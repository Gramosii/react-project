import './Header.css';

function Header() {
    return (
    <div className='navbar'>
      <div className="container">
        <div className="nav-title">
          <h1>Delivery</h1>
        </div>

        <div className="nav-list">
          <ul className="ul-list1">
            <li>Home</li>
            <li>About us</li>
            <li>Services</li>
            <li>Contact us</li>
            <button id="button1">Order Now!</button>
          </ul>
        </div>
      </div>
    </div>
    )
}

export default Header;
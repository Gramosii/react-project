import './Firstrow.css';
import firstRowImage from '../../images/Group.png'

function Firstrow() {
    return (
        <div className="firstrow">
        <div className="container margintop">
          <div className="content">
            <h1>Order Products Faster Easier</h1>
            <p>
              Order your favorite foods at any time and we will deliver them right
              to where you are.
            </p>
            <button id="button">Get started!</button>
          </div>
  
          <div>
            <img src={firstRowImage} alt="" />
          </div>
        </div>
      </div>
    )
}

export default Firstrow;
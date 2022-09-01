import './Fifthrow.css';
import FifthrowImage from '../../images/Group 13.png'
import FifthrowImageapple from '../../images/Vector 5.png'
import FFifthrowImagesamsung from '../../images/Vector 6.png'



function Fifthrow() {
    return (
        <div className="fifthrow paddingtop4">
        <div className="container">
          <div>
            <img src={FifthrowImage} alt="" />
          </div>
          <div className="content">
            <h1>Find Out a Little More About Us</h1>
            <p>
              We are a company dedicated to the distribution of products by
              delivery to your home or to the place where you are, with the best
              quality of delivery.
            </p>
            <button id="button">
              <img src={FifthrowImageapple} alt=""></img><span> </span>App store
            </button>
            <button id="button">
            <img src={FFifthrowImagesamsung} alt=""></img><span> </span>Google play
            </button>
          </div>
        </div>
      </div>
    )
}

export default Fifthrow;
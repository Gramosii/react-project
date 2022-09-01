import './Secondrow.css';
import SecondRowImage from '../../images/Group 17.png'

function Secondrow() {
    return (
        <div className="secondrow paddingtop">
        <div className="container">
          <div>
            <img src={SecondRowImage} alt="" />
          </div>
          <div className="content">
            <h1>Find Out a Little More About Us</h1>
            <p>
              We are a company dedicated to the distribution of products by
              delivery to your home or to the place where you are, with the best
              quality of delivery.
            </p>
          </div>
        </div>
      </div>
    )
}

export default Secondrow;
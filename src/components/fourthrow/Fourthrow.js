import './Fourthrow.css';
import Fourthrowimage from '../../images/Group 3.png'
import Fourthrowimage4 from '../../images/Group 4.png'
import Fourthrowimage5 from '../../images/Group 5.png'




function Fourthrow() {
    return (
        <div className="fourthrow paddingtop3">
        <div className="container">
          <div className="boxes">
            <h2 className='textsize'>Payment Done</h2>
            <img src={Fourthrowimage} alt="" />
            <p>Pay with a Visa or PayPal card and without much ado.</p>
            <h2>Learn More</h2>
          </div>
  
          <div className="boxes">
            <h2 className='textsize'>Find Your Product</h2>
            <img src={Fourthrowimage4} alt="" />
            <p>We offer sale of products through the Internet.</p>
            <h2>Learn More</h2>
          </div>
  
          <div className="boxes">
            <h2 className='textsize'>Product Received</h2>
            <img src={Fourthrowimage5} alt="" />
            <p>In our app you can see the delay time of your order.</p>
            <h2>Learn More</h2>
          </div>
        </div>
      </div>
    )
}

export default Fourthrow;
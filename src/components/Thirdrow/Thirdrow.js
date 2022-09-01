import './Thirdrow.css';
import ThirdRowImage from '../../images/Group 6.png'




function Thirdrow() {
    return (
        <div className="thirdrow paddingtop2">
        <div className="container">
          <div className="content">
            <h1>Your Safety Is Important</h1>
            <p>
              When your order reaches you, we have the health safety protocols, so
              that you are protected from any disease. Watch the video of how the
              delivery is made.
            </p>
          </div>
  
          <div>
            <img src={ThirdRowImage} alt="" />
          </div>
        </div>
      </div>
    )
}

export default Thirdrow;
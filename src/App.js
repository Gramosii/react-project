import './reset.css';
import './App.css';
import Header from './components/Header/Header';
import Firstrow from './components/Firstrow/Firstrow';
import Secondrow from './components/Secondrow/Secondrow';
import Thirdrow from './components/Thirdrow/Thirdrow';
import Servicespart from './components/servicespart/Services';
import Fourthrow from './components/fourthrow/Fourthrow';
import Fifthrow from './components/Fifthrow/Fifthrow';
import Sixthrow from './components/Sixthrow/Sixthrow';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Firstrow></Firstrow>
      <Secondrow></Secondrow>
      <Thirdrow></Thirdrow>
      <Servicespart></Servicespart>
      <Fourthrow></Fourthrow>
      <Fifthrow></Fifthrow>
      <Sixthrow></Sixthrow>
      <Footer></Footer>
    </div>
  );
}

export default App;

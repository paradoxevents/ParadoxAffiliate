import './App.css';
import { Footer } from './components/Footer';
import { Signup } from './components/Signup';
import { Subtitle1 } from './components/Subtitle1';
import { Subtitle2 } from './components/Subtitle2';
import { Title } from './components/Title';
import Popup from './components/Popup';
import { useState, useEffect} from "react";
import tglogo from './image/telegram_darwin.png';

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [timedPopup, setTimedPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 2000);
  }, []);

  return (
    <div className="App">
      <main>
        <Title></Title>
        <div className="subtitle-box">
        <Subtitle1></Subtitle1>
        <Subtitle2></Subtitle2>
        </div>
        <Signup></Signup>
        <br></br>
       
        <buttom onClick={() =>setButtonPopup(true)} className="submit-button">SUBMIT!</buttom>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3 className="popup-heading">Congratulations!</h3>
          <p className="popup-content">Youve decided to make money by joining the 
  Paradox
Affiliate Program!

Join Our Paradox Affiliate Telegram group for more info!</p>
        </Popup>
        
        <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
          <img scr="./image/paraffiliate.png"/> 
          <h3 className="popup-heading">Congratulations!</h3>
          <div className="popup-content">
          <p>
          <span>For Joining Up The</span><br/>
          <span>Paradox</span><br/>
          <span>Affiliate Program!</span>
          </p>
          <p>Every 24 hours Your Payment will be submitted Join Our Paradox Affiliate Telegram group for more info!</p>
          </div>
          <img src={tglogo} className="TG-logo" />

        </Popup>
        <Footer></Footer>
        </main>
    </div>
  );
}

export default App;

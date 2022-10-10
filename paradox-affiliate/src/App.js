import './App.css';
import { Footer } from './components/Footer';
import { Signup } from './components/Signup';
import { Subtitle1 } from './components/Subtitle1';
import { Subtitle2 } from './components/Subtitle2';
import { Title } from './components/Title';
import Popup from './components/Popup';
import { useState, useEffect} from "react";

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
          <h3>Congratualations!</h3>
        </Popup>
        
        <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
          <img scr="./image/paraffiliate.png"/> 
          <h3>Congratualations!</h3>
          <p>Youve decided to make money by joining the 
  Paradox
Affiliate Program!

Join Our Paradox Affiliate Telegram group for more info!</p>
        </Popup>
        <Footer></Footer>
        </main>
    </div>
  );
}

export default App;

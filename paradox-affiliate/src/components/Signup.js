import "../App.css";

export function Signup () {
  return (
    <div className="check-box">
        <div className="check-text-box">
        <div className="check-box-text">
        <p>HUBOI EXCHANGE</p>
        <p>SIGN UP LINK</p>  
        <p><input type="checkbox"></input>SIGNED UP!</p>
        </div>
        </div>

        <div className="check-text-box">
        <div className="check-box-text">
        <p>BYBIT EXCHANGE</p>
        <p>SIGN UP LINK</p>
        
        <p><input type="checkbox"></input>SIGNED UP!</p>
        </div>
        </div>

        <div className="check-text-box">
        <div className="check-box-text">
        <p>PARADOX TELEGRAM</p>
        <p>JOIN LINK</p>
        <p><input type="checkbox"></input>JONED UP!</p>
        </div>
        </div>

        <div className="check-text-box">
        <div className="check-box-text">
        <p>EMAIL ADDRESS</p>
        <p><input className="input-box" type="text" placeholder="INSERT EMAIL ADDRESS"></input></p>
        <p><input type="checkbox"></input>DONE!</p>
        </div>
        </div>

        </div>
  )
};
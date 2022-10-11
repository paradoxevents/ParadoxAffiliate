import React from 'react'
import "./Popup.css"
import logo from "../image/paraffiliate.png";
import tglogo from "../image/telegram_darwin.png";

function Popup(props) {
  return (props.trigger) ? (
    <div className='popup'>
      <div className="popup-inner">
      <img src={logo} className="app-logo" alt='logo'/>
        <button className="close-btn" onClick={()=> props.setTrigger(false)}>close</button>
        { props.children }
        <img src={tglogo} className="TG-logo" alt='thlogo' />
      </div>
    </div>
  ) : ""; 
}

export default Popup
 
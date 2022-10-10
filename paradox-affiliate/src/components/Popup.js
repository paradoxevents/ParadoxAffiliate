import React from 'react'
import "./Popup.css"
import logo from "../image/paraffiliate.png";

function Popup(props) {
  return (props.trigger) ? (
    <div className='popup'>
      <div className="popup-inner">
      <img src={logo} className="app-logo"/>
        <button className="close-btn" onClick={()=> props.setTrigger(false)}>close</button>
        { props.children }
        
      </div>
    </div>
  ) : ""; 
}

export default Popup
 
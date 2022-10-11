import "./Signup.css";
import React from "react";

export function Signup () {
  return (
    <div className="check-box">
        <div className="check-text-box">
        <div className="check-box-text">
        <p className="text">HUBOI EXCHANGE</p>
        <p className="text">SIGN UP LINK</p>  
        <p className="text"><input type="checkbox"></input>  SIGNED UP!</p>
        </div>
        </div>

        <div className="check-text-box">
        <div className="check-box-text">
        <p className="text">BYBIT EXCHANGE</p>
        <p className="text">SIGN UP LINK</p>
        
        <p className="text"><input type="checkbox"></input>  SIGNED UP!</p>
        </div>
        </div>

        <div className="check-text-box">
        <div className="check-box-text">
        <p className="text">PARADOX TELEGRAM</p>
        <p className="text">JOIN LINK</p>
        <p className="text"><input type="checkbox"></input> JONED UP!</p>
        </div>
        </div>

        <div className="check-text-box">
        <div className="check-box-text">
        <p className="text">EMAIL ADDRESS</p>
        <p className="text"><input className="input-box" type="text" placeholder="INSERT EMAIL ADDRESS"></input></p>
        <p className="text"><input type="checkbox"></input>DONE!</p>
        </div>
        </div>

        </div>
  )
};
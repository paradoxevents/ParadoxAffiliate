import logo from "../image/paraffiliate.png";
import youtube from "../image/youtube.png";
import twitter from "../image/twitter.png";
import discord from "../image/discord.png";
import twich from "../image/twich.png";
import "./Footer.css";
import React from "react";

export function Footer() {
  return (
  <div className="footer">
    <div className="paralogo">
      <img src={logo} className="app-logo" alt="logo"/>
      <p>Terms and Conditions</p>
      <p>Privacy Policy</p>
    </div>
    <div className="sociallist">
      <div>
      <img src={youtube} className="socialicon" alt="youtube"/>
      <img src={discord} className="socialicon" alt="discord"/>
      <img src={twich} className="socialicon" alt="twich"/>
      <img src={twitter} className="socialicon" alt="twitter"/>
      </div>
      <p>Paradox © 2022, All rights reserved</p>
    </div>
  </div>
    )

};



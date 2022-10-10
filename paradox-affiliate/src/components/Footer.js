import logo from "../image/paraffiliate.png";
import youtube from "../image/youtube.png";
import twitter from "../image/twitter.png";
import discord from "../image/discord.png";
import twich from "../image/twich.png";
import "../App.css";

export function Footer() {
  return (
  <div className="footer">
    <div className="paralogo">
      <img src={logo} className="app-logo"/>
      <p>Terms and Conditions</p>
      <p>Privacy Policy</p>
    </div>
    <div className="sociallist">
      <div>
      <img src={youtube} className="socialicon"/>
      <img src={discord} className="socialicon"/>
      <img src={twich} className="socialicon"/>
      <img src={twitter} className="socialicon"/>
      </div>
      <p>Paradox © 2022, All rights reserved</p>
    </div>
  </div>
    )

};



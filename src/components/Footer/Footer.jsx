import React from 'react'
import "./footer.css"
import logo from "../../images/logo.svg"
// import close from "../../images/icon-close.svg"
// import hamburger from "../../images/icon-hamburger.svg"
import facebook from "../../images/icon-facebook.svg"
import instagram from "../../images/icon-instagram.svg"
import pinterest from "../../images/icon-pinterest.svg"
import twitter from "../../images/icon-twitter.svg"
import youtube from "../../images/icon-youtube.svg"

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className="logos">
          <img src={logo} alt="Logo" />
          <h2>easybank</h2>
          <div className="socials">
            <img src={facebook} alt="facebook-icon" />
            <img src={youtube} alt="youtube-icon" />
            <img src={twitter} alt="twitter-icon" />
            <img src={pinterest} alt="pinterest-icon" />
            <img src={instagram} alt="instagram-icon" />
          </div>
        </div>
        <div className="navlinks">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Privacy Policy</a></li>
        </div>
        <div className="action-right">
          <button>Request Invite</button>
          <span>© Easybank. All Rights Reserved</span>
        </div>
    </div>
  )
}

export default Footer
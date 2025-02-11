import React from "react";
import phoneLogo from "../assets/images/phone-logo.png";
import watchImg from "../assets/images/watch-img.png";
import facebookImg from "../assets/images/facebook (2).png";
import instagramImg from "../assets/images/instagram (2).png";
import whatsappImg from "../assets/images/whatsapp (2).png";
import locationhead from "../assets/images/locationhead.png";
import { Link } from "react-router-dom";



function Header() {
  return (
    <header className="bg-success-one text-white p-2">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="header-one">
          
          {/* <img src={phoneLogo} alt="Phone Logo" className="phone-logo" /> */}
          <img src={whatsappImg} alt="WhatsApp" className="facebook2" />
          <span>+91 9011113322</span> |
          <img src={watchImg} alt="Watch Icon" className="watch-img" />
          <span>9:30 am - 6:30 pm - Mon - Sat</span> |
          <img src={locationhead} alt="Watch Icon" className="watch-img" />
          <span>Mumbai , India</span>
        </div>
        
        <div className="social-icons">
          {/* <div> <Link to="/Login" className="nav-linked">
                  Login
               </Link></div> */}
          <div><img src={facebookImg} alt="Facebook" className="facebook2" /></div>
          <div><img src={instagramImg} alt="Instagram" className="facebook2" /></div>
          <div><img src={whatsappImg} alt="WhatsApp" className="facebook2" /></div>
       
          
          
          
        </div>
      </div>
    </header>
  );
}

export default Header;

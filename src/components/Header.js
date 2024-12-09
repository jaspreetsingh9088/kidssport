import React from "react";
import phoneLogo from "../assets/images/phone-logo.png";
import watchImg from "../assets/images/watch-img.png";
import facebookImg from "../assets/images/facebook (2).png";
import instagramImg from "../assets/images/instagram (2).png";
import whatsappImg from "../assets/images/whatsapp (2).png";



function Header() {
  return (
    <header className="bg-success-one text-white p-2">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="header-one">
          <img src={phoneLogo} alt="Phone Logo" className="phone-logo" />
          <span>+91 9988775566</span> |
          <img src={watchImg} alt="Watch Icon" className="watch-img" />
          <span>9:30 am - 6:30 pm - Mon - Sun</span> |
          <img src={watchImg} alt="Watch Icon" className="watch-img" />
          <span>1234 Magnesia / Zirakpur 140062</span>
        </div>
        <div className="social-icons">
          <img src={facebookImg} alt="Facebook" className="facebook2" />
          <img src={instagramImg} alt="Instagram" className="facebook2" />
          <img src={whatsappImg} alt="WhatsApp" className="facebook2" />
        </div>
      </div>
    </header>
  );
}

export default Header;

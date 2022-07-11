import React from "react";
import { TbWorld } from "react-icons/tb";
import { BiChevronDown } from "react-icons/bi";
import { TiSocialLinkedinCircular ,TiSocialFacebookCircular,TiSocialTwitterCircular} from "react-icons/ti";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="container-fluid  ">
        <footer className=" text-white footer-main">
          <div className="eng-btn">
            <button className="world-btn">
              <TbWorld size={28} />
              <p>English</p>
              <BiChevronDown size={28} />
            </button>
          </div>
          <div className="nav-btn">
            <h6 className="text-uppercase mb-3">Navigation</h6>

            <ul className="list-unstyled  nav-list">
              <li>Home</li>
              <li>FAQ</li>
              <li>Regulations</li>
              <li>Investor Relation</li>
              <li>Job</li>
              <li>About Us</li>
              <li>Help Center</li>
            </ul>
          </div>
          <div className="legal-btn">
            <h6 className="text-uppercase mb-3">Legal</h6>

            <ul className="list-unstyled nav-list">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Preferences</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div className="talk-btn">
            <h6 className="mb-3 text-uppercase">Talk to us</h6>

            <ul className="list-unstyled nav-list">
              <li>support@ercom.com</li>
              <li>+66 2399 1145</li>
            </ul>
          </div>
          <div className="follow-btn">
          <h6 className="text-uppercase mb-3">Follow us</h6>
          <div className="social-btn">
          <TiSocialFacebookCircular size={36}/>
          <TiSocialLinkedinCircular size={36}/>
          <TiSocialTwitterCircular size={36} />
          </div>
          </div>
         
        </footer>
        <div
          className="text-center footer-last"
          style={{ backgroundColor: "#161214", color: "white" }}
        >
          © 2022 Dramatic. All Rights Reserved.
        </div>
      </div>
    </>
  );
}

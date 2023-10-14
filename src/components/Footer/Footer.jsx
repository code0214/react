/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { MdiInstagram1 } from "../../icons/MdiInstagram1";
import { RiBehanceFill } from "../../icons/RiBehanceFill";
import { StateDefault2 } from "../../icons/StateDefault2";
import "./style.css";

export const Footer = () => {
  return (
    <div className="FOOTER">
      <div className="footer-nav">
        <div className="footer-logo">
          <img className="logo-image" alt="Avy LOGO" src="/img/avy-logo.png" />
        </div>
        <div className="div">
          <div className="frame-section">
            <div className="div-2">
              <div className="text-wrapper-2">ABOUT</div>
              <div className="text-wrapper-3">OUR WORK</div>
            </div>
            <div className="div-2">
              <div className="text-wrapper-2">INSIGHTS</div>
              <div className="text-wrapper-3">SHOP</div>
            </div>
          </div>
          <div className="frame-section">
            <div className="div-2">
              <div className="text-wrapper-4">CONTACT US</div>
              <div className="text-wrapper-5">TESTIMONIALS</div>
            </div>
            <div className="div-2">
              <div className="text-wrapper-2">Hello@avy.me</div>
              <div className="text-wrapper-3">+44 7365 536 636</div>
            </div>
          </div>
        </div>
      </div>
      <div className="social">
        <div className="social-media">
          <div className="text">
            <div className="LET-s-STAY-CONNECTED">
              LET’S STAY
              <br />
              CONNECTED
            </div>
          </div>
          <div className="logo">
            <StateDefault2 className="icon-instance-node" color="#1A1A1A" />
            <RiBehanceFill className="icon-instance-node" color="#1A1A1A" />
            <MdiInstagram1 className="icon-instance-node" color="#1A1A1A" />
          </div>
        </div>
        <div className="footer-last">
          <p className="AVY-CONSULTANCY">AVY© CONSULTANCY. DESIGN, BRAND &amp; MOTION</p>
          <div className="frame">
            <div className="text-wrapper">TERMS &amp; CONDITIONS</div>
            <img className="line" alt="Line" src="/img/line-21.svg" />
            <div className="text-wrapper">PRIVACY POLICY</div>
          </div>
        </div>
      </div>
    </div>
  );
};

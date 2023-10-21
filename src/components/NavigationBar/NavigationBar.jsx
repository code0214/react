import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavbarButton } from "../NavbarButton";
import { Button } from "../../components/Button/Button";
import { FormButton } from "../../components/FormButton/FormButton";

import { ContactUsOverlay } from '../../screens/ContactUsOverlay';
import "./style.css";


export const NavigationBar = ({ state, className }) => {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <div className={`navigation-bar ${state} ${className}`}>
      <div className="navigation-content">
        <Link to="/"><img className="AVY-LOGO" alt="Avy LOGO" src="/img/avy-logo-2.png" /></Link>
        {["homepage-hero", "white"].includes(state) && (
          <>
            <div className="navigation">
              <Link to="/aboutus"><NavbarButton className="navbar-button-instance" property1="default" text="ABOUT" /></Link> 
              <Link to="/ourwork"><NavbarButton className="navbar-button-instance" property1="default" text="OUR WORK" /></Link>
              <Link to="/insight"><NavbarButton className="navbar-button-instance" property1="default" text="INSIGHTS" /></Link>
              <Link to="/pagenotfound"><NavbarButton className="navbar-button-instance" property1="default" text="SHOP" /></Link>
            </div>
            {/* <button onClick={openNav}>CONTACT US</button> */}
            <NavbarButton className="navbar-button-instance" onClick = {openNav} property1="default" text="CONTACT US" />
          </>
        )}

        {state === "burger" && <img className="mdi-menu" alt="Mdi menu" src="./img/mdi-menu.svg" />}
      </div>


      {/* {nav ? <ContactUsOverlay /> : null} */}
      
      {/* <div className={`contact-us-overlay ${nav ? "open-contact" : ""}`}>
        <div className="headline">
          <div className="content-container">
            <div className="title-button">
              <div className="LET-s-GET-IN-TOUCH">
                LET’S
                <br />
                GET IN TOUCH
              </div>
              <Button button="hover-state" className="design-component-instance-node" text="CLOSE" onClick = {nav} />
            </div>
          </div>
          <div className="rectangle" />
        </div>
        <div className="contact-form">
          <div className="content">
            <div className="form">
              <div className="div">
                <div className="title">
                  <div className="text-wrapper-2">SUBJECT</div>
                </div>
                <div className="div-2">
                  <div className="select-dropdown">
                    <div className="text-wrapper-3">Select</div>
                    <img className="mdi-menu-down" alt="Mdi menu down" src="./img/mdi-menu-down.svg" />
                  </div>
                  <img className="line" alt="Line" src="./img/line-2.svg" />
                </div>
              </div>
              <div className="div">
                <div className="div-wrapper">
                  <div className="text-wrapper-4">NAME</div>
                </div>
                <div className="div-2">
                  <div className="text-wrapper-5">Enter Your Name</div>
                  <img className="line" alt="Line" src="./img/line-1.svg" />
                </div>
              </div>
              <div className="div">
                <div className="div-wrapper">
                  <div className="text-wrapper-4">EMAIL</div>
                </div>
                <div className="div-2">
                  <div className="text-wrapper-5">Enter Your Email</div>
                  <img className="line" alt="Line" src="./img/line-1.svg" />
                </div>
              </div>
              <div className="div">
                <div className="div-wrapper">
                  <div className="text-wrapper-4">PHONE</div>
                </div>
                <div className="div-2">
                  <div className="text-wrapper-5">Enter Your Phone</div>
                  <img className="line" alt="Line" src="./img/line-1.svg" />
                </div>
              </div>
              <div className="div">
                <div className="title">
                  <div className="text-wrapper-2">BUDGET</div>
                </div>
                <div className="div-2">
                  <div className="select-dropdown">
                    <p className="text-wrapper-3">What did you have in mind?</p>
                    <img className="mdi-menu-down" alt="Mdi menu down" src="./img/mdi-menu-down.svg" />
                  </div>
                  <img className="line" alt="Line" src="./img/line-2.svg" />
                </div>
              </div>
              <div className="div">
                <div className="div-wrapper">
                  <div className="text-wrapper-4">MESSAGE</div>
                </div>
                <div className="div-2">
                  <p className="text-wrapper-5">Tell us about your amazing idea!</p>
                  <img className="line" alt="Line" src="./img/line-1.svg" />
                </div>
              </div>
            </div>
            <FormButton className="design-component-instance-node" state="default" text="SEND" />
          </div>
        </div>
      </div> */}
    </div>
  );
};

NavigationBar.propTypes = {
  state: PropTypes.oneOf(["burger", "white", "homepage-hero"]),
};

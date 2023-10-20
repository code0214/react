
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavbarButton } from "../NavbarButton";
import { AboutUsPage } from '../../screens/AboutUsPage';
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
            <NavbarButton className="navbar-button-instance" onClick = {openNav} property1="default" text="CONTACT US" />
          </>
        )}

        {state === "burger" && <img className="mdi-menu" alt="Mdi menu" src="./img/mdi-menu.svg" />}
      </div>
      {nav ? <AboutUsPage /> : null}
      
    </div>
  );
};

NavigationBar.propTypes = {
  state: PropTypes.oneOf(["burger", "white", "homepage-hero"]),
};

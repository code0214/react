
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { NavbarButton } from "../NavbarButton";
import "./style.css";


export const NavigationBar = ({ state, className }) => {
  return (
    <div className={`navigation-bar ${state} ${className}`}>
      <div className="navigation-content">
        <img className="AVY-LOGO" alt="Avy LOGO" src="/img/avy-logo-2.png" />
        {["homepage-hero", "white"].includes(state) && (
          <>
            <div className="navigation">
              <Link to="/aboutus"><NavbarButton className="navbar-button-instance" property1="default" text="ABOUT" /></Link> 
              <Link to="/ourwork"><NavbarButton className="navbar-button-instance" property1="default" text="OUR WORK" /></Link>
              <Link to="/insight"><NavbarButton className="navbar-button-instance" property1="default" text="INSIGHTS" /></Link>
              <NavbarButton className="navbar-button-instance" property1="default" text="SHOP" />
            </div>
            <NavbarButton className="navbar-button-instance" property1="default" text="CONTACT US" />
          </>
        )}

        {state === "burger" && <img className="mdi-menu" alt="Mdi menu" src="./img/mdi-menu.svg" />}
      </div>
    </div>
  );
};

NavigationBar.propTypes = {
  state: PropTypes.oneOf(["burger", "white", "homepage-hero"]),
};

/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { NavbarButton } from "../NavbarButton";
import "./style.css";

export const StateHomepageHeroWrapper = ({ state, className }) => {
  return (
    <div className={`state-homepage-hero-wrapper ${state} ${className}`}>
      <div className="content">
        <img className="AVY-LOGO" alt="Avy LOGO" src="/img/avy-logo-3.png" />
        {["homepage-hero", "white"].includes(state) && (
          <>
            <NavbarButton className="navbar-button-instance" property1="default" text="CONTACT US" />
            <div className="navigation">
              <NavbarButton className="navbar-button-instance" property1="default" text="ABOUT" />
              <NavbarButton className="navbar-button-instance" property1="default" text="OUR WORK" />
              <NavbarButton className="navbar-button-instance" property1="default" text="INSIGHTS" />
              <NavbarButton className="navbar-button-instance" property1="default" text="SHOP" />
            </div>
          </>
        )}

        {state === "burger" && <img className="mdi-menu" alt="Mdi menu" src="/img/mdi-menu.svg" />}
      </div>
    </div>
  );
};

StateHomepageHeroWrapper.propTypes = {
  state: PropTypes.oneOf(["burger", "white", "homepage-hero"]),
};

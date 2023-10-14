import React from "react";
import { MenuTitle } from "../../components/MenuTitle";
import "./style.css";

export const Menu = ( {state} ) => {
  return (
    <div className={`menu ${state}`}>
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="navigation">
            <img className="AVY-LOGO" alt="Avy LOGO" src="/img/avy-logo.png" />
            <div className="close-button">
              <div className="frame">
                <div className="text-wrapper">CLOSE</div>
                <img className="mdi-window-close" alt="Mdi window close" src="/img/mdi-window-close.svg" />
              </div>
            </div>
          </div>
          <div className="overlap-group">
            <div className="menu-navigation">
              <MenuTitle className="menu-title-instance" state="menu-white" text="ABOUT" />
              <MenuTitle className="menu-title-instance" state="menu-black" text="OUR WORK" />
              <MenuTitle className="menu-title-instance" state="menu-white" text="INSIGHTS" />
              <MenuTitle className="menu-title-instance" state="menu-black" text="SHOP" />
              <MenuTitle className="menu-title-instance" state="menu-white" text="CONTACT US" />
            </div>
            <div className="image">
              {/* <div className="div"> */}
                <img
                  className="avy-website-banner"
                  alt="Avy website banner"
                  src="/img/avy-website-banner-pattern-white-2.svg"
                />
                <img className="unsplash" alt="Unsplash" src="/img/unsplash-xcz78dlxtes_menu.png" />
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

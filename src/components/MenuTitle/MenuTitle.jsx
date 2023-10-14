/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const MenuTitle = ({ state, className, text = "TITLE" }) => {
  return (
    <div className={`menu-title ${state} ${className}`}>
      <div className="TITLE">{text}</div>
    </div>
  );
};

MenuTitle.propTypes = {
  state: PropTypes.oneOf(["menu-white", "menu-black"]),
  text: PropTypes.string,
};

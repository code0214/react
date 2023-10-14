
import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Number = ({ variant, divClassName, text = "01" }) => {
  return (
    <div className={`number ${variant}`}>
      <div className={`element ${divClassName}`}>{text}</div>
    </div>
  );
};

Number.propTypes = {
  variant: PropTypes.oneOf(["desktop", "mobile"]),
  text: PropTypes.string,
};

/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Headline = ({ state, className, text = "TITLE", text1, text2, hasDiv = true, visible = true }) => {
  return (
    <div className={`headline ${className}`}>
      <div className="headline-text">
        <div className="TITLE">{text}</div>
        {state === "default" && (
          <>
            <>{hasDiv && <div className="div">{text1}</div>}</>
            <>{visible && <div className="div">{text2}</div>}</>
          </>
        )}

        {state === "two-row" && <div className="div">{text}</div>}
      </div>
      <div className="rectangle" />
    </div>
  );
};

Headline.propTypes = {
  state: PropTypes.oneOf(["two-row", "one-row", "default"]),
  text: PropTypes.string,
  hasDiv: PropTypes.bool,
  visible: PropTypes.bool,
};

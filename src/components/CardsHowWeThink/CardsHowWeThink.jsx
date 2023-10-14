/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Number } from "../Number";
import "./style.css";

export const CardsHowWeThink = ({ variant, className, numberText = "01", numberDivClassName }) => {
  return (
    <div className={`cards-how-we-think variant-0-${variant} ${className}`}>
      <div className="card">
        {variant === "desktop" && (
          <div className="text">
            <div className="card-title">
              <Number divClassName={numberDivClassName} text={numberText} variant="desktop" />
              <p className="div">
                Lörem ipsum rilåning ångerrösta teraning, i rerina mudöl: fasade. Du kan vara drabbad?
              </p>
              <div className="text-wrapper-2">Lorem Ipsum</div>
            </div>
            <div className="client">
              <div className="text-wrapper-3">Client</div>
              <div className="text-wrapper-4">Lorem Ipsum</div>
            </div>
          </div>
        )}

        {variant === "mobile" && (
          <>
            <div className="card-title">
              <Number text={numberText} variant="mobile" />
              <p className="p">
                Lörem ipsum rilåning ångerrösta teraning, i rerina mudöl: fasade. Du kan vara drabbad?
              </p>
              <div className="text-wrapper-5">Lorem Ipsum</div>
            </div>
            <div className="client">
              <div className="text-wrapper-6">Client</div>
              <div className="text-wrapper-7">Lorem Ipsum</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

CardsHowWeThink.propTypes = {
  variant: PropTypes.oneOf(["desktop", "mobile"]),
  numberText: PropTypes.string,
};

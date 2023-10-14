import React from "react";
import { Button } from "../../components/Button";
import "./style.css";

export const Element = () => {
  return (
    <div className="element">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">
            <img
              className="avy-website-banner"
              alt="Avy website banner"
              src="/img/avy-website-banner-pattern-white-1.svg"
            />
            <div className="rectangle" />
            <img className="unsplash" alt="Unsplash" src="/img/unsplash-xcz78dlxtes-traced.svg" />
            <Button className="button-instance" text="BACK TO HOMEPAGE" />
          </div>
          <div className="text-wrapper">404</div>
          <div className="div">PAGE NOT FOUND</div>
        </div>
      </div>
    </div>
  );
};

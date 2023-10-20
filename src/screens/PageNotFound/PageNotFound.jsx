import React from "react";
import { Button } from "../../components/Button";
import { Link } from 'react-router-dom';
import "./style.css";

export const PageNotFound = () => {
  return (
    <div className="element">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="text-section-404">
            <div className="number404">404</div>
            <div className="div">PAGE NOT FOUND</div>
          </div>
          <div className="overlap-group">
            <img className="unsplash" alt="Unsplash" src="/img/unsplash-xcz78dlxtes-traced.svg" />
            <img
              className="avy-website-banner"
              alt="Avy website banner"
              src="/img/avy-website-banner-pattern-white-1.svg"
            />
          </div>
          
        </div>
        <div className="rectangle" />
        <Link to="/"><Button className="button-instance" text="BACK TO HOMEPAGE" /></Link>
      </div>
    </div>
  );
};
import React from "react";
import { Button } from "../../components/Button";
import "./style.css";

export const WorkOverlay = () => {
    return (
        <div className="work-overlay">
          <div className="headline">
            <div className="content-container">
              <div className="title-button">
                <div className="project-title">
                  <div className="text-wrapper2">BLK PIZZA</div>
                  <div className="div">BRANDING</div>
                </div>
                <Button button="hover-state" className="button-instance" text="CLOSE" />
              </div>
            </div>
            <div className="rectangle" />
          </div>
          <div className="div-2">
            <div className="project-overview">
              <div className="div-3">
                <div className="text-wrapper-2">PROJECT</div>
                <div className="text-wrapper-3">
                  CLIENT: LOREM IPSUM
                  <br />
                  YEAR: 2023
                </div>
              </div>
              <div className="div-3">
                <div className="text-wrapper-2">SERVICES:</div>
                <div className="text-wrapper-3">BRANDING</div>
              </div>
            </div>
            <div className="div-4">
              <div className="text-wrapper-2">CHALLENGE</div>
              <p className="text-wrapper-3">
                Lörem ipsum demödade märk-dna: pensionärskuvös än aras ovina. Trumpifiering intraskade nende i tuspeska
                tekagon. Reskapet aberen vyr agnostigen, i ter. Pegt giganösm elykovament.
              </p>
            </div>
            <div className="element-image">
              <img className="image" alt="Image" src="/img/image-16.png" />
              <img className="img" alt="Image" src="/img/image-19.png" />
              <img className="img" alt="Image" src="/img/image-20.png" />
            </div>
            <div className="div-4">
              <div className="text-wrapper-2">APPROACH</div>
              <p className="text-wrapper-3">
                Lörem ipsum demödade märk-dna: pensionärskuvös än aras ovina. Trumpifiering intraskade nende i tuspeska
                tekagon. Reskapet aberen vyr agnostigen, i ter. Pegt giganösm elykovament.
              </p>
            </div>
            <img className="image-2" alt="Image" src="/img/image-21.png" />
            <div className="div-4">
              <div className="text-wrapper-2">RESULT</div>
              <p className="text-wrapper-3">
                Lörem ipsum demödade märk-dna: pensionärskuvös än aras ovina. Trumpifiering intraskade nende i tuspeska
                tekagon. Reskapet aberen vyr agnostigen, i ter. Pegt giganösm elykovament.
              </p>
            </div>
            <div className="workoverlay-footer">
            <div className="text-wrapper-4">BLKPIZZA.COM</div>
                <p className="if-it-s-a-website">
                *if it’s a website project
                <br />
                *or any link related (if any)
                </p>
            </div>
          </div>
        </div>
    );
}

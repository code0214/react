import React from "react";
import { Button } from "../../components/Button/Button";
import { FormButton } from "../../components/FormButton/FormButton";
import "./style.css";

export const ContactUsOverlay = () => {
  return (
    <div className="contact-us-overlay">
      <div className="headline">
        <div className="content-container">
          <div className="title-button">
            <div className="LET-s-GET-IN-TOUCH">
              LET’S
              <br />
              GET IN TOUCH
            </div>
            <Button button="hover-state" className="design-component-instance-node" text="CLOSE" />
          </div>
        </div>
        <div className="rectangle" />
      </div>
      <div className="contact-form">
        <div className="content">
          <div className="form">
            <div className="div">
              <div className="title">
                <div className="text-wrapper-2">SUBJECT</div>
              </div>
              <div className="div-2">
                <div className="select-dropdown">
                  <div className="text-wrapper-3">Select</div>
                  <img className="mdi-menu-down" alt="Mdi menu down" src="./img/mdi-menu-down.svg" />
                </div>
                <img className="line" alt="Line" src="./img/line-2.svg" />
              </div>
            </div>
            <div className="div">
              <div className="div-wrapper">
                <div className="text-wrapper-4">NAME</div>
              </div>
              <div className="div-2">
                <div className="text-wrapper-5">Enter Your Name</div>
                <img className="line" alt="Line" src="./img/line-1.svg" />
              </div>
            </div>
            <div className="div">
              <div className="div-wrapper">
                <div className="text-wrapper-4">EMAIL</div>
              </div>
              <div className="div-2">
                <div className="text-wrapper-5">Enter Your Email</div>
                <img className="line" alt="Line" src="./img/line-1.svg" />
              </div>
            </div>
            <div className="div">
              <div className="div-wrapper">
                <div className="text-wrapper-4">PHONE</div>
              </div>
              <div className="div-2">
                <div className="text-wrapper-5">Enter Your Phone</div>
                <img className="line" alt="Line" src="./img/line-1.svg" />
              </div>
            </div>
            <div className="div">
              <div className="title">
                <div className="text-wrapper-2">BUDGET</div>
              </div>
              <div className="div-2">
                <div className="select-dropdown">
                  <p className="text-wrapper-3">What did you have in mind?</p>
                  <img className="mdi-menu-down" alt="Mdi menu down" src="./img/mdi-menu-down.svg" />
                </div>
                <img className="line" alt="Line" src="./img/line-2.svg" />
              </div>
            </div>
            <div className="div">
              <div className="div-wrapper">
                <div className="text-wrapper-4">MESSAGE</div>
              </div>
              <div className="div-2">
                <p className="text-wrapper-5">Tell us about your amazing idea!</p>
                <img className="line" alt="Line" src="./img/line-1.svg" />
              </div>
            </div>
          </div>
          <FormButton className="design-component-instance-node" state="default" text="SEND" />
        </div>
      </div>
    </div>
  );
};
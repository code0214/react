import React, { useState, useEffect } from "react";
import { Button } from "../../components/Button";
import { FormButton } from "../../components/FormButton";
import { NavigationBar } from "../../components/NavigationBar";
import { Number } from "../../components/Number";
import { MdiInstagram1 } from "../../icons/MdiInstagram1";
import { RiBehanceFill } from "../../icons/RiBehanceFill";
import { StateDefault2 } from "../../icons/StateDefault2";
import "./style.css";

export const OurWorkPage = () => {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
   
  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension);
    }
    window.addEventListener('resize', updateDimension);

    return(() => {
      window.removeEventListener('resize', updateDimension)
    })
  }, [screenSize]);

  function getNavResponse(){
    if(screenSize.width > 390) {
      return "white";
    } else {
      return "burger";
    }
}

function getCardResponse(){
  if(screenSize.width > 390) {
    return "desktop";
  } else {
    return "mobile";
  }
}
  return (
    <div className="our-work-page">
      <div className="TOP-NAVBAR-WORK">
        <NavigationBar className="design-component-instance-node" state={getNavResponse()} />
        <div className="OUR-WORK">
          <div className="text-wrapper-2">OUR WORK</div>
          <div className="div-2">
            <div className="content-hovered">
              <img className="image" alt="Image" src="/img/image-15.png" />
              <div className="title">
                <Number variant={getCardResponse()} />
                <div className="div-2">
                  <div className="text-wrapper-3">BLK PIZZA</div>
                  <div className="text-wrapper-4">BRANDING</div>
                </div>
              </div>
            </div>
            <div className="content-default">
              <div className="title-2">
                <Number divClassName="number-instance" text="02" variant={getCardResponse()} />
                <div className="div-2">
                  <div className="text-wrapper-3">SAMPLEY &amp; SONS</div>
                  <div className="text-wrapper-4">BRANDING</div>
                </div>
              </div>
            </div>
            <div className="content-default">
              <div className="title-2">
                <Number divClassName="number-instance" text="03" variant={getCardResponse()} />
                <div className="div-2">
                  <div className="text-wrapper-3">LITTLE BOBBINS BOUTIQUE</div>
                  <div className="text-wrapper-4">BRANDING &amp; PRINT</div>
                </div>
              </div>
            </div>
            <div className="content-default">
              <div className="title-2">
                <Number divClassName="number-2" text="04" variant={getCardResponse()} />
                <div className="div-2">
                  <div className="text-wrapper-3">LOREM IPSUM</div>
                  <div className="text-wrapper-4">BRANDING</div>
                </div>
              </div>
            </div>
            <div className="content-default">
              <div className="title-2">
                <Number divClassName="number-instance" text="05" variant={getCardResponse()} />
                <div className="div-2">
                  <div className="text-wrapper-3">LOREM IPSUM</div>
                  <div className="text-wrapper-4">BRANDING</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="SURVEY">
        <div className="content-2">
          <p className="p">NOW LETS FIND OUT ABOUT YOU</p>
          <div className="text-button">
            <div className="text">
              <div className="l-rem-ipsum">LÖREM IPSUM</div>
              <div className="l-rem-ipsum-2">LÖREM IPSUM</div>
              <div className="l-rem-ipsum-2">LÖREM IPSUM</div>
            </div>
            <Button className="design-component-instance-node" text="START SURVEY" />
          </div>
        </div>
      </div>
      <div className="READY-TO-WORK-WITH">
        <div className="div-6">
          <div className="text-wrapper-5">ARE YOU READY TO</div>
          <div className="frame">
            <img className="line" alt="Line" src="/img/line-10.svg" />
            <div className="text-wrapper-5">WORK</div>
            <img className="line" alt="Line" src="/img/line-10.svg" />
          </div>
          <div className="frame">
            <div className="text-wrapper-5">WITH</div>
            <img className="line" alt="Line" src="/img/line-9.svg" />
            <div className="US">
              <div className="div-wrapper">
                <div className="text-wrapper-6">US</div>
              </div>
              <div className="text-wrapper-5">?</div>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <div className="content-3">
            <div className="form">
              <div className="subject">
                <div className="title-3">
                  <div className="text-wrapper-7">SUBJECT</div>
                </div>
                <div className="dropdown-container">
                  <div className="select-dropdown">
                    <div className="text-wrapper-7">Select</div>
                    <img className="mdi-menu-down" alt="Mdi menu down" src="/img/mdi-menu-down.svg" />
                  </div>
                  <img className="img" alt="Line" src="/img/line-2-1.svg" />
                </div>
              </div>
              <div className="div-3">
                <div className="title-4">
                  <div className="text-wrapper-7">NAME</div>
                </div>
                <div className="div-4">
                  <div className="text-wrapper-8">Enter Your Name</div>
                  <img className="img" alt="Line" src="/img/line-1-1.svg" />
                </div>
              </div>
              <div className="div-3">
                <div className="title-4">
                  <div className="text-wrapper-7">EMAIL</div>
                </div>
                <div className="div-4">
                  <div className="text-wrapper-8">Enter Your Email</div>
                  <img className="img" alt="Line" src="/img/line-1-1.svg" />
                </div>
              </div>
              <div className="div-3">
                <div className="title-4">
                  <div className="text-wrapper-7">PHONE</div>
                </div>
                <div className="div-4">
                  <div className="text-wrapper-8">Enter Your Phone</div>
                  <img className="img" alt="Line" src="/img/line-1-1.svg" />
                </div>
              </div>
              <div className="div-3">
                <div className="title-3">
                  <div className="text-wrapper-7">BUDGET</div>
                </div>
                <div className="div-4">
                  <div className="select-dropdown">
                    <p className="text-wrapper-7">What did you have in mind?</p>
                    <img className="mdi-menu-down" alt="Mdi menu down" src="/img/mdi-menu-down.svg" />
                  </div>
                  <img className="img" alt="Line" src="/img/line-2.svg" />
                </div>
              </div>
              <div className="message">
                <div className="title-4">
                  <div className="text-wrapper-7">MESSAGE</div>
                </div>
                <div className="div-4">
                  <p className="text-wrapper-8">Tell us about your amazing idea!</p>
                  <img className="img" alt="Line" src="/img/line-1.svg" />
                </div>
              </div>
            </div>
            <FormButton className="design-component-instance-node" state="default" text="SEND" />
          </div>
        </div>
      </div>
      <div className="frame-2">
        <div className="footer-navbar">
          <div className="footer-logo-section">
            <img className="AVY-LOGO-2" alt="Avy LOGO" src="/img/avy-logo-4.png" />
          </div>
          <div className="div">
            <div className="frame-4">
              <div className="div-5">
                <div className="text-wrapper-10">ABOUT</div>
                <div className="text-wrapper-11">OUR WORK</div>
              </div>
              <div className="div-5">
                <div className="text-wrapper-10">INSIGHTS</div>
                <div className="text-wrapper-11">SHOP</div>
              </div>
            </div>
            <div className="frame-4">
              <div className="div-5">
                <div className="text-wrapper-12">CONTACT US</div>
                <div className="text-wrapper-13">TESTIMONIALS</div>
              </div>
              <div className="div-5">
                <div className="text-wrapper-10">Hello@avy.me</div>
                <div className="text-wrapper-11">+44 7365 536 636</div>
              </div>
            </div>
          </div>
        </div>
        <div className="social">
          <div className="social-media">
            <div className="LET-s-STAY-CONNECTED-wrapper">
              <div className="LET-s-STAY-CONNECTED">
                LET’S STAY
                <br />
                CONNECTED
              </div>
            </div>
            <div className="logo">
              <StateDefault2 className="icon-instance-node" color="#1A1A1A" />
              <RiBehanceFill className="icon-instance-node" color="#1A1A1A" />
              <MdiInstagram1 className="icon-instance-node" color="#1A1A1A" />
            </div>
          </div>
          <div className="frame-3">
            <p className="AVY-CONSULTANCY">
                AVY© CONSULTANCY.DESIGN, BRAND &amp; MOTION
            </p>
            <div className="frame">
              <div className="text-wrapper-9">TERMS &amp; CONDITIONS</div>
              <img className="line-2" alt="Line" src="/img/line-21.svg" />
              <div className="text-wrapper-9">PRIVACY POLICY</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

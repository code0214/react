import React, {useState, useEffect } from "react";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { NavigationBar } from "../../components/NavigationBar";
import { Link } from 'react-router-dom';
import "./style.css";

export const InsightsPage = () => {
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
    <div className="insights-page">
      <div className="TOP-NAVBAR-INSIGHTS">
        <NavigationBar className="design-component-instance-node" state={getNavResponse()} />
        <div className="INSIGHTS">
          <div className="text-wrapper-6">INSIGHTS</div>
          <div className="categories-content">
            <div className="categories">
              <div className="text-wrapper-7">ALL</div>
              <div className="text-wrapper-8">BUSINESS</div>
              <div className="text-wrapper-8">DESIGN</div>
              <div className="text-wrapper-8">LOGO IDENTITY</div>
              <div className="text-wrapper-8">MARKET</div>
              <div className="text-wrapper-8">MOTION</div>
              <div className="text-wrapper-8">PARTNERS</div>
              <div className="text-wrapper-8">VIDEOS</div>
            </div>
            <div className="content-container">
              <div className="article">
                <div className="content-2">
                  <img className="rectangle" alt="Rectangle" src="./img/rectangle-98-4.png" />
                  <div className="text-2">
                    <p className="p">
                      AVY Pruthi, Nuneaton business owner – Coventry &amp; Warwickshire Chamber workshops
                    </p>
                    <div className="date-button">
                      <div className="date-category">
                        <div className="text-wrapper-9">30 June 2021</div>
                        <img className="line-2" alt="Line" src="./img/line-27.svg" />
                        <div className="text-wrapper-9">Business</div>
                      </div>
                      <Link to="/insightContent"><Button className="design-component-instance-node" text="READ ARTICLE" /></Link> 
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-wrapper">
                <div className="content-2">
                  <img className="rectangle" alt="Rectangle" src="./img/rectangle-98-3.png" />
                  <div className="text-2">
                    <p className="p">Daily Logo Challenge for 50 days</p>
                    <div className="date-button">
                      <div className="date-category">
                        <div className="text-wrapper-9">30 June 2021</div>
                        <img className="line-2" alt="Line" src="./img/line-27.svg" />
                        <div className="text-wrapper-9">Design</div>
                        <img className="line-2" alt="Line" src="./img/line-27.svg" />
                        <div className="text-wrapper-9">Logo Identity</div>
                      </div>
                      <Button className="design-component-instance-node" text="READ ARTICLE" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-wrapper">
                <div className="content-2">
                  <img className="rectangle" alt="Rectangle" src="./img/rectangle-98-2.png" />
                  <div className="text-2">
                    <p className="p">Bringing a Business to Life: Chamber of Commerce, AVY Pruthi</p>
                    <div className="date-button">
                      <div className="date-category">
                        <div className="text-wrapper-9">30 June 2021</div>
                        <img className="line-2" alt="Line" src="./img/line-27.svg" />
                        <div className="text-wrapper-9">Business</div>
                      </div>
                      <Button className="design-component-instance-node" text="READ ARTICLE" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-wrapper">
                <div className="content-2">
                  <img className="rectangle" alt="Rectangle" src="./img/rectangle-98-1.png" />
                  <div className="text-2">
                    <p className="p">Our new Trustpilot partnership, and how it’ll help your business</p>
                    <div className="date-button">
                      <div className="date-category">
                        <div className="text-wrapper-9">30 June 2021</div>
                        <img className="line-2" alt="Line" src="./img/line-27.svg" />
                        <div className="text-wrapper-9">Business</div>
                        <img className="line-2" alt="Line" src="./img/line-27.svg" />
                        <div className="text-wrapper-9">Partners</div>
                      </div>
                      <Button className="design-component-instance-node" text="READ ARTICLE" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-wrapper">
                <div className="content-2">
                  <img className="rectangle" alt="Rectangle" src="./img/rectangle-98.png" />
                  <div className="text-2">
                    <p className="p">Ogilvy lose the Philips international creative account after 10 years.</p>
                    <div className="date-button">
                      <div className="date-category">
                        <div className="text-wrapper-9">26 March 2021</div>
                        <img className="line-2" alt="Line" src="./img/line-27.svg" />
                        <div className="text-wrapper-9">Business</div>
                        <img className="line-2" alt="Line" src="./img/line-27.svg" />
                        <div className="text-wrapper-9">Design</div>
                        <img className="line-2" alt="Line" src="./img/line-27.svg" />
                        <div className="text-wrapper-9">Market</div>
                      </div>
                      <Button className="design-component-instance-node" text="READ ARTICLE" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer className="FOOTER-instance" />
    </div>
  );
};

import React, {useState, useEffect } from "react";
import { Footer } from "../../components/Footer";
import { NavigationBar } from "../../components/NavigationBar";
import "./style.css";

export const InsightsContent = () => {
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
    <div className="insights-content">
      <div className="div-3">
        <div className="div-3">
          <NavigationBar className="navigation-bar-instance" state={getNavResponse()} />
        </div>
        <div className="div-4">
          <img className="rectangle" alt="Rectangle" src="/img/rectangle-99.png" />
          {/* <div className="div-4"> */}
            <div className="div-5">
              <p className="AVY-pruthi-nuneaton">
                AVY Pruthi, Nuneaton <br />  business owner – Coventry <br /> &amp;  Warwickshire Chamber <br /> workshops
              </p>
              <div className="date-category-share">
                <div className="div-7">
                  <div className="text-wrapper-6">30 June 2021</div>
                  <img className="line-2" alt="Line" src="/img/line-26.svg" />
                  <div className="text-wrapper-6">Business</div>
                </div>
                <div className="share">
                  <div className="text-wrapper-7">Share:</div>
                  <img className="social" alt="Social" src="/img/social.svg" />
                </div>
              </div>
            </div>
            <p className="new-and-small">
              New and small business owners in Nuneaton and Bedworth can benefit from a series of free clinics.
              <br />
              The clinics, presented by Coventry and Warwickshire Chamber of Commerce are fully funded and aim to help
              people who want to start a business and micro business owners who have started one in the last 24 months.
              <br />
              One Nuneaton based business owner who has gained is Avy Pruthi, who has set up a design and digital
              experiences company called Avy Consultancy.
              <br />
              <br />
              Through the sessions and access to a wide programme of masterclasses and workshops, he is now director of
              a business that helps bring businesses to life using creative design for all touch-points.
              <br />
              The business continues to grow and is pushing forward with plans for further growth. Avy was introduced to
              the Coventry &amp; Warwickshire Chamber of Commerce’s Start-Up Programme in February after deciding to
              resign from full-time employment to pursue his dream of starting his own business.
              <br />
              Avy felt it was time to act on his passion for design and dream of being a business owner and explained:.
            </p>
          {/* </div> */}
        </div>
      </div>
      <div className="div-4 latest">
        <div className="text-wrapper-8">LATEST INSIGHTS</div>
        <div className="div-6">
          <div className="latest-insights">
            <img className="rectangle-2" alt="Rectangle" src="/img/rectangle-103-2.png" />
            <div className="text-2">
              <p className="p">Daily Logo Challenge for 50 days</p>
              <div className="div-7">
                <div className="text-wrapper-6">30 June 2021</div>
                <img className="line-2" alt="Line" src="/img/line-26.svg" />
                <div className="text-wrapper-6">Design</div>
                <img className="line-2" alt="Line" src="/img/line-26.svg" />
                <div className="text-wrapper-6">Logo Identity</div>
              </div>
            </div>
          </div>
          <div className="latest-insights">
            <img className="rectangle-2" alt="Rectangle" src="/img/rectangle-103-1.png" />
            <div className="text-2">
              <p className="p">Bringing a Business to Life: Chamber of Commerce, AVY Pruthi</p>
              <div className="div-7">
                <div className="text-wrapper-6">30 June 2021</div>
                <img className="line-2" alt="Line" src="/img/line-26.svg" />
                <div className="text-wrapper-6">Business</div>
              </div>
            </div>
          </div>
          <div className="latest-insights">
            <img className="rectangle-2" alt="Rectangle" src="/img/rectangle-103.png" />
            <div className="text-2">
              <p className="p">Our new Trustpilot partnership, and how it’ll help your business</p>
              <div className="div-7">
                <div className="text-wrapper-6">30 June 2021</div>
                <img className="line-2" alt="Line" src="/img/line-26.svg" />
                <div className="text-wrapper-6">Business</div>
                <img className="line-2" alt="Line" src="/img/line-26.svg" />
                <div className="text-wrapper-6">Partners</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer className="FOOTER-instance" />
    </div>
  );
};

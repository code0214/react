import React, { useRef, useState, useEffect } from "react";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { FormButton } from "../../components/FormButton";
import { Headline } from "../../components/Headline";
import { NavigationBar } from "../../components/NavigationBar";
import { Number } from "../../components/Number";
import "./style.css";

export const AboutUsPage = () => {
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
    <div className="about-us-page">
      <div className="TOP-NAVBAR-ABOUT">
        <NavigationBar className="design-component-instance-node" state={ getNavResponse()} />
        <div className="div-3">
          <div className="ABOUT-AVY">
            <div className="text-wrapper-7">ABOUT </div>
            <div className="text-wrapper-7">AVY<div className="text-wrapper-8">®</div></div>
          </div>
          <div className="div-4">
            <div className="div-5">
              <div className="div-6">
                <div className="text-content">
                  <p className="p">ALWAYS AIMING TO PUSH BOUNDARIES AND EXCEED EXPECTATIONS WITH EVERY PROJECT.</p>
                  <div className="founder-CEO-text">
                    <div className="AVY-pruthi-founder">
                      AVY Pruthi
                      <br />
                      Founder &amp; CEO
                    </div>
                  </div>
                </div>
                <div className="image">
                  <img className="unsplash" alt="Unsplash" src="/img/unsplash-xcz78dlxtes.png" />
                </div>
              </div>
              <img className="line-2" alt="Line" src="/img/line-23.svg" />
            </div>
            <div className="our-story">
              <div className="div-7">
                <p className="text-wrapper-9">
                  After a decade managing projects globally for creative agencies across four continents, the pandemic
                  led me to a transformative decision. I bid farewell to my corporate role to wholeheartedly pursue my
                  true passion: sparking inspiration for clients.
                </p>
                <p className="text-wrapper-10">
                  I excel in revealing a brand&#39;s unique appeal and turning concepts into reality. Building lasting
                  connections is my philosophy.
                </p>
                <p className="text-wrapper-10">
                  My work spans various sectors, from manufacturing to fintech and luxury to transportation, and
                  I&#39;ve earned recognition with seven prestigious awards along the way.
                </p>
              </div>
              <div className="div-7">
                <p className="p">
                  Avy partners with select strategists, storytellers, designers and content creators on complex projects
                  on a per-need basis
                </p>
                <Button className="design-component-instance-node" text="WORK WITH US" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="PHILLOSOPHY">
        <Headline
          className="design-component-instance-node"
          hasDiv={false}
          state="default"
          text="PHILOSOPHY"
          visible={false}
        />
        <div className="div-5">
          <div className="div-wrapper">
            <div className="div-8">
              <div className="num-title">
                <Number variant={ getCardResponse() } />
                <div className="text-wrapper-11">PASSIONATE</div>
              </div>
              <div className="description">
                <p className="text-wrapper-12">
                  We breathe life into brands through creative design, driven by our love for making a difference.
                </p>
              </div>
            </div>
          </div>
          <div className="div-wrapper">
            <div className="div-8">
              <div className="num-title">
                <Number divClassName="number-instance" text="02" variant={ getCardResponse() } />
                <div className="text-wrapper-11">BE CURIOUS</div>
              </div>
              <div className="description">
                <p className="text-wrapper-12">
                  We question, we explore, and we deliver successful outcomes fueled by our curiosity.
                </p>
              </div>
            </div>
          </div>
          <div className="div-wrapper">
            <div className="div-8">
              <div className="num-title">
                <Number divClassName="number-instance" text="03" variant={ getCardResponse() } />
                <div className="text-wrapper-11">COMMUNICATE</div>
              </div>
              <div className="description">
                <p className="text-wrapper-12">We keep it straightforward, no jargon. We&#39;re always in touch.</p>
              </div>
            </div>
          </div>
          <div className="div-wrapper">
            <div className="div-8">
              <div className="num-title">
                <Number divClassName="number-2" text="04" variant={ getCardResponse() } />
                <div className="text-wrapper-11">GRATEFUL</div>
              </div>
              <div className="description">
                <p className="text-wrapper-12">
                  Every opportunity to work with new clients is an honour, regardless of size.
                </p>
              </div>
            </div>
          </div>
          <div className="div-wrapper">
            <div className="div-8">
              <div className="num-title">
                <Number divClassName="number-instance" text="05" variant={ getCardResponse() } />
                <div className="text-wrapper-11">USER IN MIND</div>
              </div>
              <div className="description">
                <p className="text-wrapper-12">We keep it straightforward, no jargon. We&#39;re always in touch.</p>
              </div>
            </div>
          </div>
          <div className="div-wrapper">
            <div className="div-8">
              <div className="num-title">
                <Number divClassName="number-3" text="06" variant={ getCardResponse() } />
                <div className="text-wrapper-11">CONSTANT LEARNING</div>
              </div>
              <div className="description">
                <p className="text-wrapper-12">
                  We believe in the power of collaboration, shared knowledge &amp; continuous learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="div-4">
        <Headline
          className="design-component-instance-node"
          hasDiv={false}
          state="default"
          text="WHAT PEOPLE SAY ABOUT US"
          visible={false}
        />
        <div className="frame-3">
          <div className="div-6">
            <div className="content-2">
              <div className="card">
                <div className="card-content">
                  <div className="service-tag">
                    <img className="line-3" alt="Line" src="/img/line-20-2.svg" />
                    <div className="text-wrapper-13">WEB DESIGN</div>
                    <img className="line-3" alt="Line" src="/img/line-20-2.svg" />
                  </div>
                  <div className="text-pict">
                    <div className="client-text-wrapper">
                      <div className="client-text">
                        <div className="client">
                          <div className="text-wrapper-14">K FARMAH</div>
                          <p className="text-wrapper-15">DENTIST / PRINCIPAL AT HOUSE OF DENTAL</p>
                        </div>
                        <p className="text-wrapper-16">
                          Great service from the team at AVY! Needed help with refreshing an old website and creating a
                          new landing page. Nothing was too much of a hassle for them to sort out and were happy to
                          accommodate my demanding needs. Very responsive to communication and well priced. Overall a
                          flawless experience and will be using this agency again. Thank you to the team at AVY!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-2">
              <div className="card">
                <div className="card-content">
                  <div className="service-tag">
                    <img className="line-3" alt="Line" src="/img/line-19-1.svg" />
                    <div className="text-wrapper-13">BRANDING, DESIGN</div>
                    <img className="line-3" alt="Line" src="/img/line-20-1.svg" />
                  </div>
                  <div className="text-pict">
                    <div className="client-text-wrapper">
                      <div className="client-text">
                        <div className="client">
                          <div className="text-wrapper-14">J PALL</div>
                          <div className="text-wrapper-15">DENTIST</div>
                        </div>
                        <p className="text-wrapper-16">
                          I was really pleased with the team at AVY design. We wanted a logo designing for a new
                          initiative and the team were full of great ideas and suggestions for us. They took the time to
                          get to know exactly what we wanted. Very pleased with the final logo which was done very
                          efficiently. Would definitely recommend them and use their services again in the future. Thank
                          you.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-2">
              <div className="num">
                <div className="text-wrapper-17">02</div>
              </div>
              <div className="card-2">
                <div className="card-content">
                  <div className="service-tag">
                    <img className="line-4" alt="Line" src="/img/line-20-2.svg" />
                    <div className="text-wrapper-13">BRANDING, DESIGN</div>
                    <img className="line-5" alt="Line" src="/img/line-20-2.svg" />
                  </div>
                  <div className="text-pict">
                    <div className="client-text-wrapper">
                      <div className="client-text">
                        <div className="client">
                          <div className="text-wrapper-14">J PALL</div>
                          <div className="text-wrapper-15">DENTIST</div>
                        </div>
                        <p className="text-wrapper-16">
                          I was really pleased with the team at AVY design. We wanted a logo designing for a new
                          initiative and the team were full of great ideas and suggestions for us. They took the time to
                          get to know exactly what we wanted. Very pleased with the final logo which was done very
                          efficiently. Would definitely recommend them and use their services again in the future. Thank
                          you.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rectangle-2" />
              </div>
            </div>
          </div>
          <div className="button-container">
            <Button className="button design-component-instance-node" text="SHOW MORE (+5)" />
          </div>
        </div>
      </div>
      <div className="div-3">
        <Headline
          className="design-component-instance-node"
          hasDiv={false}
          state="default"
          text="OUR TEAM"
          visible={false}
        />
        <div className="content-container">
          <div className="div-9">
            <div className="avatar">
              <div className="content-3">
                <img className="img-2" alt="Doodle ed normal" src="/img/doodle-ed-normal.svg" />
                <div className="div-wrapper-2">
                  <div className="div-10">
                    <div className="text-wrapper-18">ED</div>
                    <div className="div-wrapper-3">
                      <div className="text-wrapper-13">HEAD OF DESIGN</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="avatar">
              <div className="content-3">
                <img className="img-2" alt="Avy website team" src="/img/avy-website-team-doodles-kay.svg" />
                <div className="div-wrapper-2">
                  <div className="div-10">
                    <div className="text-wrapper-18">KAY</div>
                    <div className="div-wrapper-3">
                      <div className="text-wrapper-13">PRINT</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="div-9">
            <div className="avatar">
              <div className="content-3">
                <img className="img-2" alt="Avy website team" src="/img/avy-website-team-doodles-marlene.svg" />
                <div className="div-wrapper-2">
                  <div className="div-10">
                    <div className="text-wrapper-18">MARLENE</div>
                    <div className="div-wrapper-3">
                      <div className="text-wrapper-13">MOTION DESIGNER</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="avatar-hovered">
              <div className="content-3">
                <img className="img-2" alt="Doodle sample avy" src="/img/doodle-sample-avy-mouseover.svg" />
                <div className="text-content-2">
                  <div className="div-wrapper-2">
                    <div className="div-10">
                      <div className="text-wrapper-18">AVY</div>
                      <div className="div-wrapper-3">
                        <div className="text-wrapper-13">FOUNDER</div>
                      </div>
                    </div>
                  </div>
                  <div className="desc">
                    <p className="text-wrapper-19">
                      Lörem ipsum hypogt kromyras som bede inte nyn. Hel vire madigt lad i digitalbox. Meganing abel,
                      burkini faning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="avatar">
              <div className="content-3">
                <img className="img-2" alt="Doodle shiraz normal" src="/img/doodle-shiraz-normal.svg" />
                <div className="div-wrapper-2">
                  <div className="div-10">
                    <div className="text-wrapper-18">SHIRAZ</div>
                    <div className="div-wrapper-3">
                      <div className="text-wrapper-13">MOTION &amp; VFX</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="div-9">
            <div className="avatar">
              <div className="content-3">
                <img className="img-2" alt="Avy website team" src="/img/avy-website-team-doodles-bijo.svg" />
                <div className="div-wrapper-2">
                  <div className="div-10">
                    <div className="text-wrapper-18">BIJO</div>
                    <div className="div-wrapper-3">
                      <div className="text-wrapper-13">FRONT END DEVELOPER</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="avatar">
              <div className="content-3">
                <img className="img-2" alt="Avy website team" src="/img/avy-website-team-doodles-rakka.svg" />
                <div className="div-wrapper-2">
                  <div className="div-10">
                    <div className="text-wrapper-18">RAKA</div>
                    <div className="div-wrapper-3">
                      <div className="text-wrapper-13">UX/UI DESIGNER</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="SURVEY">
        <div className="content-4">
          <p className="text-wrapper-20">NOW LETS FIND OUT ABOUT YOU</p>
          <div className="div-7">
            <div className="text-2">
              <div className="l-rem-ipsum">LÖREM IPSUM</div>
              <div className="l-rem-ipsum-2">LÖREM IPSUM</div>
              <div className="l-rem-ipsum-2">LÖREM IPSUM</div>
            </div>
            <Button className="design-component-instance-node" text="START SURVEY" />
          </div>
        </div>
      </div>
      <div className="READY-TO-WORK-WITH">
        <div className="div-5">
          <div className="text-wrapper-21 ready">ARE YOU READY TO</div>
          <div className="frame-4">
            <img className="line-6" alt="Line" src="/img/line-10.svg" />
            <div className="text-wrapper-21 work">WORK</div>
            <img className="line-6" alt="Line" src="/img/line-10.svg" />
          </div>
          <div className="frame-4">
            <div className="text-wrapper-21">WITH</div>
            <img className="line-6" alt="Line" src="/img/line-9.svg" />
            <div className="US">
              <div className="frame-5">
                <div className="text-wrapper-22">US</div>
              </div>
              <div className="text-wrapper-21">?</div>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <div className="content-5">
            <div className="form">
              <div className="div-13">
                <div className="title">
                  <div className="text-wrapper-12">SUBJECT</div>
                </div>
                <div className="dropdown-container">
                  <div className="div-8">
                    <div className="text-wrapper-23">Select</div>
                    <img className="mdi-menu-down" alt="Mdi menu down" src="/img/mdi-menu-down.svg" />
                  </div>
                  <img className="line-2" alt="Line" src="/img/line-2-1.svg" />
                </div>
              </div>
              <div className="div-11">
                <div className="title-2">
                  <div className="text-wrapper-12">NAME</div>
                </div>
                <div className="div-12">
                  <div className="text-wrapper-23">Enter Your Name</div>
                  <img className="line-2" alt="Line" src="/img/line-1-1.svg" />
                </div>
              </div>
              <div className="div-11">
                <div className="title-2">
                  <div className="text-wrapper-12">EMAIL</div>
                </div>
                <div className="div-12">
                  <div className="text-wrapper-23">Enter Your Email</div>
                  <img className="line-2" alt="Line" src="/img/line-1-1.svg" />
                </div>
              </div>
              <div className="div-11">
                <div className="title-2">
                  <div className="text-wrapper-12">PHONE</div>
                </div>
                <div className="div-12">
                  <div className="text-wrapper-23">Enter Your Phone</div>
                  <img className="line-2" alt="Line" src="/img/line-1-1.svg" />
                </div>
              </div>
              <div className="div-11">
                <div className="title">
                  <div className="text-wrapper-12">BUDGET</div>
                </div>
                <div className="div-12">
                  <div className="div-8">
                    <p className="text-wrapper-23">What did you have <br /> in mind?</p>
                    <img className="mdi-menu-down" alt="Mdi menu down" src="/img/mdi-menu-down.svg" />
                  </div>
                  <img className="line-2" alt="Line" src="/img/line-2.svg" />
                </div>
              </div>
              <div className="message">
                <div className="title-2">
                  <div className="text-wrapper-12">MESSAGE</div>
                </div>
                <div className="div-12">
                  <p className="text-wrapper-23">Tell us about <br />  your amazing idea!</p>
                  <img className="line-2" alt="Line" src="/img/line-1.svg" />
                </div>
              </div>
            </div>
            <FormButton className="design-component-instance-node" state="default" text="SEND" />
          </div>
        </div>
      </div>
      <Footer className="FOOTER-instance" />
    </div>
  );
};

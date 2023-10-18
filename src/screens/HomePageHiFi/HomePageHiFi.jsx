import React, { useState, useEffect } from "react";
import { Button } from "../../components/Button";
import { CardsHowWeDo } from "../../components/CardsHowWeDo";
import { CardsHowWeThink } from "../../components/CardsHowWeThink";
import { Footer } from "../../components/Footer";
import { FormButton } from "../../components/FormButton";
import { Headline } from "../../components/Headline";
import { Number } from "../../components/Number";
import { NavigationBar } from "../../components/NavigationBar";
import { Menu } from '../../components/Menu';
import "./style.css";

export const HomePageHiFi = () => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(true);

  // useEffect(() => {
  //   function handleScroll() {
  //     if(window.scrollY > 0) {
  //       setShowBurgerMenu(false);
  //     } else {
  //       setShowBurgerMenu(true);
  //     }
  //   }

  //   window.addEventListener('scroll', handleScroll);

  //   return() => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

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
    });
  }, [screenSize]);


 function getNavResponse(){
  console.log(window.scrollY)
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
    <div className="home-page-hi-fi">
      <div className="div-3">
        <div className="HERO">
          <NavigationBar className="design-component-instance-node" state={getNavResponse()} />
          <div className="overlap">
            <div className="overlap-group-3">
              <div className="headline-content">
                <div className="headline-2">
                  <div className="text-wrapper-14">WE ARE</div>
                  <div className="frame-3">
                    <div className="text-wrapper-15">AVY</div>
                    <div className="text-wrapper-16">®</div>
                  </div>
                </div>
                <p className="we-ignite">
                  We ignite collaboration with ambitious brands &amp; businesses, marketers, and executives, crafting.
                  Jaw-dropping creative solutions across industries
                </p>
              </div>
              <div className="image">
                <img className="unsplash" alt="Unsplash" src="./img/unsplash-xcz78dlxtes.png" />
                <img
                  className="avy-website-banner"
                  alt="Avy website banner"
                  src="./img/avy-website-banner-pattern-2.svg"
                />
              </div>
            </div>
            <div className="service-list">
              <div className="text-wrapper-17">CORE SERVICES:</div>
              <div className="div-4">
                <div className="div-4">
                  <img className="line-3" alt="Line" src="./img/line-15.svg" />
                  <div className="div-5">
                    <div className="text-wrapper-18">Design</div>
                    <div className="text-wrapper-19">01</div>
                  </div>
                  <img className="line-4" alt="Line" src="./img/line-15.svg" />
                </div>
                <div className="div-4">
                  <div className="div-5">
                    <div className="text-wrapper-18">Brand Strategy</div>
                    <div className="text-wrapper-19">02</div>
                  </div>
                  <img className="line-4" alt="Line" src="./img/line-15.svg" />
                </div>
                <div className="div-4">
                  <div className="div-5">
                    <div className="text-wrapper-18">Motion Design &amp; Animation</div>
                    <div className="text-wrapper-19">03</div>
                  </div>
                  <img className="line-4" alt="Line" src="./img/line-15.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-simple">
          {/* {showBurgerMenu ? (
          <NavigationBar className="design-component-instance-node" state="burger" />
          ): (
            <Menu state="show" />
          )} */}
          <NavigationBar className="design-component-instance-node" state="burger" />
          <Menu state="hide" />
        </div>
        <div className="ABOUT">
          <Headline className="headline-instance" hasDiv={false} state="default" text="LET&#39;S BEGIN" visible={false} />
          <div className="intro-text">
            <div className="quote-container">
              <div className="quote-text">
                <p className="THE-DIFFERENCE">
                  &#34;THE DIFFERENCE <br/> BETWEEN ORDINARY AND EXTRAORDINARY <br/> IS THAT LITTLE EXTRA.&#34;
                </p>
                <div className="text-wrapper-20">– JIMMY JOHNSON</div>
              </div>
            </div>
            <p className="we-transform-your">
              We transform your ideas into reality through cutting-edge design, branding, and motion. We&#39;re not just
              experts; we&#39;re passionate strategists and visionary storytellers committed to excellence. <br />
              <br />
              Our collaborative ethos thrives in today&#39;s creative <br />landscape, serving startups and enterprises.{" "}
              <br />
              <br />
              Let&#39;s embark on your creative journey to happiness together.
            </p>
          </div>
        </div>
      </div>
      <div className="div-3 how-we-think">
        <div className="how-we-think-headline">
          <Headline className="headline-instance" state="default" text="HOW" text1="WE THINK" text2="LOREM IPSUM" />
        </div>
        <div className="content-button">
          <div className="content-container">
            <CardsHowWeThink 
              className="design-component-instance-node" 
              variant={getCardResponse()} />
            <CardsHowWeThink
              className="design-component-instance-node"
              numberDivClassName="design-component-instance-node-2"
              numberText="02"
              variant={getCardResponse()}
            />
            <CardsHowWeThink
              className="design-component-instance-node"
              numberDivClassName="design-component-instance-node-2"
              numberText="03"
              variant={getCardResponse()}
            />
          </div>
          <div className="button-container">
            <Button className="design-component-instance-node" 
            text="CONTACT US FOR MORE WORK" 
          />
          </div>
        </div>
      </div>
      <div className="div-6">
        <Headline className="headline-instance" state="default" text="SERVICES" text1="THAT" text2="WE OFFER" />
        <div className="content-2">
          <div className="title">
            <Number text="01" variant={getCardResponse()} />
            <div className="text-wrapper-21">DESIGN</div>
          </div>
          <div className="services">
            <div className="content-3">
              <div className="text-wrapper-22">EXHIBITION STAND DESIGN</div>
              <p className="text-wrapper-23">
                Lörem ipsum diska kehysade. Bedåv köktigt. Såna belingar håligen för att besk och nybitev.
              </p>
            </div>
            <div className="content-4">
              <div className="POWERPOINT">
                POWERPOINT
                <br />
                PRESENTATION DESIGN
              </div>
              <p className="text-wrapper-23">
                Lörem ipsum diska kehysade. Bedåv köktigt. Såna belingar håligen för att besk och nybitev.
              </p>
            </div>
            <div className="content-4">
              <div className="POWERPOINT">
                POWERPOINT
                <br />
                PRESENTATION DESIGN
              </div>
              <p className="text-wrapper-23">
                Lörem ipsum diska kehysade. Bedåv köktigt. Såna belingar håligen för att besk och nybitev.
              </p>
            </div>
            <div className="content-4">
              <div className="POWERPOINT">
                POWERPOINT
                <br />
                PRESENTATION DESIGN
              </div>
              <p className="text-wrapper-23">
                Lörem ipsum diska kehysade. Bedåv köktigt. Såna belingar håligen för att besk och nybitev.
              </p>
            </div>
            <div className="content-4">
              <div className="POWERPOINT">
                POWERPOINT
                <br />
                PRESENTATION DESIGN
              </div>
              <p className="text-wrapper-23">
                Lörem ipsum diska kehysade. Bedåv köktigt. Såna belingar håligen för att besk och nybitev.
              </p>
            </div>
          </div>
        </div>
        <div className="content-2">
          <div className="title">
            <Number divClassName="design-component-instance-node-2" text="02" variant={getCardResponse()} />
            <div className="text-wrapper-21">BRANDING</div>
          </div>
          <div className="services">
            <div className="content-4">
              <div className="text-wrapper-24">BRANDING DESIGN</div>
              <p className="text-wrapper-23">
                Lörem ipsum diska kehysade. Bedåv köktigt. Såna belingar håligen för att besk och nybitev.
              </p>
            </div>
            <div className="content-4">
              <div className="text-wrapper-24">LOREM IPSUM</div>
              <p className="text-wrapper-23">
                Lörem ipsum diska kehysade. Bedåv köktigt. Såna belingar håligen för att besk och nybitev.
              </p>
            </div>
            <div className="content-4">
              <div className="text-wrapper-24">LOREM IPSUM</div>
              <p className="text-wrapper-23">
                Lörem ipsum diska kehysade. Bedåv köktigt. Såna belingar håligen för att besk och nybitev.
              </p>
            </div>
            <div className="content-4">
              <div className="text-wrapper-24">LOREM IPSUM</div>
              <p className="text-wrapper-23">
                Lörem ipsum diska kehysade. Bedåv köktigt. Såna belingar håligen för att besk och nybitev.
              </p>
            </div>
            <div className="content-4">
              <div className="text-wrapper-24">LOREM IPSUM</div>
              <p className="text-wrapper-23">
                Lörem ipsum diska kehysade. Bedåv köktigt. Såna belingar håligen för att besk och nybitev.
              </p>
            </div>
          </div>
        </div>
        <div className="content-2">
          <div className="title">
            <Number divClassName="design-component-instance-node-2" text="03" variant={getCardResponse()}/>
            <div className="text-wrapper-21">MOTION</div>
          </div>
          <div className="services">
            <div className="content-4">
              <div className="text-wrapper-24">MOTION DESIGN</div>
              <p className="text-wrapper-23">
                Lörem ipsum diska kehysade. Bedåv köktigt. Såna belingar håligen för att besk och nybitev.
              </p>
            </div>
            <div className="content-4">
              <div className="text-wrapper-24">LOREM IPSUM</div>
              <p className="text-wrapper-23">
                Lörem ipsum diska kehysade. Bedåv köktigt. Såna belingar håligen för att besk och nybitev.
              </p>
            </div>
            <div className="content-4">
              <div className="text-wrapper-24">LOREM IPSUM</div>
              <p className="text-wrapper-23">
                Lörem ipsum diska kehysade. Bedåv köktigt. Såna belingar håligen för att besk och nybitev.
              </p>
            </div>
            <div className="content-4">
              <div className="text-wrapper-24">LOREM IPSUM</div>
              <p className="text-wrapper-23">
                Lörem ipsum diska kehysade. Bedåv köktigt. Såna belingar håligen för att besk och nybitev.
              </p>
            </div>
            <div className="content-4">
              <div className="text-wrapper-24">LOREM IPSUM</div>
              <p className="text-wrapper-23">
                Lörem ipsum diska kehysade. Bedåv köktigt. Såna belingar håligen för att besk och nybitev.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="HOW-WE-DO-THINGS">
        <Headline className="headline-instance" state="default" text="HOW" text1="WE DO" text2="THINGS" />
        <div className="content-5">
          <CardsHowWeDo className="design-component-instance-node" variant="research" />
          <CardsHowWeDo className="design-component-instance-node" variant="design" />
          <CardsHowWeDo className="design-component-instance-node" variant="develop" />
          {/* <CardsHowWeDo className="design-component-instance-node" variant="testing" /> */}

          {/* <div className="cards-how-we-do-2">
            <img className="line-9" alt="Line" src="/img/vector-17.png" />
            <div className="cards-inside-2">
              <div className="div-7">
                <div className="overlap-group-4">
                  <img className="vector-7" alt="Vector" src="/img/vector-17.png" />
                  <img className="union-2" alt="Union" src="/img/vector-17.png" />
                  <img className="vector-8" alt="Vector" src="/img/vector-17.png" />
                  <img className="vector-9" alt="Vector" src="/img/vector-17.png" />
                </div>
                <div className="rectangle-4" />
              </div>
              <div className="text-wrapper-25">DEVELOP</div>
            </div>
            <p className="text-wrapper-26">
              Lörem ipsum preteng teradat om metromani. Rera visa or vask. Vagt homossa på destism visa vuräledes. Krong
              kuddbok. Barista press öd byl jedåde.
            </p>
          </div>*/}
          <div className="cards-how-we-do-2">
            <div className="cards-inside-2">
              <div className="div-7">
                <img className="testing-img" src="/img/testing.jpg" />
              </div>
              <div className="text-wrapper-25">TESTING</div>
            </div>
            <p className="text-wrapper-26">
              Lörem ipsum preteng teradat om metromani. Rera visa or vask. Vagt homossa på destism visa vuräledes. Krong
              kuddbok. Barista press öd byl jedåde.
            </p>
          </div> 
        </div>
      </div>
      <div className="div-6">
        <Headline className="headline-instance" state="default" text="CLIENTS" text1="WE HAVE" text2="WORKED WITH" />
        <div className="content-6">
          <div className="left-content">
            <p className="text-wrapper-27">WHO WE&#39;VE DONE IT FOR</p>
            <div className="industries">
              <div className="text-wrapper-28">INDUSTRIES:</div>
              <div className="frame-4">
                <div style={{display:"flex"}}>
                    <div className="text-wrapper-29">MANUFACTURING</div>
                    <div style={{padding:"0 30px"}} className="text-wrapper-29">F&amp;B</div>
                    <div className="text-wrapper-29">TECH</div>
                </div>
                <div style={{display:"flex"}}>
                  <div className="text-wrapper-30">FINTECH</div>
                  <div style={{padding:"0 30px"}} className="text-wrapper-30">FINANCE</div>
                  <div className="text-wrapper-30">GAMING</div>                  
                </div>
                <div style={{display:"flex"}}>
                  <div className="text-wrapper-30">HVAC</div>
                  <div style={{paddingLeft:"30px"}} className="text-wrapper-30">WATER, GAS, &amp; UTILITIES</div>
                </div>
                <div style={{display:"flex"}}>
                  <div className="text-wrapper-30">EDUCATION</div>
                  <div style={{paddingLeft:"30px"}} className="text-wrapper-30">TRANSPORTATION</div>
                </div>                
              </div>
            </div>
          </div>
          <div className="div-8">
            <div className="clients-name">
              <div className="text-wrapper-31">XXXXXX</div>
              <div className="text-wrapper-32">XXXXXX</div>
              <div className="text-wrapper-32">XXXXXX</div>
              <div className="text-wrapper-32">XXXXXX</div>
              <div className="text-wrapper-32">XXXXXX</div>
              <div className="text-wrapper-32">XXXXXX</div>
              <div className="text-wrapper-32">XXXXXX</div>
              <div className="text-wrapper-32">XXXXXX</div>
            </div>
            <Button className="design-component-instance-node" text="WORK WITH US" />
          </div>
        </div>
      </div>
      <div className="div-6">
        <div className="text-wrapper-33">INSIGHTS</div>
        <div className="content-7">
          <div className="div-9">
            <div className="div-10">
              <div className="date-text-container">
                <div className="date-text">
                  <div className="text-wrapper-34">30 June 2021</div>
                  <p className="text-wrapper-35">AVY Pruthi, Nuneaton business owner – Coven...</p>
                </div>
              </div>
              <div className="narrow-web-btn">
                <img className="button-2" alt="Button" src="./img/web-narrow-button.svg" />
              </div>
              <div className="narrow-mobile-btn">
                <img className="button-2" alt="Button" src="./img/mobile-narrow-button.svg" />
              </div>
            </div>
            <div className="div-10">
              <div className="date-text-container">
                <div className="date-text">
                  <div className="text-wrapper-34">28 June 2021</div>
                  <p className="text-wrapper-35">Daily Logo Challenge for 50 days</p>
                </div>
              </div>
              <div className="narrow-web-btn">
                <img className="button-2" alt="Button" src="./img/web-narrow-button.svg" />
              </div>
              <div className="narrow-mobile-btn">
                <img className="button-2" alt="Button" src="./img/mobile-narrow-button.svg" />
              </div>
            </div>
            <div className="div-10">
              <div className="date-text-container">
                <div className="date-text">
                  <div className="text-wrapper-34">18 June 2021</div>
                  <p className="text-wrapper-35">Bringing a Business to Life: Chamber of Comm...</p>
                </div>
              </div>
              <div className="narrow-web-btn">
                <img className="button-2" alt="Button" src="./img/web-narrow-button.svg" />
              </div>
              <div className="narrow-mobile-btn">
                <img className="button-2" alt="Button" src="./img/mobile-narrow-button.svg" />
              </div>
            </div>
            <div className="div-10">
              <div className="date-text-container">
                <div className="date-text">
                  <div className="text-wrapper-34">05 May 2021</div>
                  <p className="text-wrapper-35">Our new Trustpilot partnership, and how it&#39;ll h...</p>
                </div>
              </div>
              <div className="narrow-web-btn">
                <img className="button-2" alt="Button" src="./img/web-narrow-button.svg" />
              </div>
              <div className="narrow-mobile-btn">
                <img className="button-2" alt="Button" src="./img/mobile-narrow-button.svg" />
              </div>
            </div>
          </div>
          <Button className="design-component-instance-node" text="READ MORE" />
        </div>
      </div>
      <div className="SURVEY">
        <div className="content-6">
          <p className="text-wrapper-36">NOW LET&#39;S FIND OUT <br /> ABOUT YOU</p>
          <div className="div-8">
            <div className="text-2">
              <div className="l-rem-ipsum">LÖREM IPSUM</div>
              <div className="l-rem-ipsum">LÖREM IPSUM</div>
              <div className="l-rem-ipsum">LÖREM IPSUM</div>
            </div>
            <Button className="design-component-instance-node" text="START SURVEY" />
          </div>
        </div>
      </div>
      <div className="ready-to-work">
        <div className="div-9">
          <div className="text-wrapper-37 ready">ARE YOU READY TO</div>
          <div className="frame-5">
            <img className="line-10" alt="Line" src="/img/line-10.svg" />
            <div className="text-wrapper-37 work">WORK</div>
            <img className="line-10" alt="Line" src="/img/line-10.svg" />
          </div>
          <div className="frame-5">
            <div className="text-wrapper-37">WITH</div>
            <img className="line-10" alt="Line" src="/img/line-9.svg" />
            <div className="US">
              <div className="frame-6">
                <div className="text-wrapper-38">US</div>
              </div>
              <div className="text-wrapper-37">?</div>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <div className="content-8">
            <div className="form">
              <div className="div-10">
                <div className="title-2">
                  <div className="text-wrapper-39">SUBJECT</div>
                </div>
                <div className="dropdown-container">
                  <div className="div-5">
                    <div className="text-wrapper-39">Select</div>
                    <img className="mdi-menu-down" alt="Mdi menu down" src="/img/mdi-menu-down.svg" />
                  </div>
                  <img className="line-11" alt="Line" src="/img/line-2-1.svg" />
                </div>
              </div>
              <div className="div-11">
                <div className="title-3">
                  <div className="text-wrapper-39">NAME</div>
                </div>
                <div className="div-12">
                  <div className="text-wrapper-40">Enter Your Name</div>
                  <img className="line-11" alt="Line" src="/img/line-1-1.svg" />
                </div>
              </div>
              <div className="div-11">
                <div className="title-3">
                  <div className="text-wrapper-39">EMAIL</div>
                </div>
                <div className="div-12">
                  <div className="text-wrapper-40">Enter Your Email</div>
                  <img className="line-11" alt="Line" src="/img/line-1-1.svg" />
                </div>
              </div>
              <div className="div-11">
                <div className="title-3">
                  <div className="text-wrapper-39">PHONE</div>
                </div>
                <div className="div-12">
                  <div className="text-wrapper-40">Enter Your Phone</div>
                  <img className="line-11" alt="Line" src="/img/line-1-1.svg" />
                </div>
              </div>
              <div className="div-11">
                <div className="title-2">
                  <div className="text-wrapper-39">BUDGET</div>
                </div>
                <div className="div-12">
                  <div className="div-5">
                    <p className="text-wrapper-39">What did you have in mind?</p>
                    <img className="mdi-menu-down" alt="Mdi menu down" src="/img/mdi-menu-down.svg" />
                  </div>
                  <img className="line-11" alt="Line" src="/img/line-2.svg" />
                </div>
              </div>
              <div className="message">
                <div className="title-3">
                  <div className="text-wrapper-39">MESSAGE</div>
                </div>
                <div className="div-12">
                  <p className="text-wrapper-40">Tell us about your amazing idea!</p>
                  <img className="line-11" alt="Line" src="/img/line-1.svg" />
                </div>
              </div>
            </div>
            <FormButton className="design-component-instance-node" state="default" text="SEND" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

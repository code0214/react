/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const CardsHowWeDo = ({ variant, className, group = "/img/group-2-1.png" }) => {
  return (
    <div className={`cards-how-we-do ${className}`}>
      {["design", "develop", "research"].includes(variant) && (
        <img className="line" alt="Line" src="/img/line-8-3.svg" />
      )}

      <div className="cards-inside">
        <div className="overlap-group-wrapper">
          <div className={`overlap-group ${variant}`}>
            <img
              className="vector"
              alt="Vector"
              src={["develop", "testing"].includes(variant) ? "/img/vector-8.png" : "/img/vector-12.png"}
            />
            {["design", "research"].includes(variant) && <div className="rectangle-2" />}

            <img className="union" alt="Union" src="/img/union-5.svg" />
            {["research", "testing"].includes(variant) && (
              <div className="group">
                {variant === "testing" && (
                  <>
                    <div className="vector-wrapper">
                      <img className="img" alt="Vector" src="/img/vector-16-3.svg" />
                    </div>
                    <div className="img-wrapper">
                      <img className="img" alt="Vector" src="/img/vector-16-3.svg" />
                    </div>
                    <div className="group-2">
                      <img className="img" alt="Vector" src="/img/vector-16-3.svg" />
                    </div>
                  </>
                )}

                {variant === "research" && (
                  <>
                    <img className="subtract" alt="Subtract" src="/img/subtract-3.svg" />
                    <img className="subtract-2" alt="Subtract" src="/img/subtract-3.svg" />
                    <img className="subtract-3" alt="Subtract" src="/img/subtract-3.svg" />
                  </>
                )}
              </div>
            )}

            {variant === "develop" && <div className="rectangle-3" />}

            {["design", "develop", "research"].includes(variant) && (
              <img
                className="vector-2"
                alt="Vector"
                src={
                  variant === "design"
                    ? "/img/vector-11.svg"
                    : variant === "research"
                    ? "/img/union-8.svg"
                    : "/img/vector-9.png"
                }
              />
            )}

            {variant === "develop" && <img className="vector-3" alt="Vector" src="/img/vector-15-1.svg" />}

            {variant === "testing" && (
              <>
                <div className="group-3">
                  <div className="group-4">
                    <img className="vector-4" alt="Vector" src="/img/vector-19-1.svg" />
                  </div>
                  <div className="group-5">
                    <img className="vector-4" alt="Vector" src="/img/vector-19-1.svg" />
                  </div>
                  <div className="group-6">
                    <img className="vector-4" alt="Vector" src="/img/vector-19-1.svg" />
                  </div>
                </div>
                <img className="vector-5" alt="Vector" src="/img/vector-7.svg" />
                <div className="div-wrapper">
                  <div className="overlap-group-2">
                    <img className="vector-6" alt="Vector" src="/img/vector-17-2.svg" />
                  </div>
                </div>
              </>
            )}

            {variant === "design" && (
              <>
                <div className="ellipse" />
                <img className="group-7" alt="Group" src={group} />
              </>
            )}
          </div>
        </div>
        <div className="RESEARCH">
          {variant === "research" && <>RESEARCH</>}

          {variant === "design" && <>DESIGN</>}

          {variant === "develop" && <>DEVELOP</>}

          {variant === "testing" && <>TESTING</>}
        </div>
      </div>
      <p className="text-wrapper-8">
        Lörem ipsum preteng teradat om metromani. Rera visa or vask. Vagt homossa på destism visa vuräledes. Krong
        kuddbok. Barista press öd byl jedåde.
      </p>
    </div>
  );
};

CardsHowWeDo.propTypes = {
  variant: PropTypes.oneOf(["develop", "design", "research", "testing"]),
  group: PropTypes.string,
};

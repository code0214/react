import PropTypes from "prop-types";
import React, { useState} from "react";
import "./style.css";

export const NavigationBarSimple = ( {state, className }, { onUpdate }) => {
    const [toggle, setToggle]  = useState(false);
    // const toggleShow = () => {
    //     setToggle(!toggle);
    //     toggle === true ? props.onUpdate("show") : props.onUpdate("hide");
    //     console.log('toggle', toggle);
    // }

    return(
        <div className={`navigation-bar ${state} ${className}`}>
            <div className="content">
                <img className="AVY-LOGO"  alt="Avy LOGO" src={state === "white" ? "/img/avy-logo-2.png": "image.png"} />
                <img className = "mdi-menu" alt="Mdi menu" src = {state === "white" ? "/img/mdi-menu.svg": "image.svg"} />
            </div>
            <div className="scrollbar" />
        </div>

    );
} ;

NavigationBarSimple.propTypes = {
    state: PropTypes.oneOf(["white", "homepage-hero"])
}
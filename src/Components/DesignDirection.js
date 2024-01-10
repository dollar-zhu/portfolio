import React from "react";
import Arrow from "../Images/Arrow.svg";
import "../IndependentProject.css";

const DesignDirection = ({ element }) => {
  const isMobile = window.innerWidth < 768;

  const desktop = (
    <div className="grid-1x3-unresponsive">
      <div className="body-flex-center">
        <img src={element.icon1} alt="compass" />
        <p className="bold-center">{element.title1}</p>
        <p className="text-center">{element.description1}</p>
      </div>
      <div className="flex-center">
        <img src={Arrow} alt="arrow" />
      </div>
      <div className="body-flex-center">
        <img src={element.icon2} alt="compass" />
        <p className="bold-center">{element.title2}</p>
        <p className="text-center">{element.description2}</p>
      </div>
    </div>
  );

  const mobile = (
    <div className="grid-1x2-unresponsive">
      <div className="body-flex-center">
        <img className="design-img" src={element.icon1} alt="compass" />
        <p className="bold-center">{element.title1}</p>
        <p className="text-center">{element.description1}</p>
      </div>

      <div className="body-flex-center">
        <img className="design-img" src={element.icon2} alt="compass" />
        <p className="bold-center">{element.title2}</p>
        <p className="text-center">{element.description2}</p>
      </div>
    </div>
  );
  return isMobile ? mobile : desktop;
};

export default DesignDirection;

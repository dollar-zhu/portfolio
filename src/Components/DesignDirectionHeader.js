import React from "react";

const DesignDirectionHeader = ({ header1, header2 }) => {
  const isMobile = window.innerWidth < 768;

  const desktop = (
    <div className="grid-1x3-unresponsive">
      <h4 className="text-center">{header1}</h4>
      <h4> </h4>
      <h4 className="text-center">{header2}</h4>
    </div>
  );

  const mobile = (
    <div className="grid-1x2-unresponsive">
      <h4 className="text-center">{header1}</h4>
      <h4 className="text-center">{header2}</h4>
    </div>
  );
  return isMobile ? mobile : desktop;
};

export default DesignDirectionHeader;

import React from "react";

const LeftTextPanel = ({ title, text1, text2, img, caption }) => {
  return (
    <div className="left-text-panel">
      <div className="quote-description-area">
        <h3 className="section-title">{title}</h3>
        <p className="section-text">{text1}</p>
        <p className="section-text">{text2}</p>
      </div>
      <div className="section-image-container">
        <img className="left-text-panel-image" src={img} alt={title} />
        <p className="left-text-panel-caption">{caption}</p>
      </div>
    </div>
  );
};

export default LeftTextPanel;

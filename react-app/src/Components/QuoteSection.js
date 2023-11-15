import React from "react";

const QuoteSection = ({ quote, title, paragraph1, paragraph2 }) => {
  return (
    <div className="quote-section">
      <h2 className="quote-text">{quote}</h2>
      <div className="quote-description-area">
        <h3 className="section-title">{title}</h3>
        <p className="section-text">{paragraph1}</p>
        <p className="section-text">{paragraph2}</p>
      </div>
    </div>
  );
};

export default QuoteSection;

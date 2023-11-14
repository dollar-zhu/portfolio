import React from "react";
import DollarProfile from "../Images/Dollar-profile.png";

const AboutMeTitle = () => {
  return (
    <div>
      <h1 className="about-me-title">My Journey</h1>
      <div className="about-me-header">
        <div className="about-me-img">
          <img
            className="dollar-zhu-img"
            src={DollarProfile}
            alt="Dollar Zhu"
          />
        </div>
        <div className="about-me-text-area">
          <p className="about-me-intro-text">
            {`While the name "Dollar" might have surprised you, it did not come
        from my own choosing. The same pronunciation meant "much happiness"
        in Mandarin (多乐), a nickname used by my family and friends back
        home. Now, it is as much a mission statement as it is a name. It
        encapsulates my goal of creating fun and meaningful experiences that
        address real-world problems.`}
          </p>
        </div>
      </div>
      <p className="about-me-intro-text">
        {`I strive to be a polymath. I believe
        multidisciplinary thinking leads to innovative solutions. I hold
        undergraduate degrees in Media Studies and French, with minors in
        Economics and Math. I have worked on projects in software
        engineering, game design, academic research, and business. These
        experiences taught me how to think, design, and execute when
        presented with complex challenges.`}
      </p>
    </div>
  );
};

export default AboutMeTitle;

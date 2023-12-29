import React from "react";

const EducationSection = () => {
  return (
    <div>
      <h1 className="about-me-title">Education</h1>
      <div className="education section">
        <div className="education-column-layout">
          <div className="education-header">
            <h4 className="education-school">Brown University</h4>
            <h5 className="education-program">
              Innovation Management & Entrepreneurship
            </h5>
            <h5 className="education-program">2022-2023</h5>
          </div>
          <div className="education-description">
            <p>
              The curriculum at PRIME (Innovation Management & Entrepreneurship)
              covers business as well as design. I have taken financial
              management, strategic management, and marketing. I look to
              complement these courses with classes in product design.
            </p>
          </div>
        </div>

        <div className="education-column-layout">
          <div className="education-header">
            <h4 className="education-school">Vassar College</h4>
            <h5 className="education-program">French & Media Studies</h5>
            <h5 className="education-program">2018-2022</h5>
          </div>
          <div className="education-description">
            <p>
              At Vassar, I took classes in a range of disciplines, from French
              to Computer Science, from Political Science to Mathematics.
              Throughout my time as an undergrad student, I slowly learned to
              create synergies in these seemingly disparate fields.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;

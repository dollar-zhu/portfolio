import React from "react";
import EmptyCircle from "../Images/EmptyCircle.svg";
import FilledCircle from "../Images/FilledCircle.svg";

const SkillComponent = () => {
  return (
    <div className="skill-component">
      <h4 className="education-school">Programming</h4>
      <div className="skill-area">
        <SkillLevel
          skillName="HTML/CSS/JavaScript"
          skillNum={4}
          skillDescription={`I am a proud web developer with experience in React.js. I have built
      projects such as college campus simulations and of course, this website. I also have experience with framer motion animations and OpenAI API integrations.`}
        />
        <SkillLevel
          skillName="Python"
          skillNum={3}
          skillDescription={`My go-to solution when I do LeetCode. I have experience working with the NumPy and Pandas libraries. I have used Python in my research projects and in advanced coursework in Economics.`}
        />
        <SkillLevel
          skillName="Java"
          skillNum={3}
          skillDescription={`I'm comfortable with creating optimized algorithms using different data structures. I am also experienced in the Model-View-Controller design pattern.`}
        />
      </div>

      <h4 className="education-school">Design</h4>
      <div className="skill-area">
        <SkillLevel
          skillName="Figma"
          skillNum={5}
          skillDescription={`Before I dive into coding, I always prototype with Figma. I learned it from my UI/UX internship and have used it for every project I built since.`}
        />
        <SkillLevel
          skillName="Powerpoint"
          skillNum={4}
          skillDescription={`Slide-making is an essential skill for every management consultant. I learned it during my time at Topline Strategy and became effective at creating impactful presentations.`}
        />
      </div>

      <h4 className="education-school">Soft Skills</h4>
      <div className="skill-area">
        <SkillLevel
          skillName="User Research"
          skillNum={4}
          skillDescription={`I do user research for every project I build. I have experience with user interviews, surveys, and usability testing, including A/B testing.`}
        />
        <SkillLevel
          skillName="Market Reserach"
          skillNum={4}
          skillDescription={`I conducted market research for dental implants, truck repair software, and college admissions. For each of these projects, I identified and validated growth opportunities and estimated the market size.`}
        />
      </div>
    </div>
  );
};

const SkillLevel = ({ skillName, skillNum, skillDescription }) => (
  <div className="skill-subcomponent">
    <div className="skill-level">
      <h5 className="education-program">{skillName}</h5>
      <div className="circles">
        {[...Array(skillNum)].map((_, i) => (
          <img src={FilledCircle} alt="Filled Circle" key={i} />
        ))}
        {[...Array(5 - skillNum)].map((_, i) => (
          <img src={EmptyCircle} alt="Empty Circle" key={i} />
        ))}
      </div>
    </div>
    <p className="education-description">{skillDescription}</p>
  </div>
);

export default SkillComponent;

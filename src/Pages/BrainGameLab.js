import React from "react";
import TopNav from "../Components/TopNav";
import HeaderImage from "../Components/HeaderImage";
import background from "../Images/BrainGameLab/BG.png";
import image1 from "../Images/BrainGameLab/tailgate.png";
import logo from "../Images/BrainGameLab/logo.png";
import subway from "../Images/BrainGameLab/subway.png";
import fun from "../Images/RecycleIt/Fun.svg";
import recycle from "../Images/RecycleIt/Recycle.svg";
import research from "../Images/RecycleIt/Research.svg";
import QuoteSection from "../Components/QuoteSection";

const BrainGameLab = () => {
  const quote = `
The Brain Game Lab made me step out of my comfort zone — going into cognitive science from behavioral science, from Unity 3D to web development, and it really paid off.`;
  const introParagraph = `Run by Dr. Joshua De Leeuw, the Brain Game Lab was part of the cognitive science department. It is a web-based platform that aims to leverage the power of games to run cognitive experiments. The games cover a wide range of topics, from memory to reaction. When I first joined the lab in the summer of 2020, the platform was transitioning into React while expanding in content. It was an exciting time to join the lab, but I also felt the pressure to learn under a short timeframe — the principles of cognitive science, web development, and Firebase.`;

  const quote2 = `
  After "Tailgate," I had many ideas that I wanted to test out: some prevailed, and most failed. Appreciating failure and struggle was the most important lesson I learned at The Brain Game Lab.`;
  const paragraph2 = `During the semester following "Tailgate," I tried to generate ideas for new games. I wanted to dive into mental agility, and I came up with the idea of "Subway Mania"(shown above), a game where players need to switch subway tracks to prevent the "mutator" from infecting all the carriages. Unfortunately, we were unable to build a program that generates levels efficiently, and we had to drop the project in embryo.`;
  const paragraph3 = `I also tried out a number of other ideas, but none survived the prototyping stage. These failed attempts sharpened my senses as a designer and my skills as a developer. These lessons will be integral in my future endeavors.`;

  return (
    <div className="ind-project-page">
      <TopNav projectId={3} />
      <div className="ind-project-area">
        <HeaderImage
          image={background}
          project="The Brain Game Lab"
          link="https://thebraingamelab.org"
        />

        <div className="ind-project-description-area">
          {/* Product Info Header*/}
          <div className="grid-1-2">
            <img className="logo-img" src={logo} alt="Brain Game Lab Logo" />
            <div className="grid-1x2">
              <div className="body-flex">
                <h4>Role:</h4>
                <p className="info-p">Frontend Developer, Designer</p>
              </div>
              <div className="body-flex">
                <h4>Team:</h4>
                <p className="info-p">
                  Professor. Joshua De Leeuw (Mentor), Nick Weiner, Lynn Qi
                </p>
              </div>
              <div className="body-flex">
                <h4>Skills:</h4>
                <p className="info-p">HTML, CSS, Javascript, Firebase</p>
              </div>
              <div className="body-flex">
                <h4>Timeline:</h4>
                <p className="info-p">September 2020 - May 2021</p>
              </div>
            </div>
          </div>

          {/* Project Details*/}
          <div className="project-section">
            <QuoteSection
              quote={quote}
              title={`Joining the Lab`}
              paragraph1={introParagraph}
              paragraph2={``}
            />
          </div>

          {/* Going Live*/}
          <div className="project-section">
            <div className="flex-row">
              <div className="body-flex-middle">
                <h4>Speeding Up</h4>
                <p style={{ maxWidth: "80%", marginBottom: "20px" }}>
                  With some help from Dr. De Leeuw and my colleagues, I was on
                  board fairly quickly, and I was tasked to implement the google
                  login feature in React two weeks into the lab. Being someone
                  who had never done any web development, I was intimidated by
                  such a simple task. I struggled to follow the code provided to
                  me; I cringe at the sight of the incomprehensible errors in my
                  output window. It took many hours on Linkedin Learning and
                  many cups of coffee to finally complete the task.
                </p>
                <p style={{ maxWidth: "80%", marginBottom: "20px" }}>
                  After the task, I became more comfortable with web
                  development, and I started contributing more on the content
                  side. I began re-working "Tailgate," a game tracking motor
                  skills. I polished the "fun" aspect of it by adding features
                  such as a leaderboard and progress tracking UI. I also
                  improved the functional aspects of the game by linking it to
                  Firebase.
                </p>
              </div>
              <div className="body-flex">
                <img
                  style={{ maxWidth: "350px", height: "400px" }}
                  src={image1}
                  alt="cover"
                />
                <p className="caption">
                  This is a screenshot of tailgate. I helped convert the code
                  from vanilla javascript to react and added the real-time
                  leaderboard feature.
                </p>
              </div>
            </div>
          </div>

          <div className="project-section">
            <div className="body-flex">
              <img style={{ width: "100%" }} src={subway} alt="subway" />
              <p className="caption">
                This is a screenshot of the subway mania game I prototyped. The
                idea is that red trains will "infect" white trains, testing the
                participants' ability to track the movement of the trains.
              </p>
            </div>
          </div>

          <div className="project-section">
            <QuoteSection
              quote={quote2}
              title={`Learning to Appreciate Failure`}
              paragraph1={paragraph2}
              paragraph2={paragraph3}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrainGameLab;

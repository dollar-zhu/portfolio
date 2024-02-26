import React from "react";
import "../IndependentProject.css";
import TopNav from "../Components/TopNav";
import HeaderImage from "../Components/HeaderImage";
import brownBG from "../Images/LifeAtPRIME/BrownBG.png";
import primeLogo from "../Images/LifeAtPRIME/PRIME App Logo.png";
import pencilRuler from "../Images/LifeAtPRIME/pencil-ruler.svg";
import iterate from "../Images/LifeAtPRIME/reiterate.svg";
import magic from "../Images/LifeAtPRIME/magic.svg";
import JWULogo from "../Images/LifeAtPRIME/JWU Logo.png";
import BentleyLogo from "../Images/LifeAtPRIME/Bentley Logo.png";
import primeHomeScreen from "../Images/LifeAtPRIME/PRIME screenshot 1.png";
import primeExploreDetail from "../Images/LifeAtPRIME/PRIME Explore Detail SS.png";
import primeExplore from "../Images/LifeAtPRIME/PRIME Explore SS.png";
import primeResult from "../Images/LifeAtPRIME/PRIME Result SS.png";
import primeAtWork from "../Images/LifeAtPRIME/PrimeAtWorkSS.png";
import surveyResults from "../Images/LifeAtPRIME/Survey results.png";
import interviewInsights from "../Images/LifeAtPRIME/Interview insights.png";
import repeat from "../Images/LifeAtPRIME/repeat.svg";
import tutorial from "../Images/LifeAtPRIME/tutorial.svg";
import interaction from "../Images/LifeAtPRIME/interaction.svg";
import chat from "../Images/LifeAtPRIME/Chat.png";
import allocation from "../Images/LifeAtPRIME/Allocation.png";
import guide from "../Images/LifeAtPRIME/Guide.png";
import vassarIllustration from "../Images/LifeAtPRIME/Vassar Illustration.png";
import primeStartup from "../Images/LifeAtPRIME/PRIME Startup SS.png";
import DesignDirection from "../Components/DesignDirection";
import DesignDirectionHeader from "../Components/DesignDirectionHeader";

const LifeAtPRIME = () => {
  const designElements = [
    {
      icon1: repeat,
      title1: "Too Much Repetition",
      description1: `Students find that the process of selecting an action repetitively is boring and tiring.`,
      icon2: allocation,
      title2: "Automated Event Generation",
      description2: `We implemented an allocation function so we can automate event generation, streamlining the user experience.`,
    },
    {
      icon1: interaction,
      title1: "Superficial Interaction",
      description1: `Students also find the interaction lacking in depth. The career fair receiving as much attention as a social party doesn’t seem right.`,
      icon2: chat,
      title2: "More Types of Interaction",
      description2: `Instead of the simple point and clicks in version 1.0, we added features like chat rooms, job search, start-up, and immersion trip, resulting in a richer interaction.`,
    },
    {
      icon1: tutorial,
      title1: "Little Guidance",
      description1: `Without an elaborate tutorial in place, some students can struggle to figure out how to navigate around the app.`,
      icon2: guide,
      title2: "Guided Tutorial",
      description2: `We made sure each new feature had a tutorial walkthrough when the user first sees it. Also, we made a progress bar on the top so the user could know what to expect.`,
    },
  ];

  return (
    <div className="ind-project-page">
      <TopNav projectId={2} />
      <div className="ind-project-area">
        <HeaderImage
          image={brownBG}
          project="Life @ PRIME"
          link="https://life-at-prime.web.app"
        />

        <div className="ind-project-description-area">
          {/* Product Info Header*/}
          <div className="grid-1-2">
            <img
              className="logo-img"
              src={primeLogo}
              alt="The Vassar Life Logo"
            />
            <div className="grid-1x2">
              <div className="body-flex">
                <h4>Role:</h4>
                <p className="info-p">
                  Director, Product Designer, Lead Programmer
                </p>
              </div>
              <div className="body-flex">
                <h4>Team:</h4>
                <p className="info-p">Leo Yang</p>
              </div>
              <div className="body-flex">
                <h4>Skills:</h4>
                <p className="info-p">
                  Figma, HTML/CSS, React.js, Firebase, OpenAI API
                </p>
              </div>
              <div className="body-flex">
                <h4>Timeline:</h4>
                <p className="info-p">November 2022 - January 2024</p>
              </div>
            </div>
          </div>

          {/* Project Summary*/}
          <div className="project-section">
            <h3>Project Summary</h3>
            <div className="grid-1x3">
              <div className="body-flex-center">
                <h4 style={{ textAlign: "center", height: "60px" }}>
                  Rethinking Master’s Admission
                </h4>
                <img src={pencilRuler} alt="pencil Ruler" />
                <p className="text-center">
                  Unfortunately, master’s program admissions don’t get the
                  attention and funding undergraduates do. We wanted to help
                  students find programs with better fit.
                </p>
              </div>
              <div className="body-flex-center">
                <h4 style={{ textAlign: "center", height: "60px" }}>
                  Iterate, Iterate, Iterate Again
                </h4>
                <img src={iterate} alt="iterate" />
                <p className="text-center">
                  This project didn’t just happen. It took multiple tries to
                  finally get it right. We iterated on different versions and
                  gathered helpful feedback at each stage.
                </p>
              </div>
              <div className="body-flex-center">
                <h4 style={{ textAlign: "center", height: "60px" }}>
                  Evolve Through Technology
                </h4>
                <img src={magic} alt="magic" />
                <p className="text-center">
                  2023 was a crazy year for Gen AI. We are fortunate enough to
                  find a use case in this project to leverage the OpenAI API and
                  deliver a better user experience.
                </p>
              </div>
            </div>
          </div>

          {/* Birth of the idea*/}
          <div className="project-section">
            <h3>The Aching Problem</h3>
            <div className="grid-1x2">
              <p style={{ maxWidth: "320px" }}>
                After graduating from Vassar College, I decided to pursue a
                master’s program to deepen my industry knowledge. The admission
                process felt both familiar and alien. Familiar because I had to
                take standardized tests and write essays; alien because there
                aren’t nearly as many resources available. I was not alone.
                Other students encountered similar problems, and even
                universities hope to have better ways to make themselves stand
                out. I found a gap. Now I’ll need to bridge it.
              </p>
              <div className="grid-1-3">
                <h3>12/17</h3>
                <p>
                  Master’s students interviewed said they could have benefited
                  from a more comprehensive way to learn about their program
                </p>
                <img src={JWULogo} alt="Johnson and Wales University"></img>
                <p>
                  “We used to get student information through ETS and College
                  Board, but now everyone is doing test-optional, so it’s harder
                  to do that.”
                </p>
                <img src={BentleyLogo} alt="Bentley University"></img>
                <p>
                  “We pay a lot every year to [services like] Unibuddy. We are
                  always [in need of] improving our ROI.”
                </p>
              </div>
            </div>
          </div>

          {/* Prototyping and Testing*/}
          <div className="project-section">
            <h3>Product Ideation</h3>

            <div className="grid-1x2">
              <div className="body-flex">
                <h4>Unmet Need #1: </h4>
                <h4>Lack of Quality Information</h4>
                <p>
                  Graduate programs are often unlike undergraduate programs.
                  There is not enough information online to help students. Even
                  if there is, the information can get repetitive and
                  uninformative.
                </p>
              </div>
              <div className="body-flex">
                <h4>Feature #1: </h4>
                <h4>An Interactive Simulation </h4>
                <p>
                  Empathy is a powerful tool. We want students to have a taste
                  of what it’s like to be at a school. Students start the
                  experience on the first day of school, and work through the
                  year to graduation!
                </p>
              </div>
              <div className="body-flex">
                <h4>Unmet Need #2: </h4>
                <h4>Personalized Support </h4>
                <p>
                  Students want to maximize their chance of getting into a
                  program, but counseling services are expensive. There is a
                  need for an affordable way to be pointed towards the right
                  direction.
                </p>
              </div>
              <div className="body-flex">
                <h4>Feature #2: </h4>
                <h4>Profiles and Alum Recommendation </h4>
                <p>
                  While we want to build a simulation, we wanted the outcome to
                  have a real-world impact. Therefore, each student will build
                  their profile when playing the simulation, and in the end, we
                  will push an alum like them so they could connect.
                </p>
              </div>
              <div className="body-flex">
                <h4>Unmet Need #3: </h4>
                <h4>Universities Want Student Information </h4>
                <p>
                  With more universities going test-optional, programs can no
                  longer get student information from test providers. They want
                  new ways to learn more about the new cohort.
                </p>
              </div>
              <div className="body-flex">
                <h4>Feature #3: </h4>
                <h4>Data-driven Experience </h4>
                <p>
                  With students playing the simulation, we also want to map out
                  these student profiles using data, so that universities could
                  also learn more about them. We are a modern day robinhood,
                  making universities pay for the experiences of students.
                </p>
              </div>
            </div>
          </div>

          {/* Testing and Iteration*/}
          <div className="project-section">
            <h3>Testing and Iteration</h3>

            <div className="flex-row">
              <div className="body-flex-middle" style={{ marginLeft: "10%" }}>
                <h4>Life @ PRIME Version 1.0</h4>
                <p style={{ maxWidth: "80%" }}>
                  After understanding the unmet needs and the features to
                  address them, we built out version 1.0 of Life@PRIME. It was
                  used during the 2022-2023 admissions cycle, giving us plenty
                  of data as feedback. Once we had those insights, we knew it
                  was time to tear down what didn’t work and re-build the
                  product from the ground up.
                </p>
                <button className="play-button">Play Version 1.0</button>
              </div>

              <div className="body-flex">
                <img
                  className="project-image"
                  src={primeHomeScreen}
                  alt="Home screen of Life @ PRIME"
                />
                <p className="caption">
                  The home page of Life@PRIME Version 1.0
                </p>
              </div>
            </div>

            <div className="grid-1x2">
              <div className="body-flex">
                <img
                  className="project-image"
                  src={primeAtWork}
                  alt="PRIME at Work screen of Life @ PRIME"
                />
                <p className="caption">
                  The main event page shows different actions the student can
                  take for different events
                </p>
              </div>
              <div className="body-flex">
                <img
                  className="project-image"
                  src={primeExplore}
                  alt="Explore screen of Life @ PRIME"
                />
                <p className="caption">
                  The exploration page shows different people and locations the
                  student can interact with
                </p>
              </div>
              <div className="body-flex">
                <img
                  className="project-image"
                  src={primeExploreDetail}
                  alt="The Explore Detail screen of Life @ PRIME"
                />
                <p className="caption">
                  There are different storylines that represent different ways
                  to experience PRIME, allowing students to tailor their own
                  journey
                </p>
              </div>
              <div className="body-flex">
                <img
                  className="project-image"
                  src={primeResult}
                  alt="PRIME at Work screen of Life @ PRIME"
                />
                <p className="caption">
                  The result page compares your profile to others and recommends
                  a PRIME alum like you
                </p>
              </div>
            </div>
          </div>

          {/* Design Elements*/}
          <div className="project-section">
            <h3>Survey & Interview Findings</h3>
            <img
              style={{ width: "100%" }}
              src={surveyResults}
              alt="Survey Results"
            />
            <img
              style={{ width: "100%" }}
              src={interviewInsights}
              alt="Interview Insights"
            />
          </div>

          {/* Design Elements*/}
          <div className="project-section">
            <h3>Turning Feedback into Design</h3>
            <DesignDirectionHeader
              header1="Feedbacks"
              header2="New Design Choices"
            />
            <DesignDirection element={designElements[0]} />
            <DesignDirection element={designElements[1]} />
            <DesignDirection element={designElements[2]} />
          </div>

          {/* Going Live*/}
          <div className="project-section">
            <h3>Going Live</h3>
            <div className="flex-row">
              <div className="body-flex-middle">
                <h4>Mastering React.js and Web Development</h4>
                <p style={{ maxWidth: "80%" }}>
                  With all the new features lined up, it was time to sharpen my
                  development skills to take the app to the next level. I
                  learned more advanced techniques like the Context API, Framer
                  Motion, and Firebase to level up “Life @ PRIME.” We also took
                  advantage of the OpenAI API to leverage the power of
                  generative AI. The result? An app that looks sleeker, feels
                  smoother, and happier users.
                </p>
              </div>
              <div className="body-flex">
                <img
                  className="project-image"
                  src={primeStartup}
                  alt="prototype"
                />
                <p className="caption">
                  This is a screenshot of the start-up simulation. We trained
                  our own model based on OpenAI’s GPT4 to evaluate student
                  start-ups in Life @ PRIME
                </p>
              </div>
            </div>

            <div className="flex-row">
              <img
                style={{ width: "100%" }}
                src={vassarIllustration}
                alt="cover"
              />
              <div className="body-flex-middle">
                <h4>Result</h4>
                <p style={{ maxWidth: "80%" }}>
                  “Life @ PRIME” is currently being used in the 2023-2024
                  admissions cycle. We are actively testing and updating the app
                  to make sure it helps as many students as possible to learn
                  about PRIME. We are excited to see the outcome of the app.
                </p>
                <h4 style={{ marginTop: "30px" }}>Takeaways</h4>
                <p>
                  <span className="bold">
                    It is okay to not get it right the first time.{" "}
                  </span>{" "}
                  Good designs take time to get right. Keep iterating and
                  testing, and more importantly keep your head up!
                </p>
                <p>
                  <span className="bold">
                    Stay on top of the recent technology trends.{" "}
                  </span>{" "}
                  The programming world evolves super fast, so learning the
                  latest tools such as generative AI is important! Using OpenAI
                  and Framer Motion was a pivotal moment for this project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeAtPRIME;

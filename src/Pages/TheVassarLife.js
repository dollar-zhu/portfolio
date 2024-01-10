import React from "react";
import "../IndependentProject.css";
import TopNav from "../Components/TopNav";
import HeaderImage from "../Components/HeaderImage";
import TheVassarLifeImg from "../Images/The Vassar Life.png";
import appLogo from "../Images/The Vassar Life Logo.png";
import controller from "../Images/controller.svg";
import cardsPlaying from "../Images/cards-playing.svg";
import unity from "../Images/unity.svg";
import commentQuoteOutline from "../Images/comment-quote-outline.svg";
import compassOutline from "../Images/compass-outline.svg";
import Academics from "../Images/Academics.svg";
import bridge from "../Images/bridge.svg";
import DesignDirection from "../Components/DesignDirection";
import ScoreSystem from "../Images/score-system.png";
import Kumar from "../Images/Kumar.png";
import Library from "../Images/Library.png";
import Prototype from "../Images/Prototype.png";
import Testing from "../Images/Testing.png";
import skillTree from "../Images/skill-tree.png";
import unityScreenshot from "../Images/unity-screenshot.png";
import vassarLibraryIllustration from "../Images/vassar-library-illustration.png";
import DesignDirectionHeader from "../Components/DesignDirectionHeader";

const TheVassarLife = () => {
  const designElements = [
    {
      icon1: compassOutline,
      title1: "Open Curriculum",
      description1: `Vassar is a liberal arts college that takes pride in its open curriculum, meaning students can take whatever classes they want with minimal restrictions`,
      icon2: ScoreSystem,
      title2: "5 Score Systems",
      description2: `We wanted to express that there is no “right” way experience Vassar, so instead of one score, we made five — Academics, Art, Social, Wellness, and Happiness.`,
    },
    {
      icon1: Academics,
      title1: "Professors who Care",
      description1: `Vassar Students always had the luxury of working closely with world-class professors. The close relationship between students and professors is what makes Vassar special.`,
      icon2: Kumar,
      title2: "Professor Cards",
      description2: `We incorporated 12 professors into the game, making the them rockstar they are in real life.`,
    },
    {
      icon1: bridge,
      title1: "Beautiful Campus",
      description1: `Located at the scenic Hudson Valley, Vassar is recognized as one of the most beautiful campuses in the country.`,
      icon2: Library,
      title2: "Mapping out Vassar",
      description2: `We faithfully created a digital version of the Vassar campus so that students can feel the campus wherever they are. We also made sure that they can interact with all the major buildings.`,
    },
  ];

  return (
    <div className="ind-project-page">
      <TopNav projectId={1} />
      <div className="ind-project-area">
        <HeaderImage
          image={TheVassarLifeImg}
          project="The Vassar Life"
          link="https://simmer.io/@DollarZhu/the-vassar-life"
        />

        <div className="ind-project-description-area">
          {/* Product Info Header*/}
          <div className="grid-1-2">
            <img
              className="logo-img"
              src={appLogo}
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
                <p className="info-p">
                  Chuqi Hu, Lauren Yung, Ke Wang, Benjamin Holmes
                </p>
              </div>
              <div className="body-flex">
                <h4>Skills:</h4>
                <p className="info-p">Figma, Unity, C#</p>
              </div>
              <div className="body-flex">
                <h4>Timeline:</h4>
                <p className="info-p">March 2020 - November 2020</p>
              </div>
            </div>
          </div>

          {/* Project Summary*/}
          <div className="project-section">
            <h3>Project Summary</h3>
            <div className="grid-1x3">
              <div className="body-flex-center">
                <h4>A Game with Impact</h4>
                <img src={controller} alt="controller" />
                <p className="text-center">
                  “The Vassar Life” is a game that simulates the campus life at
                  Vassar College. It is designed to help students engage with
                  the campus during COVID, and it is used during orientations in
                  2020 and 2021.
                </p>
              </div>
              <div className="body-flex-center">
                <h4>Start from the Basics</h4>
                <img src={cardsPlaying} alt="cards" />
                <p className="text-center">
                  We used cards and physical boards to prototype the game during
                  earlier stages. We also held test play events with 300+
                  participants in total.
                </p>
              </div>
              <div className="body-flex-center">
                <h4>Magic Through Unity</h4>
                <img src={unity} alt="unity" />
                <p className="text-center">
                  Pun is intended here. Teamwork and “Unity” the game design
                  engine made the dream come true.
                </p>
              </div>
            </div>
          </div>

          {/* Birth of the idea*/}
          <div className="project-section">
            <h3>The Birth of the Idea</h3>
            <div className="grid-1x2">
              <p style={{ maxWidth: "320px" }}>
                When the COVID first hit the campus. Travel bans and insane
                fares made it difficult for International students like myself
                to make it physically to campus. I wanted to build a
                light-hearted game about Vassar to bring everyone together.
                Something we could all use during the trying times of the
                pandemic.
              </p>
              <div className="grid-1-3">
                <h3>40%+</h3>
                <p>International students had to spend a semester online</p>
                <img src={commentQuoteOutline} alt="quote"></img>
                <p>
                  “It was frustrating to not be able to go to Vassar. Zoom
                  classes suck, and I feel like I’m missing out on things
                  happening on campus.” - A sophomore at Vassar
                </p>
              </div>
            </div>
          </div>

          {/* Design Elements*/}
          <div className="project-section">
            <h3>Design Elements</h3>

            <DesignDirectionHeader
              header1="Core Vassar Values"
              header2="Design Choices"
            />
            <DesignDirection element={designElements[0]} />
            <DesignDirection element={designElements[1]} />
            <DesignDirection element={designElements[2]} />
          </div>

          {/* Prototyping and Testing*/}
          <div className="project-section">
            <h3>Prototyping and Testing</h3>

            <div className="flex-row">
              <div className="body-flex-middle">
                <h4>Prototyping</h4>
                <p style={{ maxWidth: "80%" }}>
                  We wanted to a quick way to test if our concept worked within
                  the Vassar community. So we went old-school. We printed out
                  event cards each representing an event that would happen on
                  the Vassar campus, then we created a map of Vassar as the
                  “board” or rather “carpet” because it is huge. A board game
                  prototype of “The Vassar Life” was thus born.
                </p>
              </div>

              <div className="body-flex">
                <img
                  className="project-image"
                  src={Prototype}
                  alt="prototype"
                />
                <p className="caption">
                  We used the library printer to print out decks of cards. Cost
                  us all the printing dollars in our student ID card, but it was
                  well worth it.
                </p>
              </div>
            </div>

            <div className="flex-row">
              <div className="body-flex">
                <img className="project-image" src={Testing} alt="prototype" />
                <p className="caption">
                  This is a picture of one of our test play sessions. We laid
                  out the the boards on the floor and invited the Vassar
                  community to have fun with us.
                </p>
              </div>
              <div className="body-flex-middle">
                <h4>Testing</h4>
                <p style={{ maxWidth: "80%" }}>
                  We then hosted a series of test play events at Vassar. We had
                  over 200 participants try out our game. We gathered helpful
                  suggestions from the participants and had lots of fun playing
                  the game with them.
                </p>
              </div>
            </div>

            <div className="body-flex">
              <img style={{ width: "100%" }} src={skillTree} alt="skill tree" />
              <p className="caption">
                This is a screenshot of the skill tree feature in “The Vassar
                Life.” Taking into account the feedbacks from our test play
                events, we built different pathways in this skill tree for
                students to choose.
              </p>
            </div>

            <div className="grid-1x2">
              <div className="body-flex">
                <h4>Insight #1: Not Enough Agency </h4>
                <p>
                  One of the most common feedbacks we received was that the game
                  seemed too random at times. Participants wanted to have a
                  little more control on the types of the “Vassar life” they are
                  experiencing.
                </p>
              </div>
              <div className="body-flex">
                <h4>Solution #1: Skill Tree </h4>
                <p>
                  Although it is difficult to demonstrate in the board game
                  format, we implemented the skill feature, allowing players to
                  choose different paths in their journey. They could focus on
                  academics, art, social, or athletics, or a little bit of
                  everything because remember, there is no “right” way to
                  experience Vassar.
                </p>
              </div>
              <div className="body-flex">
                <h4>Insight #2: Lack of Variety </h4>
                <p>
                  Players also reported that the cards can feel repetitive. That
                  is true. We had 200+ event cards, but they are all about
                  things that can happen on the campus. We need other types of
                  cards to spice things up.
                </p>
              </div>
              <div className="body-flex">
                <h4>Solution #2: New Special Cards </h4>
                <p>
                  We added special cards about unique things at Vassar too,
                  including the legendary chili at the cafeteria called the
                  “Vassar Chili”, and works of Picasso on display at the Loeb
                  Art Center.
                </p>
              </div>
            </div>
          </div>

          {/* Going Live*/}
          <div className="project-section">
            <h3>Going Live</h3>
            <div className="flex-row">
              <div className="body-flex-middle">
                <h4>Implementation</h4>
                <p style={{ maxWidth: "80%" }}>
                  Vassar was not known for its technical prowess in Computer
                  Science, and COVID made it even more difficult to find
                  technical help. I took it up on myself to learn Unity and C#
                  to develop “The Vassar Life.” I also made an independent
                  studies course out of the project. Under mentorship of
                  Professor Rui Meireles and months of hard work. We went live.
                </p>
              </div>
              <div className="body-flex">
                <img
                  className="project-image"
                  src={unityScreenshot}
                  alt="prototype"
                />
                <p className="caption">
                  This is a screenshot of the work-in-progress Unity window. A
                  window I see every single day when building the digital
                  version of “The Vassar Life”
                </p>
              </div>
            </div>

            <div className="flex-row">
              <img
                style={{ width: "100%" }}
                src={vassarLibraryIllustration}
                alt="cover"
              />
              <div className="body-flex-middle">
                <h4>Result</h4>
                <p style={{ maxWidth: "80%" }}>
                  “The Vassar Life” was first launched on simmer.io for web
                  access and then launched on Apple App Store (discontinued
                  because I did not want to pay $100 every year). It had 500+
                  active users during its peak and was used during orientation
                  in 2020 and 2021. The game received so much attention from the
                  college that the president of Vassar came to play with us on
                  our launch day, and we even got an article about us in
                  Vassar’s student-run newspaper. Read the article here
                </p>
                <h4 style={{ marginTop: "30px" }}>Takeaways</h4>
                <p>
                  <span className="bold">Harness the power of community. </span>{" "}
                  Part of the reason why “The Vassar Life” was successful is
                  because we won the support from the Vassar community. Each
                  test play we did had 100+ participants, and every single one
                  of them engaged with us. Leveraging the power of the community
                  was our secret sauce.
                </p>
                <p>
                  <span className="bold">Do good, and do it well. </span> “The
                  Vassar Life” is also driven by the mission to help other
                  people. This mission kept us motivated and ultimately pushed
                  us over the finish line. From this project, I learned the
                  importance of having a clear mission. From the moment we
                  launched “The Vassar Life,” I knew I want to have a career
                  building products that help others.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheVassarLife;

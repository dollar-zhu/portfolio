import React from "react";
import TopNav from "../Components/TopNav";
import HeaderImage from "../Components/HeaderImage";
import background from "../Images/RecycleIt/Recycle it BG.jpg";
import image from "../Images/RecycleIt/App Image.png";
import logo from "../Images/RecycleIt/App Logo.png";
import finding1 from "../Images/RecycleIt/Finding1.png";
import finding2 from "../Images/RecycleIt/Finding2.png";
import fun from "../Images/RecycleIt/Fun.svg";
import recycle from "../Images/RecycleIt/Recycle.svg";
import research from "../Images/RecycleIt/Research.svg";
import QuoteSection from "../Components/QuoteSection";

const RecycleIt = () => {
  const quote = `
    At Vassar, ~50% of the items in the recycling bin are thrown out due to contamination, and we wanted to change it.`;
  const introParagraph = `The idea of the project first came up in a conversation with my professor of Economics, Dr. Benjamin Ho. At the time, he was serving on the Sustainability Committee at Vassar, and he brought up the issue of recycling at Vassar — half of the things in the recycling bins on campus were thrown away because the bins themselves were contaminated. The committee was in search of a better way to educate the community about recycling. I said, "maybe we can make an interactive experience about it!" And he responded, "maybe we can use that to run a study to see how people learn to recycle."`;
  return (
    <div className="ind-project-page">
      <TopNav projectId={3} />
      <div className="ind-project-area">
        <HeaderImage
          image={background}
          project="Recycle It!"
          link="https://play.unity.com/mg/other/webgl-builds-69171"
        />

        <div className="ind-project-description-area">
          {/* Product Info Header*/}
          <div className="grid-1-2">
            <img className="logo-img" src={logo} alt="Recycle it Logo" />
            <div className="grid-1x2">
              <div className="body-flex">
                <h4>Role:</h4>
                <p className="info-p">Researcher, Designer</p>
              </div>
              <div className="body-flex">
                <h4>Team:</h4>
                <p className="info-p">Professor. Benjamin Ho (Mentor)</p>
              </div>
              <div className="body-flex">
                <h4>Skills:</h4>
                <p className="info-p">Unity, Python, Amazon MTurk</p>
              </div>
              <div className="body-flex">
                <h4>Timeline:</h4>
                <p className="info-p">June 2021 - September 2021</p>
              </div>
            </div>
          </div>

          {/* Project Summary*/}
          <div className="project-section">
            <h3>Project Summary</h3>
            <div className="grid-1x3">
              <div className="body-flex-center">
                <h4 style={{ textAlign: "center", height: "60px" }}>
                  Promoting Eco-consciousness
                </h4>
                <img src={recycle} alt="recycle" />
                <p className="text-center">
                  It turns out Vassar College is pretty bad at recycling,
                  students and faculty members alike don’t seem to understand
                  how important recycling is.
                </p>
              </div>
              <div className="body-flex-center">
                <h4 style={{ textAlign: "center", height: "60px" }}>
                  Designing for Fun and Education
                </h4>
                <img src={fun} alt="iterate" />
                <p className="text-center">
                  As a part of a project with the Committee of Sustainability, I
                  built a game to teach recycling to the Vassar community
                </p>
              </div>
              <div className="body-flex-center">
                <h4 style={{ textAlign: "center", height: "60px" }}>
                  Researching Gamification and Behavior
                </h4>
                <img src={research} alt="magic" />
                <p className="text-center">
                  The game ultimately had 2000+ plays, and we used the data to
                  conduct a behavioral research study on the impact of
                  gamification on recycling habits
                </p>
              </div>
            </div>
          </div>

          {/* Project Details*/}
          <div className="project-section">
            <QuoteSection
              quote={quote}
              title={`The Beginning`}
              paragraph1={introParagraph}
              paragraph2={``}
            />
          </div>

          {/* The Research Project*/}
          <div className="project-section">
            <h3>The Research Project</h3>
            <div className="grid-1x2">
              <p>
                We wanted to investigate both learning about facts and learning
                to be more eco-conscious, so we added a survey once players
                reach a certain point in the game. We had 2000+ plays on Unity
                Play after promoting it on the Vassar campus and on Amazon
                Mechanical Turk. In the end, we gathered 854 usable data for our
                research project.{" "}
              </p>

              <p>
                We hypothesized that collaboration and loss mechanisms would
                help players learn better according to prosocial responses and
                prospect theory. I embedded these different versions into the
                game and randomly assigned them to the players. While the
                results didn't fully prove our hypotheses, we found ample
                evidence that playing the game was much more effective than
                simply reading about information. Players who played the game
                tend to retain more knowledge about recycling and donate more to
                environmentally related charities.
              </p>
            </div>
          </div>
          {/* Going Live*/}
          <div className="project-section">
            <h3>Going Live</h3>

            <div className="flex-row">
              <img
                style={{ maxWidth: "350px", height: "400px" }}
                src={image}
                alt="cover"
              />
              <div className="body-flex-middle">
                <h4>The Digital Experience</h4>
                <p style={{ maxWidth: "80%", marginBottom: "20px" }}>
                  Making a game for an experiment is hard — I had to negotiate
                  the fun nature of games and rigorous nature of research. I
                  turned to existing research on gamification elements for help,
                  and I was particularly inspired by Sailer et al., 2016 on how
                  gamification motivates. I wanted to apply the same building
                  blocks (points, badges, meaningful stories) they used to my
                  project.
                </p>
                <p style={{ maxWidth: "80%", marginBottom: "20px" }}>
                  With these in mind, I designed the game off of "Doodle Jump,"
                  an arcade game where the player's goal is to jump from one
                  platform to another without falling. I added a twist — players
                  need to recycle while jumping. Whenever the player recycles
                  correctly, they will gain "fuel" that enables them to fly for
                  a short period. Whenever they recycle incorrectly, they fall
                  off due to contamination.
                </p>
                <p style={{ maxWidth: "80%", marginBottom: "20px" }}>
                  I am never convinced by the term "serious games." I believe
                  fun should be the goal of all games. Fun of different types —
                  fun of the challenge, the thrill, the learning, etc. I hope by
                  embedding recycling in a proven "fun" game, I could create an
                  engaging experience that also helps players learn about
                  recycling.
                </p>
              </div>
            </div>

            {/* Going Live*/}
            <div className="project-section">
              <h3>Research Outcome</h3>

              <div className="grid-1x2">
                <div className="body-flex-center">
                  <img
                    style={{ maxWidth: "300px" }}
                    src={finding1}
                    alt="finding1"
                  />
                  <h4>Knowledge Quiz Score Grouped by Skill Level</h4>
                  <p>
                    This table shows that loss can be a powerful tool to help
                    learn facts about recycling. When the cooperation mechanism
                    combines with loss, players who are skilled in the game
                    learn better about facts on recycling.
                  </p>
                </div>
                <div className="body-flex-center">
                  <img
                    style={{ maxWidth: "300px" }}
                    src={finding2}
                    alt="finding2"
                  />
                  <h4>
                    Donation to Environmental Charities Grouped by Skill Level
                  </h4>
                  <p>
                    Prior attitude on climate change was an important factor in
                    making donations. Moreover, the loss and cooperation
                    treatments had polarized effects on donations based on
                    different skill levels in the game.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecycleIt;

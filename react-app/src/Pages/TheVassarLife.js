import React from "react";
import "../IndependentProject.css";
import TopNav from "../Components/TopNav";
import HeaderImage from "../Components/HeaderImage";
import TheVassarLifeImg from "../Images/The Vassar Life.png";
import QuoteSection from "../Components/QuoteSection";
import LeftTextPanel from "../Components/LeftTextPanel";
import CardsImage1 from "../Images/CardsImage1.png";
import academicIcon from "../Images/academics.png";
import socialIcon from "../Images/social.png";
import happinessIcon from "../Images/happiness.png";
import artIcon from "../Images/art.png";
import physiqueIcon from "../Images/physique.png";
import RowImageComponent from "../Components/RowImageComponent";

const TheVassarLife = () => {
  const IntroQuote = `"
    College Search can be repetitive and tiring. We envisioned a more interactive and authentic way to learn about Vassar."`;
  const IntroTitle = "The Birth of the Idea";
  const IntroParagraph1 = `"During my senior year in high school. I visited plenty of colleges. I went on campus tours and sat through information sessions. They got repetitive and tiring very quickly. In 2019, I revisited this problem as a college sophomore. I was determined to find a better way to help new and prospective students learn about Vassar."`;
  const IntroParagraph2 = `"I imagined a card game that simulates the four years at Vassar, where the content are contributed directly by students at Vassar. I shared this idea with my friends, and we met at the Davison House Parlor on November 19th, 2019 for the first time. That's how "The Vassar Life" started."`;

  const prototypeTitle = "Start Cheap, Start with Cards";
  const prototypeText1 = `The core question for us is: What makes Vassar unique? We came to the conclusion that Vassar is a place where everyone can be their authentic self and be supported by the community. Reflecting on these ideas, "The Vassar Life" needs to be a game with an inclusive evaluation system and a sense of community.`;

  const prototypeText2 = `Prototyping the game did not come easily. We went through many iterations with different ideas (from the subway-surfer type to the game of life type). Finally, we decided on a card game based on different locations at Vassar because cards are very easy to crowd-source and modularize. We also used a metric system with five distinct categories — academic, art, social, wellness, and happiness. There is no one "correct" way to live through the years at Vassar, so there shouldn't be only one way to experience "The Vassar Life." With permission from professors, we also included professor cards in the deck to reflect the close relationships Vassar students build with their professors.`;
  const prototypeCaption =
    "We used the library printer to print out the cards and cut them into decks we can use for playtesting.";

  const attributeList = [
    {
      id: 1,
      img: academicIcon,
      title: "Academic",
      description:
        "Measures your academic performance in the game. Your road to a 4.0 GPA.",
    },
    {
      id: 2,
      img: artIcon,
      title: "Art",
      description:
        "Measures your performance in Visual Art, Dance, Music, and Acting.",
    },
    {
      id: 3,
      img: socialIcon,
      title: "Social",
      description:
        "If you like hanging out with friends and going to parties, you will have many points in this category.",
    },
    {
      id: 4,
      img: physiqueIcon,
      title: "Wellness",
      description:
        "Previously physique, but we wanted to be inclusive, and now it covers mental health as well!",
    },
    {
      id: 5,
      img: happinessIcon,
      title: "Happiness",
      description:
        "Happiness acts as a multiplier for the other scores. Make sure to be happy at Vassar!",
    },
  ];

  return (
    <div className="ind-project-page">
      <TopNav />
      <div className="ind-project-area">
        <HeaderImage
          image={TheVassarLifeImg}
          project="The Vassar Life"
          link="https://www.vassar.edu"
        />
        <QuoteSection
          quote={IntroQuote}
          title={IntroTitle}
          paragraph1={IntroParagraph1}
          paragraph2={IntroParagraph2}
        />
        <LeftTextPanel
          title={prototypeTitle}
          text1={prototypeText1}
          text2={prototypeText2}
          img={CardsImage1}
          caption={prototypeCaption}
        />
        <RowImageComponent list={attributeList} />
      </div>
    </div>
  );
};

export default TheVassarLife;

import React from "react";
import CoolEmoji from "../Images/CoolEmoji.svg";
import DownArrow from "../Images/DownArrow.svg";
import { motion } from "framer-motion";

const HomePage = () => {
  const greetingsLibrary = [
    "Hi!",
    "Bonjour!",
    "¡Hola!",
    "你好!",
    "こんにちは!",
  ];

  const [greeting, setGreeting] = React.useState("Hi!");
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * greetingsLibrary.length);
      setGreeting(greetingsLibrary[randomIndex]);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="Home-page">
      <div className="Home-center">
        <motion.div
          className="intro-text-area"
          // drag
          // dragConstraints={{
          //   top: -50,
          //   left: -50,
          //   right: 50,
          //   bottom: 50,
          // }}
        >
          <h2 className="Name-description-line-1">{greeting}</h2>
          <h2 className="Name-description-line-1">I'm Dollar Zhu.</h2>
          <h2 className="Name-description-line-2">
            I am a Frontend Developer, Product Designer, Entrepreneur
          </h2>

          <h2 className="Name-description-line-4">
            {` with an unrelenting focus on product strategy (Yes, being a management consultant for a while helped)`}
          </h2>

          <div className="Name-description-line-3">
            I build products that feel like
            <motion.img
              className="emoji"
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.9 }}
              drag
              dragConstraints={{
                top: -3,
                left: -20,
                right: 20,
                bottom: 3,
              }}
              src={CoolEmoji}
              alt="cool emoji"
            />
            {/* <h5 className="comment">{`(you can click and drag me)`}</h5> */}
          </div>
        </motion.div>
        <div className="down-arrow-area">
          <img src={DownArrow} alt="down arrow" className="down-arrow" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

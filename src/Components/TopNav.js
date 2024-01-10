import React from "react";
import { usePageUpdate } from "../Providers/PageProvider";
import BackIcon from "../Images/BackIcon.svg";
import { motion } from "framer-motion";

const TopNav = ({ projectId }) => {
  const updatePage = usePageUpdate();
  const scrollDestination =
    window.innerHeight * projectId + 0.2 * window.innerHeight;
  const [isDisabled, setIsDisabled] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 1800) {
        setIsDisabled(true);
      } else {
        setIsDisabled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="top-nav">
      <div className="nav-links">
        <h2
          onClick={() => {
            updatePage("projects");
            window.scrollTo(0, scrollDestination);
            console.log(scrollDestination);
          }}
        >
          {`< Back to Projects`}
        </h2>
        {isDisabled ? (
          <></>
        ) : (
          <motion.img
            className="back-button"
            src={BackIcon}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              updatePage("projects");
              window.scrollTo(0, scrollDestination);
              console.log(scrollDestination);
            }}
            alt="back to projects"
          />
        )}
      </div>
    </div>
  );
};

export default TopNav;

import React from "react";
import { usePage, usePageUpdate } from "../Providers/PageProvider";
import { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import HomePage from "../Pages/HomePage";
import Projects from "../Pages/Projects";
import MyMusic from "../Pages/MyMusic";
import AboutMe from "../Pages/AboutMe";

const Navbar = () => {
  const updatePage = usePageUpdate();
  const currPage = usePage();
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 800) {
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`nav${isDisabled ? "-disabled" : ""}`}>
        {currPage === "about me" ? (
          <h1 className="tag-active">{"<About Me/>"}</h1>
        ) : (
          <h1
            onClick={() => {
              updatePage("about me");
            }}
            className="tag-inactive"
          >
            {"<About Me/>"}
          </h1>
        )}
        {currPage === "projects" ? (
          <h1 className="tag-active">{"<Projects/>"}</h1>
        ) : (
          <h1
            onClick={() => {
              updatePage("projects");
            }}
            className="tag-inactive"
          >
            {"<Projects/>"}
          </h1>
        )}
        {currPage === "music" ? (
          <h1 className="tag-active">{"<My Music/>"}</h1>
        ) : (
          <h1
            onClick={() => {
              updatePage("music");
            }}
            className="tag-inactive"
          >
            {"<My Music/>"}
          </h1>
        )}
      </div>
      {/* <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/my-music" element={<MyMusic />} />
        </Routes> */}
    </motion.div>
  );
};

export default Navbar;

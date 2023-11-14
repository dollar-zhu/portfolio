import React from "react";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import { usePage, usePageUpdate } from "../Providers/PageProvider";

const DetailPage = () => {
  //could either be projects, about me, or ind. project page
  const page = usePage();
  var currPage = <AboutMe />;
  if (page === "projects") {
    currPage = <Projects />;
  } else if (page === "about me") {
    currPage = <AboutMe />;
  } else if (page === "ind. project page") {
    currPage = <AboutMe />;
  }
  return <div>{currPage}</div>;
};

export default DetailPage;

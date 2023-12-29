import React from "react";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import { usePage, usePageUpdate } from "../Providers/PageProvider";
import TheVassarLife from "./TheVassarLife";

const DetailPage = () => {
  //could either be projects, about me, or ind. project page
  const page = usePage();
  var currPage = <AboutMe />;
  if (page === "projects") {
    currPage = <Projects />;
  } else if (page === "about me") {
    currPage = <AboutMe />;
  } else if (page === "The Vassar Life") {
    currPage = <TheVassarLife />;
  }
  return <div>{currPage}</div>;
};

export default DetailPage;

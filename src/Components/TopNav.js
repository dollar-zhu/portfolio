import React from "react";
import { usePageUpdate } from "../Providers/PageProvider";

const TopNav = ({ projectId }) => {
  const updatePage = usePageUpdate();
  const scrollDestination =
    window.innerHeight * projectId + 0.2 * window.innerHeight;
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
      </div>
    </div>
  );
};

export default TopNav;

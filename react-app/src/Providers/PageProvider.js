import React from "react";

const pageContext = React.createContext();
const pageUpdateContext = React.createContext();

const PageProvider = ({ children }) => {
  const [page, setPage] = React.useState("about me");
  const updatePage = (newPage) => {
    setPage(newPage);
    if (newPage === "projects") window.scrollTo(0, 1000);
    else if (newPage === "about me") window.scrollTo(0, 820);
    else window.scrollTo(0, 0);
  };

  return (
    <pageContext.Provider value={page}>
      <pageUpdateContext.Provider value={updatePage}>
        {children}
      </pageUpdateContext.Provider>
    </pageContext.Provider>
  );
};

export default PageProvider;
export const usePage = () => React.useContext(pageContext);
export const usePageUpdate = () => React.useContext(pageUpdateContext);

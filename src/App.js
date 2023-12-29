import logo from "./logo.svg";
import "./App.css";
import HomePage from "./Pages/HomePage";
import Projects from "./Pages/Projects";
import Navbar from "./Components/Navbar";
import AboutMe from "./Pages/AboutMe";
import PageProvider from "./Providers/PageProvider";
import DetailPage from "./Pages/DetailPage";

function App() {
  return (
    <PageProvider>
      <div className="App">
        <HomePage />
        <DetailPage />
      </div>
    </PageProvider>
  );
}

export default App;

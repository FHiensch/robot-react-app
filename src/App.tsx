import React from "react";
import "./App.scss";
import Sidebar from "./components/sidebar/sidebar";
import TitleBar from "./components/title-bar/title-bar";
import Footer from "./components/footer/footer";
import Media from "react-media";

const App: React.FC = () => {
  var sidebarBreakOn = 700;

  return (
    <div id="wrapper">
      <TitleBar />
      <main>
        <Media query={`(max-width:${sidebarBreakOn}px)`}>
          {matches => <Sidebar isCollapsed={matches} />}
        </Media>
        <article>
          <div id="image-box" />
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default App;

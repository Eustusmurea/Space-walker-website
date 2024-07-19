import React from "react";
import "../App.css";
import Button from "./../components/ui/button";
const Home = () => {
  return (
    <div className="home bg-cover">
      <div className="page-display">
        <div className="page-dims">
          <div className="hero">
            <p className="heading">
              SO, YOU WANT TO TRAVEL TO, <br />
              <span className="heading-xs">SPACE</span>
            </p>
            <p className="body-xs">
              Let's face it; if you want to go to space, you might as well
              genuinely go <br />
              to outer space and not hover kind of on the edge of it. Well sit
              back, <br />
              and relax because we'll give you a truly out of this world
              experience!
            </p>
            <div className="button-explore">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

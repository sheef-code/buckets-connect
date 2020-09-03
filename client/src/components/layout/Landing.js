import React from "react";

const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">GAMER PAL</h1>
          <p className="lead">
            Create a gamer profile, share posts, and meet other gamers!
          </p>
          <div className="buttons">
            <button className="btn btn-primary">Sign Up</button>
            <button className="btn btn-light">Login</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;

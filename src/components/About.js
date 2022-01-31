import React from "react";
import aboutImage from "../assets/about.png";
function About() {
  return (
    <div id="about">
      <div className="about-text">
        <h1>UPCOMING EVENTS</h1>
        <p>
          Due to the current surge in Covid19 and out of an abundance of
          caution, the Cat Power show at McDonald Theatre has been cancelled.
          Refunds purchased through TicketsWest will be automatically processed
          back to the original form of payment. If you purchased tickets at our
          box office, please contact us directly to issue your refund. We
          apologize for any inconvenience.
        </p>
        <button>Read More</button>
      </div>
      <div className="about-image">
        <img src={aboutImage} alt="about-image" />
      </div>
    </div>
  );
}

export default About;

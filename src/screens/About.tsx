import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="about__title">
        <h2>About</h2>
        <div className="underline"></div>
      </div>
      
      <div className="about__text">
        <div className="about__text-segment">
          <h2>My name is Saad Aboussabr</h2>
        </div>
        <div className="about__text-segment">
          <h2>
            I'm a frontend developer with emphasis on interactivity and temporal
            dimensions of web design.
          </h2>
        </div>
        <div className="about__text-segment">
          <h2>
            This gallery presents my favorite illustrations throughout 2023.
          </h2>
        </div>
        <div className="about__text-segment">
          <h2>Made in 2023, by Simon Reinhardt</h2>
        </div>
      </div>
    </div>
  );
};

export default About;

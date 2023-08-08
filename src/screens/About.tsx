
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
          <h2>Made with React in 3 days while rewatching "The Wire"</h2>
        </div>
      </div>
    </div>
  );
};

export default About;

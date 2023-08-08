import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="about">
      <div className="about__title">
        <h2>About</h2>
        <div className="underline"></div>
      </div>

      <div className="about__text">
        <div className="about__text-segment">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0, duration: 1.5 }}
          >
            My name is Saad Aboussabr
          </motion.h2>
        </div>
        <div className="about__text-segment">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
          >
            I'm a frontend developer with emphasis on interactivity and temporal
            dimensions of web design.
          </motion.h2>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="about__text-segment"
        >
          <h2>
            This gallery presents my favorite illustrations throughout 2023.
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0}}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1.5 }}
          className="about__text-segment"
        >
          <h2>Site made with React in 3 days while rewatching "The Wire"</h2>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

/// This is the source of the scroll using mouse click

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Viewer from "../components/Viewer";

const Work = () => {
  const [percentage, setPercentage] = useState(0); /// Percentage for translation
  const [isPhone, setIsPhone] = useState(false); /// Checks if its a phone or not
  const [opacity, setOpacity] = useState(1); /// Controls the opacity of the dynamic title
  const [imageId, setImageId] = useState(""); /// setting the image for the Viewer
  const [toggleViewer, setToggleViewer] = useState(false); /// toggling the image viewer


  /// I'm keeping this array just to make myself laugh in the future
  const numbers = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
  ];

  const illustrations = numbers.map((num) => (
    <img
      id={num}
      className="image"
      draggable="false"
      src={`images/${num}.jpg`}
      alt=""
      onClick={() => {
        setImageId(num);
      }}
    />
  ));

  useEffect(() => {
    const track: any = document.getElementById("image-track"); /// store the id of the image rack
    const title: any = document.getElementById("desktop-title"); /// store the id of the big desktop title
    const intro: any = document.getElementById("intro"); /// intro section id
    const works: any = document.getElementById("works"); /// works section id

    /// onClick take the mouse's coordinates
    const handleOnDown = (e: any) => {
      if (track) {
        track.dataset.mouseDownAt = e.clientX;
      }
    };

    /// onRelease
    const handleOnUp = () => {
      if (track) {
        track.dataset.mouseDownAt = "0";
        track.dataset.prevPercentage = percentage;
      }
    };

    /// onMove
    const handleOnMove = (e: any) => {
      if (track) {
        if (track.dataset.mouseDownAt === "0") return;

        const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
          maxDelta = window.innerWidth;

        const percentage = (mouseDelta / maxDelta) * -100,
          nextPercentageUnconstrained =
            parseFloat(track.dataset.prevPercentage) + percentage,
          nextPercentage = Math.max(
            Math.min(nextPercentageUnconstrained, 0),
            -100
          );

        setPercentage(nextPercentage);
        setOpacity(0.4 - (nextPercentage / 100) * -1);

        if (nextPercentage === 0) {
          /// reset the dynamic title
          setOpacity(1);
        }


        /// image-track animation
        track.animate(
          {
            transform: `translate(${nextPercentage}%, -50%)`,
          },
          {
            duration: 1200,
            fill: "forwards",
          }
        );

        title.animate(
          {
            opacity: `${opacity}`,
          },
          {
            duration: 1200,
            fill: "forwards",
          }
        );

        /// parallax effect (in works)
        for (const image of track.getElementsByClassName("image")) {
          image.animate(
            {
              objectPosition: `${nextPercentage}% center`,
            },
            {
              duration: 1200,
              fill: "forwards",
            }
          );
        }
      }
    };

    /// toggle the viewer after an image is selected
    if (imageId !== "") {
      setToggleViewer(true);
    } else {
      setToggleViewer(false);
    }

    if (toggleViewer) {
      /// it works, do not add these to the code above or you'll break the desktop version (update: it wont break it if you add the "if conditions" too)
      if (intro && works) {
        intro.style.position = "absolute";
        intro.style.opacity = "0";
        works.style.position = "absolute";
        works.style.opacity = "0";
      }
    } else {
      if (intro && works) {
        intro.style.position = "static";
        intro.style.opacity = "1";
        works.style.position = "static";
        works.style.opacity = "1";
      }
    }

    /// check if it's a phone or not (can be done better, idk how... yet, too lazy to look it up)
    if (window.innerWidth >= 1279) {
      setIsPhone(false);
    } else {
      setIsPhone(true);
    }

    window.addEventListener("mousedown", handleOnDown);
    window.addEventListener("mouseup", handleOnUp);
    window.addEventListener("mousemove", handleOnMove);

    return () => {
      window.removeEventListener("mousedown", handleOnDown);
      window.removeEventListener("mouseup", handleOnUp);
      window.removeEventListener("mousemove", handleOnMove);
    };
  }, [percentage, isPhone, opacity, imageId, toggleViewer]);


  /// this turns off the viewer from the viewer screen
  const handleToggleViewer = () => {
    setToggleViewer(false);
    setImageId("");
  }

  /// reason behind the conditional return is simple: 
    /// if it's a mobile device, if the viewer is open, and the work component is only hidden. you can scroll the full length of works
    /// doesn't happen with desktop version, so I remove the works component when the viewer is on.
    /// there are better ways to do it I'm sure, maybe I'll look into it later.

  /// alot of this is combined because I found problems with state changes, 
  /// I wasn't familiar with the intricacies of react states, now I do. I might revisit and change some of this for optimal developer experiences
  /// but as far as user experience, it works well.

  if (isPhone) {
    return (
      <div className="work ">
        {!toggleViewer && (
          <section id="intro" className="work__intro">
            <div className="work__intro-title">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="work__intro-title-bigCircle"
              ></motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                className="work__intro-title-smallCircle"
              ></motion.div>
              <motion.h1
                initial={{ opacity: 0, textDecoration: "underline" }}
                animate={{ opacity: 1, textDecoration: "none" }}
                transition={{ duration: 2 }}
                className="work__intro-title-text"
              >
                The 2023 Gallery
              </motion.h1>
            </div>

            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="22"
              viewBox="0 0 24 22"
              fill="none"
              className="work__intro-arrow"
              initial={{ translateY: -10 }}
              animate={{ translateY: 0 }}
              transition={{ duration: 2, repeat: Infinity, delay: 3 }}
            >
              <path
                d="M13.5 2C13.5 1.17157 12.8284 0.5 12 0.5C11.1716 0.5 10.5 1.17157 10.5 2L13.5 2ZM10.9393 21.0607C11.5251 21.6464 12.4749 21.6464 13.0607 21.0607L22.6066 11.5147C23.1924 10.9289 23.1924 9.97919 22.6066 9.3934C22.0208 8.80761 21.0711 8.80761 20.4853 9.3934L12 17.8787L3.51472 9.3934C2.92893 8.80761 1.97918 8.80761 1.3934 9.3934C0.807611 9.97918 0.807611 10.9289 1.3934 11.5147L10.9393 21.0607ZM10.5 2L10.5 20L13.5 20L13.5 2L10.5 2Z"
                fill="#F7E8C1"
              />
            </motion.svg>
          </section>
        )}

        {!toggleViewer && (
          <section id="works" className="work__works">
            <div className="work__works-title">
              <h2>Works</h2>
              <div className="underline"></div>
            </div>

            <motion.div
              id="image-track"
              className="work__works-images"
              data-mouse-down-at="0"
              data-prev-percentage="0"
              style={
                isPhone ? {} : { transform: `translate(${percentage}%, -50%)` }
              }
              /// transform: `translate(${percentage}%, -50%)`
            >
              {illustrations}
            </motion.div>
          </section>
        )}

        {toggleViewer && <Viewer id={imageId} function={handleToggleViewer} />}
      </div>
    );
  } else {
    return (
      <div className="work ">
        <section id="intro" className="work__intro">
          <div className="work__intro-title">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="work__intro-title-bigCircle"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              className="work__intro-title-smallCircle"
            ></motion.div>
            <motion.h1
              initial={{ opacity: 0, textDecoration: "underline" }}
              animate={{ opacity: 1, textDecoration: "none" }}
              transition={{ duration: 2 }}
              className="work__intro-title-text"
            >
              The 2023 Gallery
            </motion.h1>
          </div>

          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="22"
            viewBox="0 0 24 22"
            fill="none"
            className="work__intro-arrow"
            initial={{ translateY: -10 }}
            animate={{ translateY: 0 }}
            transition={{ duration: 2, repeat: Infinity, delay: 3 }}
          >
            <path
              d="M13.5 2C13.5 1.17157 12.8284 0.5 12 0.5C11.1716 0.5 10.5 1.17157 10.5 2L13.5 2ZM10.9393 21.0607C11.5251 21.6464 12.4749 21.6464 13.0607 21.0607L22.6066 11.5147C23.1924 10.9289 23.1924 9.97919 22.6066 9.3934C22.0208 8.80761 21.0711 8.80761 20.4853 9.3934L12 17.8787L3.51472 9.3934C2.92893 8.80761 1.97918 8.80761 1.3934 9.3934C0.807611 9.97918 0.807611 10.9289 1.3934 11.5147L10.9393 21.0607ZM10.5 2L10.5 20L13.5 20L13.5 2L10.5 2Z"
              fill="#F7E8C1"
            />
          </motion.svg>
        </section>

        <section id="works" className="work__works">
          <div className="work__works-title">
            <h2>Works</h2>
            <div className="underline"></div>
          </div>

          <motion.div
            id="image-track"
            className="work__works-images"
            data-mouse-down-at="0"
            data-prev-percentage="0"
            style={
              isPhone ? {} : { transform: `translate(${percentage}%, -50%)` }
            }
            /// transform: `translate(${percentage}%, -50%)`
          >
            {illustrations}
          </motion.div>
        </section>

        {toggleViewer && (
          <Viewer id={imageId} function={handleToggleViewer} />
        )}
      </div>
    );
  }
};

export default Work;

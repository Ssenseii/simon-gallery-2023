/// This is the source of the scroll using mouse click

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Work = () => {
  const [percentage, setPercentage] = useState(0); /// Percentage for translation
  const [isPhone, setIsPhone] = useState(false); /// Checks if its a phone or not
  const [opacity, setOpacity] = useState(1); /// Controls the Opacity of the title
  const [imageId, setImageId] = useState(""); /// setting the image for the Viewer
  const [toggleViewer, setToggleViewer] = useState(false); /// setting the image for the Viewer

  useEffect(() => {
    const track: any = document.getElementById("image-track"); /// store the id of the image rack
    const title: any = document.getElementById("desktop-title"); /// store the id of the big desktop title
    const intro: any = document.getElementById("intro");
    const works: any = document.getElementById("works");

    /// onClick take the mouse's coordinates
    const handleOnDown = (e: any) => {
      track.dataset.mouseDownAt = e.clientX;
    };

    /// onRelease
    const handleOnUp = () => {
      track.dataset.mouseDownAt = "0";
      track.dataset.prevPercentage = percentage;
    };

    const handleOnMove = (e: any) => {
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
        setOpacity(1);
      }

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

      for (const image of track.getElementsByClassName("image")) {
        image.animate(
          {
            objectPosition: `${80 + nextPercentage}% center`,
          },
          {
            duration: 1200,
            fill: "forwards",
          }
        );
      }
    };

    if (imageId !== "") {
      setToggleViewer(true);
      intro.style.position = "absolute";
      works.style.position = "absolute";
      console.log("opening image viewer...");
    } else {
      setToggleViewer(false);
      intro.style.position = "static";
      works.style.position = "static";
    }

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
  }, [percentage, isPhone, opacity, imageId]);

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

          <div
            id="image-track"
            className="work__works-images"
            data-mouse-down-at="0"
            data-prev-percentage="0"
            style={
              isPhone ? {} : { transform: `translate(${percentage}%, -50%)` }
            }
            /// transform: `translate(${percentage}%, -50%)`
          >
            <img
              id="1"
              className="image"
              draggable="false"
              src="images/1.jpg"
              alt=""
              onClick={() => {
                setImageId("1");
              }}
            />
            <img
              id="2"
              className="image"
              draggable="false"
              src="images/2.jpg"
              alt=""
              onClick={() => {
                setImageId("2");
              }}
            />
            <img
              id="3"
              className="image"
              draggable="false"
              src="images/3.jpg"
              alt=""
              onClick={() => {
                setImageId("3");
              }}
            />
            <img
              id="4"
              className="image"
              draggable="false"
              src="images/4.jpg"
              alt=""
              onClick={() => {
                setImageId("4");
              }}
            />
            <img
              id="5"
              className="image"
              draggable="false"
              src="images/5.jpg"
              alt=""
              onClick={() => {
                setImageId("5");
              }}
            />
            <img
              id="6"
              className="image"
              draggable="false"
              src="images/6.jpg"
              alt=""
              onClick={() => {
                setImageId("6");
              }}
            />
            <img
              id="7"
              className="image"
              draggable="false"
              src="images/7.jpg"
              alt=""
              onClick={() => {
                setImageId("7");
              }}
            />
            <img
              id="8"
              className="image"
              draggable="false"
              src="images/8.jpg"
              alt=""
              onClick={() => {
                setImageId("8");
              }}
            />
            <img
              id="9"
              className="image"
              draggable="false"
              src="images/9.jpg"
              alt=""
              onClick={() => {
                setImageId("9");
              }}
            />
            <img
              id="10"
              className="image"
              draggable="false"
              src="images/10.jpg"
              alt=""
              onClick={() => {
                setImageId("10");
              }}
            />
          </div>
        </section>
      )}
      {toggleViewer && (
        <div className="viewer">
          <img
            className="viewer__image"
            src={`images/${imageId}.jpg`}
            alt={imageId}
          />
          <div className="viewer__actions">
            <button className="viewer__actions-save">
              Save to your Library
            </button>
            <button
              onClick={() => {
                setToggleViewer(false);
                setImageId("");
              }}
              className="viewer__actions-back"
            >
              Back to Works
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Work;

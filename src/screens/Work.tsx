import React, { useState, useEffect } from "react";

const Work = () => {
  const [percentage, setPercentage] = useState(0);
  const [isPhone, setIsPhone] = useState(false)

  useEffect(() => {
    const track: any = document.getElementById("image-track");

    const handleOnDown = (e: any) => {
      track.dataset.mouseDownAt = e.clientX;
    };

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

      track.animate(
        {
          transform: `translate(${nextPercentage}%, -50%)`,
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

    if(window.innerWidth >= 1279){
      setIsPhone(false)
    } else{
      setIsPhone(true)
    }
    console.log(isPhone);

    window.addEventListener("mousedown", handleOnDown);
    window.addEventListener("touchstart", handleOnDown);
    window.addEventListener("mouseup", handleOnUp);
    window.addEventListener("touchend", handleOnUp);
    window.addEventListener("mousemove", handleOnMove);
    window.addEventListener("touchmove", handleOnMove);

    return () => {
      window.removeEventListener("mousedown", handleOnDown);
      window.removeEventListener("touchstart", handleOnDown);
      window.removeEventListener("mouseup", handleOnUp);
      window.removeEventListener("touchend", handleOnUp);
      window.removeEventListener("mousemove", handleOnMove);
      window.removeEventListener("touchmove", handleOnMove);
    };
  }, [percentage, isPhone]);

  return (
    <div className="work ">
      <section className="work__intro">
        <div className="work__intro-title">
          <h1>The 2023 Gallery</h1>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="22"
          viewBox="0 0 24 22"
          fill="none"
          className="work__intro-arrow"
        >
          <path
            d="M13.5 2C13.5 1.17157 12.8284 0.5 12 0.5C11.1716 0.5 10.5 1.17157 10.5 2L13.5 2ZM10.9393 21.0607C11.5251 21.6464 12.4749 21.6464 13.0607 21.0607L22.6066 11.5147C23.1924 10.9289 23.1924 9.97919 22.6066 9.3934C22.0208 8.80761 21.0711 8.80761 20.4853 9.3934L12 17.8787L3.51472 9.3934C2.92893 8.80761 1.97918 8.80761 1.3934 9.3934C0.807611 9.97918 0.807611 10.9289 1.3934 11.5147L10.9393 21.0607ZM10.5 2L10.5 20L13.5 20L13.5 2L10.5 2Z"
            fill="#F7E8C1"
          />
        </svg>
      </section>

      <section className="work__works">
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
          />
          <img
            id="2"
            className="image"
            draggable="false"
            src="images/2.jpg"
            alt=""
          />
          <img
            id="3"
            className="image"
            draggable="false"
            src="images/3.jpg"
            alt=""
          />
          <img
            id="4"
            className="image"
            draggable="false"
            src="images/4.jpg"
            alt=""
          />
          <img
            id="5"
            className="image"
            draggable="false"
            src="images/5.jpg"
            alt=""
          />
          <img
            id="6"
            className="image"
            draggable="false"
            src="images/6.jpg"
            alt=""
          />
          <img
            id="7"
            className="image"
            draggable="false"
            src="images/7.jpg"
            alt=""
          />
          <img
            id="8"
            className="image"
            draggable="false"
            src="images/8.jpg"
            alt=""
          />
          <img
            id="9"
            className="image"
            draggable="false"
            src="images/9.jpg"
            alt=""
          />
          <img
            id="10"
            className="image"
            draggable="false"
            src="images/10.jpg"
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default Work;

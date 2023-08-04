import React, { useState } from "react";
import Contact from "./screens/Contact";
import About from "./screens/About";



const Work = () => {

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

function App() {

  const [open, setOpen] = useState(false);

  const [workOpen, setWorkOpen] = useState(true);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);


  const openWork = () => {
    setWorkOpen(true);
    setAboutOpen(false);
    setContactOpen(false);
    setOpen(false);
  }
  
  const openAbout = () => {
    setWorkOpen(false);
    setAboutOpen(true);
    setContactOpen(false);
    setOpen(false);
  }
  
  const openContact = () => {
    setWorkOpen(false);
    setAboutOpen(false);
    setContactOpen(true);
    setOpen(false);
  }

  const handleClick = () => {
    setOpen(!open);
    console.log(open);
  };

  return (
    <div className={open ? "App overflow-hidden" : "App "}>
      {/* Navigation Menu */}
      <nav className="nav">
        <button onClick={handleClick} className="nav__burger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </button>
        <div className="nav__artist">
          <p className="nav__artist-name">Simon Reinhardt</p>
        </div>
      </nav>

      {/* Menu Open & close */}
      {open && (
        <div className="menu">
          <ul className="menu__list">
            <li className="menu__list-li" onClick={openWork}>
              Works
            </li>
            <li className="menu__list-li" onClick={openAbout}>
              About
            </li>
            <li className="menu__list-li" onClick={openContact}>
              Contact
            </li>
          </ul>
        </div>
      )}

      {/* Other Screens */}
      {workOpen && <Work />}
      {aboutOpen && <About />}
      {contactOpen && <Contact />}
    </div>
  );
}

export default App;

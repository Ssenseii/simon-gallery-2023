import React, { useState } from "react";
import Contact from "./screens/Contact";
import About from "./screens/About";
import Work from "./screens/Work";

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
  };

  const openAbout = () => {
    setWorkOpen(false);
    setAboutOpen(true);
    setContactOpen(false);
    setOpen(false);
  };

  const openContact = () => {
    setWorkOpen(false);
    setAboutOpen(false);
    setContactOpen(true);
    setOpen(false);
  };

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
        <ul className="nav__list">
          <li className="nav__list-li" onClick={openWork}>
            Works
          </li>
          <li className="nav__list-li" onClick={openAbout}>
            About
          </li>
          <li className="nav__list-li" onClick={openContact}>
            Contact
          </li>
        </ul>
      </nav>

      {/* Desktop */}

      <div className="homescreen">
        <section className="homescreen__social"></section>
        <section className="homescreen__works">
          <Work />
        </section>
      </div>

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

      {/* Conditional Screens */}

      {workOpen && window.innerWidth <= 1279 && <Work />}
      {aboutOpen && window.innerWidth <= 1279 && <About />}
      {contactOpen && window.innerWidth <= 1279 && <Contact />}
    </div>
  );
}

export default App;

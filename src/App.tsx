import React, { useState } from "react";
import Contact from "./screens/Contact";
import About from "./screens/About";
import Work from "./screens/Work";
import Title from "./screens/Title";

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const [workOpen, setWorkOpen] = useState(true);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const [bigTitle, setBigTitle] = useState("Works")

  const openWork = () => {
    setWorkOpen(true);
    setAboutOpen(false);
    setContactOpen(false);
    setOpenMenu(false);
    setBigTitle('Works')
  };

  const openAbout = () => {
    setWorkOpen(false);
    setAboutOpen(true);
    setContactOpen(false);
    setOpenMenu(false);
    setBigTitle('About')
  };

  const openContact = () => {
    setWorkOpen(false);
    setAboutOpen(false);
    setContactOpen(true);
    setOpenMenu(false);
    setBigTitle('Contact')
  };

  const handleClick = () => {
    setOpenMenu(!openMenu);
    console.log(openMenu);
  };

  return (
    <div className={openMenu ? "App overflow-hidden" : "App "}>
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
        <section className="homescreen__components">
          <Title title={bigTitle}></Title>
          {workOpen && <Work />}
          {aboutOpen && <About />}
          {contactOpen && <Contact />}
        </section>
      </div>

      {/* Menu Open & close */}
      {openMenu && (
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
    </div>
  );
}

export default App;

/// imports

import React, { useState, useEffect } from "react";
import Contact from "./screens/Contact";
import About from "./screens/About";
import Work from "./screens/Work";
import Title, {StaticTitle} from "./components/Title";
import { useAnimate, AnimatePresence, motion } from "framer-motion";

/// Menu Animation

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate([
      [
        "div.line-top",
        { rotate: isOpen ? 45 : 0, y: isOpen ? [0, 10] : [10, 0] },
        { at: 0, duration: 0.1 },
      ],
      ["div.line-middle", { opacity: isOpen ? 0 : 1 }, { at: 0, duration: 0 }],
      [
        "div.line-bottom",
        { rotate: isOpen ? -45 : 0, y: isOpen ? [0, -10] : [-10, 0] },
        { at: 0, duration: 0.1 },
      ],
      ["menu__list", { x: [-100, 0] }, { at: 0 }],
    ]);
  }, [isOpen, animate]);

  return scope;
}

/// Main Function

function App() {
  /// useState Variables

  /// a lot of these states can be combined
  const [openMenu, setOpenMenu] = useState(false); /// toggle Menu

  const [workOpen, setWorkOpen] = useState(true); /// Toggle Screens
  const [aboutOpen, setAboutOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  /// This is so hacky but it works
  const [bigTitle, setBigTitle] = useState("Works"); /// Toggle Big Title in desktop Mode
  const [bigTitleExists, setBigTitleExists] = useState(true); /// Toggle existence of Big Title in desktop Mode
  const [bigStaticTitle, setBigStaticTitle] = useState(""); /// Toggle Big Static Title in desktop Mode

  /// Sub Functions

  /// functions for opening and closing

  const openWork = () => {
    /// opens the works screen and closes the others, sets the big title accordingly.

    setWorkOpen(true);
    setAboutOpen(false);
    setContactOpen(false);
    setOpenMenu(false);
    setBigTitle("Works");
    setBigTitleExists(true);
    setBigStaticTitle("");
  };

  const openAbout = () => {
    setWorkOpen(false);
    setAboutOpen(true);
    setContactOpen(false);
    setOpenMenu(false);
    setBigTitle("");
    setBigTitleExists(false);
    setBigStaticTitle("About");
  };

  const openContact = () => {
    setWorkOpen(false);
    setAboutOpen(false);
    setContactOpen(true);
    setOpenMenu(false);
    setBigTitle("");
    setBigTitleExists(false);
    setBigStaticTitle("Contact");
  };

  const handleClick = () => {
    /// Toggling the Menu
    setOpenMenu(!openMenu);
  };

  /// Return
  const scope = useMenuAnimation(openMenu);

  return (
    <div className={"App"}>
      {/* Navigation Menu */}
      <nav className="nav">
        <motion.button
          onClick={handleClick}
          className="nav__burger"
          ref={scope}
          whileTap={{ scale: 0.7 }}
        >
          <div className="line line-top"></div>
          <div className="line line-middle"></div>
          <div className="line line-bottom"></div>
        </motion.button>
        <div className="nav__artist">
          <p className="nav__artist-name">{openMenu ? "Main Menu" : " "}</p>
        </div>

        {/* Desktop nav*/}
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

      {/* Screens */}
      <div className="homescreen">
        <section className="homescreen__components">
          {bigTitleExists ? (
            <Title dynamicTitle={bigTitle}></Title>
          ) : (
            <StaticTitle staticTitle={bigStaticTitle}></StaticTitle>
          )}
          {workOpen && <Work />}
          {aboutOpen && <About />}
          {contactOpen && <Contact />}
        </section>
      </div>

      {/* Menu Open & close */}
      <AnimatePresence>
        {openMenu && (
          <motion.div
            className="menu"
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            exit={{ x: 500 }}
            transition={{ type: "just" }}
          >
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
          </motion.div>
        )}
      </AnimatePresence>

      {/* Conditional Screens */}
    </div>
  );
}

export default App;

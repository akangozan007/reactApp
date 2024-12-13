import React, { useState, useEffect } from "react";

import '../styles/Navbar.css'

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={scrolled ? "nav scrolled" : "nav"}>
        <div className="wrapper">
            <div className={scrolled ? "logo scrolled a":"logo a"}><a href=''>Nzan</a></div>
            <div className="menu">
                <ul>
                    <li><a href="#home">Homepage</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#articles">Articles</a></li>
                    <li><a href="#cv">CV</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="" className="tbl-biru">Sign Up</a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar

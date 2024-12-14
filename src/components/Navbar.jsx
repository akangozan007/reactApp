import React, { useState, useEffect } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

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
<>
  <div className="fixed-top">
  <nav className={`navbar navbar-expand-lg ${scrolled ? "nav scrolled" : "nav"}`}>
        <div className="wrapper">
          <div className={scrolled ? "logo scrolled a":"logo a"} >
            <a className="text-decoration-none d-inline h3" href=''>Nzan</a> 
            <button className="navbar-toggler float-end d-inline d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              {/* <span className="navbar-toggler-icon tbl-biru "></span> */}
            </button>
            </div>
            <div className="menu collapse navbar-collapse" id="navbarNav">
                <ul>
                    <li><a href="#home">Homepage</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#articles">Articles</a></li>
                    <li><a href="#cv">CV</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="" className="tbl-biru fs-5"><i className="bi bi-github"></i></a></li>
                </ul>
            </div>
        </div>
    </nav>
  </div>
</>
  )
}

export default Navbar

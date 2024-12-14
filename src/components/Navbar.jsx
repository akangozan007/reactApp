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
    <div className="container-fluid">
      <a className={`display-6 text-decoration-none ${scrolled ? "logo1 scrolled" : "logo1"}`} href="#">Nzan</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 float-end">
          <li className="nav-item"><a href="#home">Homepage</a></li>
          <li className="nav-item"><a href="#projects">Projects</a></li>
          <li className="nav-item"><a href="#skills">Skills</a></li>
          <li className="nav-item"><a href="#articles">Articles</a></li>
          <li className="nav-item"><a href="#cv">CV</a></li>
          <li className="nav-item"><a href="#contact">Contact</a></li>
          <li className="nav-item"><a href="" className="tbl-biru fs-5"><i className="bi bi-github"></i></a></li>
        </ul>
      </div>
    </div>
  </nav>
  </div>
</>
  )
}

export default Navbar

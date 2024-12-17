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
      <a className={`display-6 text-decoration-none fw-bold ${scrolled ? "logo1 scrolled" : "logo1"}`} href="#">Nzan</a>
      {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      
      </button> */}
      <a href="" className="text-decoration-none d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i class="bi bi-list" ></i></a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className={`ms-5-sm py-2 ms-auto mb-2 mb-lg-0 ${scrolled ? "navbar-nav scrolled" : "navbar-nav" }`}>
          <li className="nav-item"><a className="text-decoration-none" href="#home">Homepage</a></li>
          <li className="nav-item"><a className="text-decoration-none"  href="#projects">Projects</a></li>
          <li className="nav-item"><a className="text-decoration-none" href="#skills">Skills</a></li>
          <li className="nav-item"><a className="text-decoration-none" href="#articles">Articles</a></li>
          <li className="nav-item"><a className="text-decoration-none" href="#cv">CV</a></li>
          <li className="nav-item"><a className="text-decoration-none" href="#contact">Contact</a></li>
          <li className="nav-item text-start"><a href="" className="tbl-biru fs-5 text-decoration-none"><i className="bi bi-github"></i></a></li>
        </ul>
      </div>
    </div>
  </nav>
  </div>
</>
  )
}

export default Navbar

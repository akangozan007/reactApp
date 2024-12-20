import { React, useEffect, useState } from "react";
import MagneticGSApp from '../components/MagneticGsap';
import BootstrapLogo from '../images/bootstrap-5-1.svg';
import CLogo from '../images/c.svg';
import CodeigniterLogo from '../images/codeigniter.svg';
import NodeJSLogo from '../images/nodejs-2.svg';
import JqueryLogo from '../images/jquery-6.svg';
import PyLogo from '../images/python-package-index-1.svg';
import MysqlLogo from '../images/mysql-4.svg';
import GitLogo from '../images/git-bash.svg';
import UbuntuLogo from '../images/ubuntu-4.svg';
import OracleLogo from '../images/oracle-6.svg';
import CiscoLogo from '../images/cisco-2.svg';
import '../styles/Scroll.css'
// import effect
import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
    
import { CustomEase } from "gsap/CustomEase";
import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/EasePack";
    
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(Flip,ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin,EaselPlugin,PixiPlugin,TextPlugin,RoughEase,ExpoScaleEase,SlowMo,CustomEase);


export function Skills() {
  const logos = [
    { src: BootstrapLogo, alt: 'Bootstrap Logo' },
    { src: JqueryLogo, alt: 'jQuery Logo' },
    { src: CLogo, alt: 'C Logo' },
    { src: CodeigniterLogo, alt: 'CodeIgniter Logo' },
    { src: NodeJSLogo, alt: 'Node.js Logo' },
    { src: PyLogo, alt: 'Python Logo' },
    { src: MysqlLogo, alt: 'MySQL Logo' },
    { src: GitLogo, alt: 'Git Logo' },
    { src: UbuntuLogo, alt: 'Ubuntu Logo' },
    { src: OracleLogo, alt: 'Oracle Logo' },
    { src: CiscoLogo, alt: 'Cisco Logo' },
  ];

// pengecekan skala layar
const [isMobile, setIsMobile] = useState(false);
  
useEffect(() => {
  window.screen.width <= 760 ? setIsMobile(true) : setIsMobile(false);
}, [window.screen.width]);

function detectWindowSize() {
  window.innerWidth <= 760 ? setIsMobile(true) : setIsMobile(false);        
}

window.onresize = detectWindowSize;

console.log(isMobile)
// menentukan effect dikhususkan animasi di android

  // efek pin ketika tampilan di android
  gsap.to("#angka", {
    rotation: 360,
    scrollTrigger: {
      trigger: ".pin",
      pin: true,
      start: "top top",
      end: "+=1000px",
      scrub: true
    }
  });

  

  return (
    <div className="container-fluid w-100 bg-white bg-opacity-75">
      {/*  */}
      <div class="spacer"></div>
      <div class="pin">
        <div class="black">
          <h2>like this</h2>
        </div>
        <div class="spacer"></div>
      </div>
      <div className='text-lg-center text-center text-sm-start mt-5 '>
        <p className='display-5 d-inline'><i className="bi bi-caret-right"></i></p>
        <p className='display-5 d-inline titleSkill'>skills</p>
      </div>
      <div className="hero__images px-2 mx-5">
        {logos.map((logo, index) => (
          <MagneticGSApp key={index}>
            <div className="hero__image">
              <img
                // width="250"
                className='img-fluid Scroll'
                alt={logo.alt}
                src={logo.src}
                draggable="false"
                fetchpriority="high"
              />
            </div>
          </MagneticGSApp>
        ))}
      </div>
    </div>
  );
}

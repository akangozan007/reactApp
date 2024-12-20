import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const ScrollSmoother = ({ children }) => {
  useEffect(() => {
    // GSAP ScrollTrigger
    // Your other stuff
    // const anim = gsap.to(".content", { opacity: 0, paused: true }); // can be left out

    // const ST = ScrollTrigger.create({
    // trigger: "body",
    // start: 0,
    // end: "bottom bottom",
    
    // animation: anim, // can be left out
    // pin: ".content", // can be left out
    // scrub: true      // can be left out
    // });

    // let progress;

    // // The relevant part to keeping the progress
    // ScrollTrigger.addEventListener("refreshInit", () => progress = ST.progress);
    // ScrollTrigger.addEventListener("refresh", () => ST.scroll(progress * ScrollTrigger.maxScroll(window)));


    // Lenis Smooth Scrolling
    const lenis = new Lenis({
      smooth: true,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenis.on('scroll', ScrollTrigger.update); // Sinkronkan Lenis dengan ScrollTrigger

    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update(); // Update ScrollTrigger setiap frame
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default ScrollSmoother;

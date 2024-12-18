// EffectName.jsx
import React, { useEffect } from 'react';
import SplitType from 'split-type';
import gsap from 'gsap';

const EffectName = () => {
  useEffect(() => {
    // Pisahkan teks menjadi karakter menggunakan SplitType
    const myText = new SplitType('#my-text');

    // Animasi menggunakan GSAP
    gsap.to('.char', {
      y: 0,           // Gerakan ke posisi semula
      stagger: 0.05,  // Jeda antara karakter
      delay: 0.2,     // Penundaan sebelum animasi dimulai
      duration: 0.2,  // Durasi animasi per karakter
    });
  }, []);

  return (
    <header>
      <h1 id="my-text" className='textLoad display-1 fw-bolder text-white' >Welcome To My Portfolio</h1>
    </header>
  );
};

export default EffectName;

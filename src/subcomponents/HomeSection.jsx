import { useEffect } from 'react';
import { HomeData } from "./HomeData";
import { ProjectData } from "./ProjectData";
import { TutorData } from "./TutorData";
import { PartnersData } from "./PartnersData";
// import css home
import  '../styles/Homepage.css'
// import animejs
import anime from 'animejs/lib/anime.es.js';
import parse from "html-react-parser"

function HomeSection() {

  return (
    <>
     {/* Intro */}
     <section id="home" className="home">
      <img id="MyPict" src={HomeData.image} width="100%"/>
      {parse(HomeData.content)}
     </section>
     {/* ./Intro */}
     {/* Online Course */}
     <section id="courses">
        { parse(ProjectData.contentProjectData) }
        <img src={ ProjectData.imageProjectData }/>
     </section>
     {/* ./Online Course */}
     {/* Tutor Section */}
     <section id="tutors">
        <div className="tengah">
          {/* Judul Tutor */}
          { parse(TutorData.judul) }
          {/* ./Judul Tutor */}
          {/* Pembimbing Tutor */}
          <div className="tutor-list">
            {/* Tutor1 */}
            { parse(TutorData.Tutor1) }
            {/* ./Tutor1 */}
            {/* Tutor2 */}
            { parse(TutorData.Tutor2) }
            {/* ./Tutor2 */}
            {/* Tutor3 */}
            { parse(TutorData.Tutor3) }
            {/* ./Tutor3 */}
            {/* Tutor4 */}
            { parse(TutorData.Tutor4) }
            {/* ./Tutor4 */}
          </div>
        </div>
     </section>
     {/* ./Tutor Section */}
     {/* Partner Section */}
     <section id="partners">
        <div className="tengah">
            <div className="kolom">
              { parse(PartnersData.Header) }
            </div>
            <div className="partner-list">
                { parse(PartnersData.PartnerLists[0]) }
                { parse(PartnersData.PartnerLists[1]) }
                { parse(PartnersData.PartnerLists[2]) }
                { parse(PartnersData.PartnerLists[3]) }
            </div>
        </div>
     </section>
    </>
  );
}

export default HomeSection;

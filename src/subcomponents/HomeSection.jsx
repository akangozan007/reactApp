import { useEffect } from "react";
import { HomeData } from "./HomeData";
import { ProjectData } from "./ProjectData";
import { TutorData } from "./TutorData";
import { PartnersData } from "./PartnersData";
import { Skills } from "./Skills";
// Import CSS
import "../styles/Homepage.css";
import "../styles/Skills.css";
import parse from "html-react-parser";
// import { gsap } from "gsap";


function HomeSection() {

  return (
    <>
      {/* Intro */}
      <section id="home" className="container-fluid home mt-3">
        <div className="wrapper">
          <div className="">
            <div className="row justify-content-end">
                <div className="col-lg-6 col-sm-12">
                  <img id="MyPict" src={HomeData.image} className="img-fluid elementMuka mt-3" alt="My Picture" />
                </div>
                <div className="col-lg-6 col-sm-12">
                {parse(HomeData.content)}
                </div>
                <div className="col-12">
                {/* skills */}
                <Skills />
                 {/* ./Skills */}
                </div>
            </div>
          </div>
        </div>
      </section>
      {/* ./Intro */}

      {/* Online Course */}
      <section id="courses" className="px-4">
        {parse(ProjectData.contentProjectData)}
        <img src={ProjectData.imageProjectData} alt="Project" />
      </section>
      {/* ./Online Course */}

      {/* Tutor Section */}
      <section id="tutors">
        <div className="tengah">
          {/* Judul Tutor */}
          {parse(TutorData.judul)}
          {/* ./Judul Tutor */}
          {/* Pembimbing Tutor */}
          <div className="tutor-list">
            {parse(TutorData.Tutor1)}
            {parse(TutorData.Tutor2)}
            {parse(TutorData.Tutor3)}
            {parse(TutorData.Tutor4)}
          </div>
        </div>
      </section>
      {/* ./Tutor Section */}

      {/* Partner Section */}
      <section id="partners">
        <div className="tengah">
          <div className="kolom">{parse(PartnersData.Header)}</div>
          <div className="partner-list">
            {parse(PartnersData.PartnerLists[0])}
            {parse(PartnersData.PartnerLists[1])}
            {parse(PartnersData.PartnerLists[2])}
            {parse(PartnersData.PartnerLists[3])}
          </div>
        </div>
      </section>
      
    </>
  );
}

export default HomeSection;

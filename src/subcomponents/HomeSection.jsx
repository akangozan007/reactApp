import { HomeData } from "./HomeData";
import { ProjectData } from "./ProjectData";
import { TutorData } from "./TutorData";
import { PartnersData } from "./PartnersData";

import parse from "html-react-parser"

function HomeSection() {
  return (
    <>
     {/* Intro */}
     <section id="home">
      <img src={HomeData.image} width="100%"/>
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
       {/* ./Partner Section */}
    </>
    
  )
}



export default HomeSection

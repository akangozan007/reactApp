// import components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import sub components
import HomeSection1 from '../subcomponents/HomeSection'
// import css home
import  '../styles/Homepage.css'
// import css tutor
import  '../styles/Tutor.css'
// import css tutor
import  '../styles/Partners.css'

function Homepage() {

  return (
   <>
    {/* Homepage */}
  <Navbar />
   {/* Intro */}
   <div className='wrapper'>
    <HomeSection1 />
   </div>

   {/* ./Intro */}

   <Footer />
    {/* ./Homepage */}
   </>
  )
}

export default Homepage

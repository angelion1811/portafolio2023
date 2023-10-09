import logo from './logo.svg';
import './App.css';
import Header from './componets/Header';
import MainContent from './componets/MainContent';
import SectionHome from './componets/Section_1_Home';
import Preloader from './componets/Preloader';
import Footer from './componets/Fotter';
import SectionAbout from './componets/Section_2_About';
import SectionServices from './componets/Section_3_Services';
import SectionResume from './componets/Section_4_Resume';
import SectionPortafolio from './componets/Section_5_Portafolio';
import SectionHireMe from './componets/Section_6_HireMe';
import SectionFaq from './componets/Section_7_Faq';
import SectionTestimonial from './componets/Section_8_Testimonial';
import SectionContact from './componets/Section_9_Contact';
import SectionHomeCopy from './componets/Section_1_Home_copy';

function App() {
  return (
    <>
   
    <div id="main-wrapper"> 
      <Header/>
      <MainContent>
        <SectionHomeCopy/>
        <SectionAbout/>
        <SectionServices/>
        <SectionResume/>
        <SectionPortafolio/>
        <SectionHireMe/>
        <SectionFaq/>
        {
          /*/
          <SectionTestimonial/>
          //*/
        }
        <SectionContact/>
      </MainContent>
      <Footer/>
    </div>
    </>
  );
}

export default App;

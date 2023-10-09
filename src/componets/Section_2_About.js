import { Children, useEffect, useState } from "react"
import useStarted from "../hooks/useStarted";
import { useTranslation } from "react-i18next";
import moment from "moment/moment";
import WOW from 'wowjs';
const InfoColumn = ({animatedClass, started, title, info, delay="0.2s", children}) => {
   return (<>
    <div className={`col-6 col-lg-3 wow fadeInUp`} data-wow-delay={`${delay}`} >
      <p className="text-muted fw-500 mb-0">{title}</p>
      {children??<p className="text-4 text-dark fw-600 mb-0">{info}</p>}
    </div>
   </>)
  
}
const SectionAbout = () => {
  const years = moment().diff('2017-01-05', 'years');
  const {t} = useTranslation("Section2About");
  const {started, animatedClass, startAnimation, initialChange} = useStarted();
  useEffect(()=>{
    new WOW.WOW().init();
    //initialChange(3);
  },[])
return(<>
    <section id="about" className="section" >
      <div className="container"> 
        <p className={`text-center mb-2 wow fadeInUp`} >
          <span className="bg-primary text-dark px-2">{t("AboutMe")}</span>
        </p>
        <h2 
          className={`text-10 fw-600 text-center mb-5 wow fadeInUp`} 
        >
          {t("KnowMeMore")}
        </h2>
        
        <div className="row">
          <div className={`col-lg-8 text-center text-lg-start wow fadeInUp`}>
            <h2 className="text-8 fw-400 mb-3">{t(`Hi`)}<span className="fw-700 border-bottom border-3 border-primary m-2">Angel León</span>
            </h2>
            <p className="text-5">
              {t("paragraph")}
            </p>
          </div>
          <div className={`col-lg-4 mt-4 mt-lg-0 wow fadeInUp`} data-wow-delay="0.2s">
            <div className="featured-box style-4">
              <div className="featured-box-icon text-25 fw-500 bg-primary rounded-circle">
                <span 
                  className={`wow heartBeat`} 
                  data-wow-delay="1.3s"
                >
                  {years}
                </span>
              </div>
              <h3 
                className={`text-7 wow rubberBand`} 
                data-wow-delay="2s" 
              >
                {t(`Yearsof`)} <span className="fw-700">{t(`Experiance`)}</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row gy-3 mt-4">
          <InfoColumn title={t(`Name`)} info={`Angel León`} />
          <InfoColumn title={t(`Email`)} >
            <p className="text-4 fw-600 mb-0">
              <a className="link-dark" href="">angelleon.ef@gmail.com</a>
            </p>
          </InfoColumn>
          <InfoColumn title={t(`DateOfBirth`)} info={ t(`DateOfBirthValue`)}/>
          <InfoColumn title={t(`From`)} info={`Carabobo, Venezuela`}/>
        </div>
      </div>
    </section>
</>)}

export default SectionAbout
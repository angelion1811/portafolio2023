import { Children, useEffect, useState } from "react"
import useStarted from "../hooks/useStarted";
import { useTranslation } from "react-i18next";
import moment from "moment/moment";
const InfoColumn = ({animatedClass, started, title, info, delay="0.1s", children}) => {
   return (<>
    <div className={`col-6 col-lg-3 wow fadeInUp ${animatedClass}`} data-wow-delay={`${delay}`} style={{"visibility": started?"visible":"hidden", "animation-delay": `${delay}`, "animationName": started? undefined:"none",}}>
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
    initialChange(3);
  },[])
return(<>
    <section id="about" className="section" onMouseEnter={()=>startAnimation(0)} onFocusCapture={()=>startAnimation(0)} onFocus={()=>startAnimation(0)}>
      <div className="container"> 
        <p className={`text-center mb-2 wow fadeInUp ${animatedClass[0]}`} style={{"visibility": started[0]?"visible":"hidden", "animationName": started[0]? undefined:"none"}}>
          <span className="bg-primary text-dark px-2">{t("AboutMe")}</span>
        </p>
        <h2 
          className={`text-10 fw-600 text-center mb-5 wow fadeInUp ${animatedClass[0]}`} 
          style={{"visibility": started[0]?"visible":"hidden", "animationName": started[0]? undefined:"none"}}
        >
          {t("KnowMeMore")}
        </h2>
        
        <div className="row" onMouseEnter={()=>startAnimation(1)} onFocusCapture={()=>startAnimation(1)} onFocus={()=>startAnimation(1)}>
          <div className={`col-lg-8 text-center text-lg-start wow fadeInUp ${animatedClass[1]}`} style={{"visibility": started[1]?"visible":"hidden", "animationName": started[1]? undefined:"none"}}>
            <h2 className="text-8 fw-400 mb-3">{t(`Hi`)}<span className="fw-700 border-bottom border-3 border-primary m-2">Angel León</span>
            </h2>
            <p className="text-5">
              {t("paragraph")}
            </p>
          </div>
          <div className={`col-lg-4 mt-4 mt-lg-0 wow fadeInUp ${animatedClass[1]}`} data-wow-delay="0.2s" style={{"visibility": started[1]?"visible":"hidden", "animation-delay": "0.2s", "animationName": started[1]? undefined:"none"}}>
            <div className="featured-box style-4">
              <div className="featured-box-icon text-25 fw-500 bg-primary rounded-circle">
                <span 
                  className={`wow heartBeat ${animatedClass[1]}`} 
                  data-wow-delay="1.3s"
                  style={{"visibility": started[1]?"visible":"hidden", "animation-delay": "1.3s", "animationName": started[1]? undefined:"none"}}
                >
                  {years}
                </span>
              </div>
              <h3 
                className={`text-7 wow rubberBand ${animatedClass[1]}`} 
                data-wow-delay="2s" 
                style={{"visibility": started[1]?"visible":"hidden", "animation-delay": "2s","animationName": started[1]? undefined:"none"}}
              >
                {t(`Yearsof`)} <span className="fw-700">{t(`Experiance`)}</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row gy-3 mt-4" onMouseEnter={()=>startAnimation(2)} onFocusCapture={()=>startAnimation(2)} onFocus={()=>startAnimation(2)}>
          <InfoColumn title={t(`Name`)} info={`Angel León`} animatedClass={animatedClass[2]} started={started[2]} />
          <InfoColumn title={t(`Email`)} animatedClass={animatedClass[2]} started={started[2]}>
            <p className="text-4 fw-600 mb-0">
              <a className="link-dark" href="">angelleon.ef@gmail.com</a>
            </p>
          </InfoColumn>
          <InfoColumn title={t(`DateOfBirth`)} info={ t(`DateOfBirthValue`)} animatedClass={animatedClass[2]} started={started[2]}/>
          <InfoColumn title={t(`From`)} info={`Carabobo, Venezuela`} animatedClass={animatedClass[2]} started={started[2]}/>
        </div>
      </div>
    </section>
</>)}

export default SectionAbout
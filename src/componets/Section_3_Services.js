import { useEffect } from "react";
import useStarted from "../hooks/useStarted";
import { useTranslation } from "react-i18next";
const CustomColumn = ({title, paragraph, icon, iconClass }) => {
  return(<>
      <div className={`col-sm-6 col-lg-4 wow fadeInUp`}>
        <div className="featured-box text-center px-md-4">
          <div className="featured-box-icon text-primary text-13"> {icon ??<i className={`${iconClass}`}></i>}</div>
          <h3 className="text-6 fw-600 mb-3">{title}</h3>
          <p className="text-muted mb-0">{paragraph}</p>
        </div>
      </div>
  </>)
}

const SectionServices = () => {
  const {t} = useTranslation("Section3Services");
 
  useEffect(()=>{
    
  },[])

    return(<>
      <section id="services" className="section bg-light">
      <div className="container"> 
        <p className={`text-center mb-2 wow fadeInUp `}>
          <span className="bg-primary text-dark px-2">{t(`WhatIDo`)}</span>
        </p>
        <h2 className={`text-10 fw-600 text-center mb-5 wow fadeInUp`} >
          {t(`HowICanHelp`)}
        </h2>
        
        <div className="row gy-5 mt-5">
          <CustomColumn title={t(`title1`)} paragraph={t(`paragraph1`)} iconClass={`fas fa-desktop`} />
          <CustomColumn title={t(`title2`)} paragraph={t(`paragraph2`)} iconClass={`fas fa-pencil-ruler`} />
          <CustomColumn title={t(`title3`)} paragraph={t(`paragraph3`)} iconClass={`fa fa-mobile`} />
          <CustomColumn title={t(`title4`)} paragraph={t(`paragraph4`)} iconClass={`fa fa-clipboard-check`} />
          <CustomColumn title={t(`title5`)} paragraph={t(`paragraph5`)} iconClass={`fas fa-chart-area`} />
        </div>
      </div>
    </section>
    </>)
}

export default SectionServices;

import { useEffect } from "react";
import useStarted from "../hooks/useStarted";
import { useTranslation } from "react-i18next";
import CV_EN from "../assets/files/pdf/CV_EN.pdf"
import CV_ES from "../assets/files/pdf/CV_ES.pdf"
const DescriptionRow =  ({title, subTitle, paragraph}) => {
  return(<>
          <h3 className="text-5">{title}</h3>
          <p className="mb-2">{subTitle}</p>
          <p className="text-muted">{paragraph}</p>
  </>);
}

const PercentBar = ({title, percent}) => {
  return(<>
    <p className="fw-500 text-start mb-2 flex justify-between">
      <span class="float-right">{``}</span>
      <span class="float-end">{`${title}`}</span>
    </p>
    <div className="progress progress-sm mb-4">
      <div 
        className="progress-bar" 
        role="progressbar" style={{"width": `${percent}%`}} 
        aria-valuenow={`${percent}`} 
        aria-valuemin="0" 
        aria-valuemax="100"
      />
    </div>
  </>)
}
const SectionResume = () =>{
  const {t, i18n} = useTranslation("Section4Resume");
  const {started, animatedClass, startAnimation, initialChange} = useStarted();
  const styledObject = (index) => {
      switch (index){
        case 0: 
        case 1: 
        case 2: 
        case 3: 
          return {"visibility": started[index]?"visible":"hidden", "animationName": started[index]? undefined:"none"};
        default: 
          return {};
      }
  }
  
  const getFile = () => i18n.language == "es-US"? CV_ES:CV_EN;

  useEffect(()=>{
    initialChange(4);
  },[])
  return(<>
    <section id="resume" className="section" onMouseEnter={()=>startAnimation(0)}>
      <div className="container"> 
        <p className={`text-center mb-2 wow fadeInUp ${animatedClass[0]}`} style={styledObject(0)}>
          <span className="bg-primary text-dark px-2">
            {t("Resume")}
          </span>
        </p>
        <h2 className={`text-10 fw-600 text-center mb-5 wow fadeInUp ${animatedClass[0]}`} style={styledObject(0)}>
         {t("ASumary")}
        </h2>
        
        <div className="row g-5 mt-5" onMouseEnter={()=>startAnimation(1)}> 
          <div className={`col-lg-6 wow fadeInUp ${animatedClass[1]}`} style={styledObject(1)} >
            <h2 className="text-7 fw-600 mb-4 pb-2">
              {t('MyEducation')}
            </h2>
            <div className="border-start border-2 border-primary ps-3">
              <DescriptionRow 
                title={t("Ed_title_1")}
                subTitle={t("Ed_subtitle_1")}
                paragraph={t(`Ed_paragraph_1`)}
              />
              <hr className="my-4"/>
              <DescriptionRow 
                title={t("Ed_title_2")}
                subTitle={t("Ed_subtitle_2")}
                paragraph={t(`Ed_paragraph_2`)}
              />
              <hr className="my-4"/>
              <DescriptionRow 
                title={t("Ed_title_3")}
                subTitle={t("Ed_subtitle_3")}
                paragraph={t(`Ed_paragraph_3`)}
              />
              <hr className="my-4"/>
               <DescriptionRow 
                title={t("Ed_title_4")}
                subTitle={t("Ed_subtitle_4")}
                paragraph={t(`Ed_paragraph_4`)}
              />
              <hr className="my-4"/>
              <DescriptionRow 
                title={t("Ed_title_5")}
                subTitle={t("Ed_subtitle_5")}
                paragraph={t(`Ed_paragraph_5`)}
              />
            </div>
          </div>
          <div className={`col-lg-6 wow fadeInUp ${animatedClass[1]}`} data-wow-delay="0.2s" style={{...styledObject(1), "animation-delay": "0.2s"}}>
            <h2 className="text-7 fw-600 mb-4 pb-2">
              {t("MyExperience")}
            </h2>
            <div className="border-start border-2 border-primary ps-3">
              <DescriptionRow 
                title={t("E_title_6")}
                subTitle={t("E_subtitle_6")}
                paragraph={t(`E_paragraph_6`)} 
              /> 
              <hr className="my-4"/>
              <DescriptionRow 
                title={t("E_title_5")}
                subTitle={t("E_subtitle_5")}
                paragraph={t(`E_paragraph_5`)} 
              />
              <hr className="my-4"/>
              <DescriptionRow 
                title={t("E_title_4")}
                subTitle={t("E_subtitle_4")}
                paragraph={t(`E_paragraph_4`)} 
              />
              <hr className="my-4"/>
              <DescriptionRow 
                title={t("E_title_3")}
                subTitle={t("E_subtitle_3")}
                paragraph={t(`E_paragraph_3`)} 
               />
              <hr className="my-4"/>
              <DescriptionRow 
                title={t("E_title_2")}
                subTitle={t("E_subtitle_2")}
                paragraph={t(`E_paragraph_2`)} 
               />
              <hr className="my-4"/>
              <DescriptionRow 
                title={t("E_title_1")}
                subTitle={t("E_subtitle_1")}
                paragraph={t(`E_paragraph_1`)}
              />
             
            </div>
          </div>
        </div>
        <h2 className={`text-7 fw-600 mb-4 pb-2 mt-5 wow fadeInUp ${animatedClass[2]}`} style={styledObject(2)}>
          {t('MySkills')}
        </h2>
        <div className="row gx-5" onMouseEnter={()=>startAnimation(2)}>
          <div className={`col-md-6 wow fadeInUp ${animatedClass[2]}`} style={styledObject(2)}>
            <PercentBar title={`HTML/CSS`} percent={85} />
            <PercentBar title={`Javascript`} percent={70} />
            <PercentBar title={`PHP`} percent={70} />
            <PercentBar title={`C#`} percent={15} />
            <PercentBar title={`React-Native`} percent={70} />
          </div>
          <div className={`col-md-6 wow fadeInUp ${animatedClass[2]}`} data-wow-delay="0.2s" style={{...styledObject(2), "animation-delay": "0.2s"}}>
            <PercentBar title={`Laravel`} percent={70} />
            <PercentBar title={`Angular`} percent={70} />
            <PercentBar title={`Vuejs`} percent={85} />
            <PercentBar title={`React`} percent={70} />
            <PercentBar title={`Flutter`} percent={70} />
          </div>
        </div>
        <div className="row" onMouseEnter={()=>startAnimation(3)} >
          <p className={`text-center mt-5 wow fadeInUp ${animatedClass[3]}`} style={styledObject(3)} >
            <a href={getFile()} className="btn btn-outline-dark shadow-none rounded-0" download={`CV-${i18n.language}-Angel-Leon.pdf`}>{t(`DownloadCV`)}</a>
          </p>
        </div>
       
      </div>
    </section>
</>);
}

export default SectionResume;
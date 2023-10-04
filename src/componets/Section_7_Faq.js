import { useEffect, useState } from "react"
import FaqImg from "../assets/images/faq.png"
import { useTranslation } from "react-i18next";
const CustomAcordionItem = ({question, idBody , idHeader, children, customHeight="102" }) => {
  const [show, setShow] = useState(false);
  const [customStyle, setCustomStyle] = useState({});
  const [collapsingClass, setCollapsingClass] = useState(`accordion-collapse collapse`);

  const changeCollapse = async (show) => {
    if(show)
      setCustomStyle({height: `${customHeight}px`});
    await setTimeout(()=>{}, 100);
    setCollapsingClass(`accordion-collapse collapsing`)
    await setTimeout(()=>{}, 2000);
    if(show)
      setCollapsingClass(`accordion-collapse collapse show`)
    else
      setCollapsingClass(`accordion-collapse collapse`)
    setCustomStyle({});

  }

  useEffect(()=>{
    changeCollapse(show)
  },[show])
  return(<>
     <div className="accordion-item">
        <h2 className="accordion-header" id={`${idHeader}`} onClick={()=>setShow(!show)}>
          <button className={`accordion-button ${show?"":"collapsed"}`} type="button" data-bs-toggle="collapse" data-bs-target={`#${idBody}`} aria-expanded={show?"true":"false"} aria-controls={`${idBody}`}>
              {question}
          </button>
        </h2>
        <div id={`${idBody}`} className={`${collapsingClass}`} aria-labelledby={`${idHeader}`} data-bs-parent="#faqTopics" style={customStyle}>
          <div className="accordion-body">
            {children}
          </div>
        </div>
      </div>
  </>)
}

const SectionFaq = () => {
    const {t} = useTranslation("Section7Faq")
    return(<>
        <section id="faq" className="section bg-light">
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-6 order-1 order-lg-0 wow fadeInUp" style={{"visibility": "visible"}}> 
           
            <p className="text-center text-lg-start mb-2"><span className="bg-primary text-dark px-2">{t(`Faq`)}</span></p>
            <h2 className="text-10 fw-600 text-center text-lg-start mb-5">{t(`AnyQuestion`)}</h2>
          
            <div className="accordion accordion-flush" id="faqTopics">
             
              <CustomAcordionItem question={t("Question1")} idHeader={`question1`} idBody={'answer1'} >
                <p>{t(`Answer1_1`)}</p>
                <p className="mb-0">{t(`Answer1_2`)}</p>
              </CustomAcordionItem>
              <CustomAcordionItem question={t("Question2")} idHeader={`testheader`} idBody={'test'} >
                <p>{t(`Answer2_1`)}</p>
                <p className="mb-0">{t(`Answer2_2`)}</p>
                <p className="mb-0">{t(`Answer2_3`)}</p>
              </CustomAcordionItem>
              <CustomAcordionItem question={t("Question3")} idHeader={`testheader`} idBody={'test'} >
                <p>{t(`Answer3_1`)}</p>
                <p className="mb-0">{t(`Answer3_2`)}</p>
              </CustomAcordionItem>

            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-center justify-content-center order-0 order-lg-1 wow fadeIn" data-wow-delay="1s" style={{"visibility": "visible", "animation-delay": "1s"}}> 
            <img className="img-fluid" src={FaqImg} title="FAQ" alt="faq"/> 
        </div>
        </div>
      </div>
    </section>    
    </>)
}

export default SectionFaq;
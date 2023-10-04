import { useEffect, useState, useRef } from "react"
import CustomImage from "../assets/images/project-2.jpg"
import { useTranslation } from "react-i18next";
import ProjectDetailModal from "./ProjectDetailModal";
const PortfolioCard =  ({type, index, active}) => {

  const [customStyle, setCustomStyle] = useState({});
  const [customClass, setCustomClass] = useState('fadeInUp');
  const [started, setStarted] = useState(false)
  const openAnimation = async () => {
    setCustomStyle({})
    setCustomClass("fadeInUp");
    setStarted(true);
  }

  const closeAnimation = async () => {
    setCustomClass("fadeOutDown");
    setStarted(false);
    setTimeout(()=>{
      setCustomStyle({display:"none"})
    }, 2100);
  }
  
  const styledObject = () => {
    return{"visibility": started?"visible":"hidden","animation-delay": "0.2s"}
  }

  useEffect(()=>{
    if(active)
      openAnimation()
    else
      closeAnimation()
  }, [active])

  useEffect(()=>{},[started]);

  useEffect(()=>{
    openAnimation()
  }, [])

  return (<>
    <div 
      className={`col-sm-6 col-lg-4 wow  ${customClass} animated `}  
      data-wow-delay={`0.3s`} 
      style={{...styledObject(), ...customStyle}}
    >
      <div className="portfolio-box">
        <div className="portfolio-img"> <img className="img-fluid d-block" src={CustomImage} alt=""/>
          <div className="portfolio-overlay"> <a className="popup-ajax stretched-link" href="ajax/portfolio-ajax-project-1.html"></a>
            <div className="portfolio-overlay-details">
              <p className="text-primary text-8"><i className="fas fa-file-alt"></i></p>
              <h5 className="text-white text-5">Detailed Project 1</h5>
              <span className="text-light">Category</span> </div>
          </div>
        </div>
      </div>
    </div>
  </>)
}

const CustomTab = ({title, action, type, activeCardType}) =>{
  const activeClassMclassName = (type) => {
      return activeCardType == type? "active": ""
  }
  return<>
     <li className="nav-item"> 
            <a 
              data-filter="*" 
              onClick={()=>{ action()}}      
              className={`nav-link rounded-0 ${activeClassMclassName(type)}`}
            > 
              {title}
            </a>
          </li>
  </>
}

const SectionPortafolio = () => {
    const {t} = useTranslation("Section5Portfolio")
    const cards = [
      { id: 0, type: [`laravel`]},
      { id: 1, type: [`vue` ]},
      { id: 2, type: [`react` ]},
      { id: 3, type: [`react-native`]},
      { id: 4, type: [`flutter`]},
      { id: 5, type: [`others`]},
    ];
    const [activeCardType, setActiveCardType] = useState('all')
    const [activeCard, setActiveCard] = useState(cards);

    const filterCards = () => {
      let filtered = (cards.filter((e)=>{
        let r  = e.type.includes(activeCardType);
        return r;

      }));

      console.log(filtered);

      setActiveCard(filtered)
    }
    useEffect(()=>{
      if(activeCardType=="all")
        setActiveCard(cards)
      else
        filterCards()
    }, [activeCardType])

    

    return(<>
    <section id="portfolio" className="section bg-light">
      <div className="container"> 

        <p className="text-center mb-2 wow fadeInUp" style={{"visibility": "visible"}}><span className="bg-primary text-dark px-2">{t(`Portfolio`)}</span></p>
        <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp" style={{"visibility": "visible"}}>{t("SomeProjects")}</h2>
        
        <ul className="portfolio-menu nav nav-tabs fw-600 justify-content-start justify-content-md-center border-bottom-0 mb-4 wow fadeInUp" style={{"visibility": "visible"}}>
          <CustomTab title={t("all")}          action={()=>setActiveCardType("all")}          type={"all"}          activeCardType={activeCardType} />
          <CustomTab title={"Laravel"}      action={()=>setActiveCardType("laravel")}      type={"laravel"}      activeCardType={activeCardType} />
          <CustomTab title={"Vue"}          action={()=>setActiveCardType("vue")}          type={"vue"}          activeCardType={activeCardType} />
          <CustomTab title={"React"}        action={()=>setActiveCardType("react")}        type={"react"}        activeCardType={activeCardType} />
          <CustomTab title={"React-native"} action={()=>setActiveCardType("react-native")} type={"react-native"} activeCardType={activeCardType} />
          <CustomTab title={"Flutter"}      action={()=>setActiveCardType("flutter")}      type={"flutter"}      activeCardType={activeCardType} />
          <CustomTab title={t("others")}        action={()=>setActiveCardType("others")}       type={"others"}       activeCardType={activeCardType} />
        </ul>
        <div className="portfolio wow fadeInUp" style={{"visibility": "visible"}}>
          <div 
          className="row g-4 mt-3 portfolio-filter filter-container" 
          //style={{"position": "relative", "height": "939.4px", overflow:"auto"}}
          >
            {
              //*/
              cards.map((e, i)=><PortfolioCard 
                key={i} 
                index={i} 
                type={e.type} 
                active={activeCardType=="all"||e.type.includes(activeCardType)} 
              />)
              //*/
            }
 
          </div>
        </div>
      </div>
    </section>
    <ProjectDetailModal/>
    </>)
}
export default SectionPortafolio;
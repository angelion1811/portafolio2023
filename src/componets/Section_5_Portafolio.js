import { useEffect, useState, useRef } from "react"
import CustomImage from "../assets/images/project-2.jpg"
import { type } from "@testing-library/user-event/dist/type"

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

const SectionPortafolio = () => {
    const cards = [
      { id: 0, type: `detailed`},
      { id: 1, type: `mockups` },
      { id: 2, type: `youtube` },
      { id: 3, type: `vimeo`},
      { id: 4, type: `detailed`},
      { id: 5, type: `detailed`},
    ];
    const [activeCardType, setActiveCardType] = useState('all')
    const [activeCard, setActiveCard] = useState(cards);
        
    

    const activeClassMclassName = (type) => {
        return activeCardType == type? "active": ""
    }

    useEffect(()=>{
      if(activeCardType=="all")
        setActiveCard(cards)
      else
        setActiveCard(cards.filter((e)=>e.type==activeCardType))
    }, [activeCardType])

    return(<>
    <section id="portfolio" className="section bg-light">
      <div className="container"> 

        <p className="text-center mb-2 wow fadeInUp" style={{"visibility": "visible"}}><span className="bg-primary text-dark px-2">Portfolio</span></p>
        <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp" style={{"visibility": "visible"}}>Some of my most recent projects</h2>
        
        <ul className="portfolio-menu nav nav-tabs fw-600 justify-content-start justify-content-md-center border-bottom-0 mb-4 wow fadeInUp" style={{"visibility": "visible"}}>
          <li className="nav-item"> 
            <a 
              data-filter="*" 
              onClick={()=>{ setActiveCardType("all")}}      
              className={`nav-link rounded-0 ${activeClassMclassName("all")}`}
            > 
              All
            </a>
          </li>
          <li className="nav-item"> 
            <a 
              data-filter=".detailed" 
              onClick={()=>{ setActiveCardType("detailed")}} 
              className={`nav-link rounded-0 ${activeClassMclassName("detailed")}`}>Detailed
            </a>
          </li>
          <li className="nav-item"> 
            <a 
              data-filter=".mockups" 
              onClick={()=>{ setActiveCardType("mockups")}}  
              className={`nav-link rounded-0 ${activeClassMclassName("mockups")}`}>Mockups
            </a>
          </li>
          <li className="nav-item"> 
            <a 
              data-filter=".youtube" 
              onClick={()=>{ setActiveCardType("youtube")}}  
              className={`nav-link rounded-0 ${activeClassMclassName("youtube")}`}
            >
              YouTube Videos
            </a>
          </li>
          <li className="nav-item"> 
            <a 
              data-filter=".VIMEO" 
              onClick={()=>{ setActiveCardType("vimeo")}}    
              className={`nav-link rounded-0 ${activeClassMclassName("vimeo")}`}
            >
                Vimeo Videos
            </a>
          </li>
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
                active={activeCardType=="all"||e.type==activeCardType} 
              />)
              //*/
            }
            {
              /*/
              <>
            <div className="col-sm-6 col-lg-4 detailed" style={{"position": "absolute", "left": "0px", "top": "0px"}}>
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
            <div className="col-sm-6 col-lg-4 mockups" data-wow-delay="0.2s" style={{"position": "absolute", "left": "439.987px", "top": "0px"}}>
              <div className="portfolio-box">
                <div className="portfolio-img"> <img className="img-fluid d-block" src={CustomImage} alt=""/>
                  <div className="portfolio-overlay"> <a className="popup-img stretched-link" href="images/projects/project-2.jpg"></a>
                    <div className="portfolio-overlay-details">
                      <p className="text-primary text-8"><i className="fas fa-image"></i></p>
                      <h5 className="text-white text-5">Mockups Design 1</h5>
                      <span className="text-light">Category</span> </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 youtube" data-wow-delay="0.3s" style={{"position": "absolute", "left": "879.974px", "top": "0px"}}>
              <div className="portfolio-box">
                <div className="portfolio-img"> <img className="img-fluid d-block" src={CustomImage} alt=""/>
                  <div className="portfolio-overlay"> <a className="popup-youtube stretched-link" href="https://www.youtube.com/watch?v=PMNnEEEacCg"></a>
                    <div className="portfolio-overlay-details">
                      <p className="text-primary text-8"><i className="fas fa-video"></i></p>
                      <h5 className="text-white text-5">YouTube Video</h5>
                      <span className="text-light">Category</span> </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 vimeo" style={{"position": "absolute", "left": "0px", "top": "469.7px"}}>
              <div className="portfolio-box">
                <div className="portfolio-img"> <img className="img-fluid d-block" src={CustomImage} alt=""/>
                  <div className="portfolio-overlay"> <a className="popup-vimeo stretched-link" href="https://vimeo.com/259411563"></a>
                    <div className="portfolio-overlay-details">
                      <p className="text-primary text-8"><i className="fas fa-video"></i></p>
                      <h5 className="text-white text-5">Vimeo Video</h5>
                      <span className="text-light">Category</span> </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 detailed" data-wow-delay="0.2s" style={{"position": "absolute", "left": "439.987px", "top": "469.7px"}}>
              <div className="portfolio-box">
                <div className="portfolio-img"> <img className="img-fluid d-block" src={CustomImage} alt=""/>
                  <div className="portfolio-overlay"> <a className="popup-ajax stretched-link" href="ajax/portfolio-ajax-project-2.html"></a>
                    <div className="portfolio-overlay-details">
                      <p className="text-primary text-8"><i className="fas fa-file-alt"></i></p>
                      <h5 className="text-white text-5">Detailed Project 2</h5>
                      <span className="text-light">Category</span> </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 mockups" data-wow-delay="0.3s" style={{"position": "absolute", "left": "879.974px", "top": "469.7px"}}>
              <div className="portfolio-box">
                <div className="portfolio-img"> <img className="img-fluid d-block" src={CustomImage} alt=""/>
                  <div className="portfolio-overlay"> <a className="popup-img stretched-link" href="images/projects/project-6.jpg"></a>
                    <div className="portfolio-overlay-details">
                      <p className="text-primary text-8"><i className="fas fa-image"></i></p>
                      <h5 className="text-white text-5">Mockups Design 2</h5>
                      <span className="text-light">Category</span> </div>
                  </div>
                </div>
              </div>
            </div>
            </>
            //*/
}
          </div>
        </div>
      </div>
    </section>
    </>)
}
export default SectionPortafolio;
import { useEffect } from "react";
import CustoImage from "../assets/images/intro-bg-2.jpg"
import useStarted from "../hooks/useStarted";
import { useTranslation } from "react-i18next";
const SectionHireMe =  () => {
    const {t} = useTranslation("Section6HireMe")
    const {started, animatedClass, startAnimation, initialChange} = useStarted();
    const styledObject = (index) => {
        switch (index){
          case 0: 
            return {"visibility": started[index]?"visible":"hidden", "animationName": started[index]? undefined:"none"};
          default: 
            return {};
        }
    }
    useEffect(()=>{
      initialChange(1);
    },[])
    return(<>
        <section onMouseEnter={()=>startAnimation(0)}>
            <div className="hero-wrap">
                <div className="hero-mask opacity-8 bg-dark"></div>
                <div className="hero-bg parallax" style={{"background-image": `url(${CustoImage})`, "background-size": "cover", "background-repeat": "no-repeat", "background-attachment": "fixed", "background-position": "center -109.4px"}}></div>
                    <div className="hero-content section">
                        <div className={`container text-center py-5 wow fadeInUp ${animatedClass[0]}`} style={styledObject(0)}>
                            <h2 className="text-10 fw-600 text-white mb-5">{t("Interested")}</h2>
                            <a 
                                href="#contact" 
                                className="btn btn-primary rounded-0 smooth-scroll wow rubberBand" 
                                data-wow-delay="1s" 
                                style={{...styledObject(0), "animation-delay": "1s"}}
                            >
                                {t("HireMe")}
                            </a> 
                        </div>
                    </div>
                </div>
        </section>
    </>)
}
 export default SectionHireMe;
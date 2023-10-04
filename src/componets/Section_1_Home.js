import { useEffect, useRef } from "react";
import Typed from 'typed.js';
import useStarted from "../hooks/useStarted";
import { useTranslation } from "react-i18next";
import profilePicture from "../assets/images/profile1.jpeg"
const SectionHome  = () => {
    
    const {t} = useTranslation("Section1Home");
    const el = useRef(null);
    const {started, animatedClass, startAnimation, initialChange} = useStarted();

    const styledObject = (index) => {
        switch (index){
          case 0: 
            return {"visibility": started[index]?"visible":"hidden", "animationName": started[index]? undefined:"none"};
          default: 
            return {};
        }
    }

    const customStartAnimation = async () => {
        initialChange(1) 
    }

      useEffect(() => {
        customStartAnimation()
        const dataArray = [t("devFullWeb"), "" ,t("devMobile"), ""];
        const typed = new Typed(el.current, {
            strings: dataArray, // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 300,
            typeSpeed: 150,
            backSpeed: 150,
            backDelay: 300,
            loop: true,
            loopCount: Infinity
          });
          return () => {
            typed.destroy();
          };
    }, []);
       
    return(<>
        <section id="home" className="bg-primary d-flex fullscreen position-relative py-5" onMouseEnter={()=>startAnimation(0)} >
        <div className="container my-auto py-4">
            <div className="row">
            <div className={`col-lg-7 text-center text-lg-start align-self-center order-1 order-lg-0 wow fadeIn ${animatedClass[0]}`} style={styledObject(0)}>
                <h1 className="text-12 fw-300 mb-0 text-uppercase">
                   {t("hi")}
                </h1>
                <h2 className="text-18 fw-600 text-uppercase mb-0 ms-n1">
                    <span id="typed" className="typed" ref={el}></span>
                </h2>
                <p className="text-5">{t("placed")}</p>
                <a href="#portfolio" className="btn btn-dark rounded-0 smooth-scroll mt-3">{t("ViewWorks")}</a>
                <a href="#contact" className="btn btn-link text-dark smooth-scroll mt-3">{t("ContactMe")}<span className="text-4 ms-2">
                    <i className="far fa-arrow-alt-circle-down">
                    </i>
                </span>
                </a>
            </div>
            <div className="col-lg-5 text-center align-self-center mb-4 mb-lg-0 order-0 order-lg-1">
                <div className={`bg-light rounded-pill d-inline-block p-3 shadow-lg wow zoomIn ${animatedClass}`} style={styledObject(0)}> 
                <img className="img-fluid rounded-pill d-block" src={profilePicture} title={t(`hi`)} alt=""/>
            </div>
            </div>
            </div>
        </div>
        <a href="#about" className="scroll-down-arrow text-dark smooth-scroll">
            <span className="animated">
            <i className="fas fa-arrow-down">
            </i>
        </span>
        </a> </section>
    </>)
}

export default SectionHome;
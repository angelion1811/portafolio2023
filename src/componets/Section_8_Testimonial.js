import { useEffect } from "react";
import useStarted from "../hooks/useStarted";

const SectionTestimonial = () => {
  
  const {started, animatedClass, startAnimation, initialChange} = useStarted();
  const styledObject = (index) => {
      switch (index){
        case 0: 
        case 1: 
        case 2: 
          return {"visibility": started[index]?"visible":"hidden", "animationName": started[index]? undefined:"none"};
        default: 
          return {};
      }
  }
  useEffect(()=>{
    initialChange(2);
  },[])

  
    return(<>
        <section id="testimonial" class="section bg-secondary">
      <div class="container"> 
        
        <p class="text-center mb-2 wow fadeIn" style={{"visibility": "visible"}}>
          <span class="bg-primary text-dark px-2">Client Speak</span>
        </p>
        <h2 class="text-10 fw-600 text-white text-center mb-5 wow fadeIn" style={{"visibility": "visible"}}>What Some of my Clients Say</h2>
        
        <div class="row">
          <div class="col-lg-9 mx-auto wow fadeInUp" style={{"visibility": "visible"}}>
            <div class="owl-carousel owl-theme owl-light owl-loaded owl-drag" data-autoplay="true" data-loop="true" data-nav="true" data-margin="30" data-slideby="1" data-stagepadding="5" data-items-xs="1" data-items-sm="1" data-items-md="1" data-items-lg="1">
              
              
              
              
            <div class="owl-stage-outer">
              <div class="owl-stage" style={{"transform": "translate3d(-3944px, 0px, 0px)", "transition": "all 0.25s ease 0s", "width": "7898px", "padding-left": "5px", "padding-right": "5px"}}>
              <div class="owl-item cloned" style={{"width": "956px", "margin-right": "30px"}}>
              <div class="item text-center px-5"> 
            <span class="text-9 text-primary">
              <i class="fa fa-quote-start">
              </i>
            </span>
                <p class="text-5 text-white">“Only trying it out since a few days. But up to now excellent. Seems to work flawlessly. priced simply dummy text of the printing and typesetting industry.”</p>
                <img class="img-fluid d-inline-block w-auto rounded-circle shadow" src="images/testimonial/client-sm-3.jpg" alt=""/> 
                <strong class="d-block text-3 fw-500 text-white">Dennis Jacques</strong> 
                <span class="text-light">Noon Inc</span> 
                </div>
                </div>
                <div class="owl-item cloned" style={{"width": "956px", "margin-right": "30px"}}>
                  <div class="item text-center px-5"> 
                <span class="text-9 text-primary">
                  <i class="fa fa-quote-start">
                  </i>
                </span>
                <p class="text-5 text-white">“I have used them twice now. Good rates, very efficient service and priced simply dummy text of the printing and typesetting industry quidam interesset his et. simply dummy text of the printing and typesetting industry. Excellent.”</p>
                <img class="img-fluid d-inline-block w-auto rounded-circle shadow" src="images/testimonial/client-sm-4.jpg" alt=""/> 
                <strong class="d-block text-3 fw-500 text-white">Chris Tom</strong> 
                <span class="text-light">Company CEO from UK</span> 
                </div>
                </div>
                <div class="owl-item" style={{"width": "956px", "margin-right": "30px"}}>
                  <div class="item text-center px-5"> 
                <span class="text-9 text-primary">
                  <i class="fa fa-quote-start">
                  </i>
                </span>
                <p class="text-5 text-white">Easy to use, reasonably priced simply dummy text of the printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam possim iriure. simply dummy text of the printing and typesetting industry.”</p>
                <img class="img-fluid d-inline-block w-auto rounded-circle shadow" src="images/testimonial/client-sm-1.jpg" alt=""/> 
                <strong class="d-block text-3 fw-600 text-white">Jay Shah</strong> 
                <span class="text-light">Founder at Icomatic Pvt Ltd</span> 
                </div>
                </div>
                <div class="owl-item" style={{"width": "956px", "margin-right": "30px"}}>
                  <div class="item text-center px-5"> 
                <span class="text-9 text-primary">
                  <i class="fa fa-quote-start">
                  </i>
                </span>
                <p class="text-5 text-white">“I am happy Working with printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam persequeris essent possim iriure. simply dummy text of the printing and typesetting industry.”</p>
                <img class="img-fluid d-inline-block w-auto rounded-circle shadow" src="images/testimonial/client-sm-2.jpg" alt=""/> 
                <strong class="d-block text-3 fw-500 text-white">Patrick Cary</strong> 
                <span class="text-light">Freelancer from USA</span> 
                </div>
                </div>
                <div class="owl-item active" style={{"width": "956px", "margin-right": "30px"}}>
                  <div class="item text-center px-5"> 
                <span class="text-9 text-primary">
                  <i class="fa fa-quote-start">
                  </i>
                </span>
                <p class="text-5 text-white">“Only trying it out since a few days. But up to now excellent. Seems to work flawlessly. priced simply dummy text of the printing and typesetting industry.”</p>
                <img class="img-fluid d-inline-block w-auto rounded-circle shadow" src="images/testimonial/client-sm-3.jpg" alt=""/> 
                <strong class="d-block text-3 fw-500 text-white">Dennis Jacques</strong> 
                <span class="text-light">Noon Inc</span> 
                </div>
                </div>
                <div class="owl-item" style={{"width": "956px", "margin-right": "30px"}}>
                  <div class="item text-center px-5"> 
                <span class="text-9 text-primary">
                  <i class="fa fa-quote-start">
                  </i>
                </span>
                <p class="text-5 text-white">“I have used them twice now. Good rates, very efficient service and priced simply dummy text of the printing and typesetting industry quidam interesset his et. simply dummy text of the printing and typesetting industry. Excellent.”</p>
                <img class="img-fluid d-inline-block w-auto rounded-circle shadow" src="images/testimonial/client-sm-4.jpg" alt=""/> 
                <strong class="d-block text-3 fw-500 text-white">Chris Tom</strong> 
                <span class="text-light">Company CEO from UK</span> 
                </div>
                </div>
                <div class="owl-item cloned" style={{"width": "956px", "margin-right": "30px"}}>
                  <div class="item text-center px-5"> 
                <span class="text-9 text-primary">
                  <i class="fa fa-quote-start">
                  </i>
                </span>
                <p class="text-5 text-white">Easy to use, reasonably priced simply dummy text of the printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam possim iriure. simply dummy text of the printing and typesetting industry.”</p>
                <img class="img-fluid d-inline-block w-auto rounded-circle shadow" src="images/testimonial/client-sm-1.jpg" alt=""/> 
                <strong class="d-block text-3 fw-600 text-white">Jay Shah</strong> 
                <span class="text-light">Founder at Icomatic Pvt Ltd</span> 
                </div>
                </div>
                <div class="owl-item cloned" style={{"width": "956px", "margin-right": "30px"}}>
                  <div class="item text-center px-5"> 
                <span class="text-9 text-primary">
                  <i class="fa fa-quote-start">
                  </i>
                </span>
                <p class="text-5 text-white">“I am happy Working with printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam persequeris essent possim iriure. simply dummy text of the printing and typesetting industry.”</p>
                <img class="img-fluid d-inline-block w-auto rounded-circle shadow" src="images/testimonial/client-sm-2.jpg" alt=""/> 
                <strong class="d-block text-3 fw-500 text-white">Patrick Cary</strong> 
                <span class="text-light">Freelancer from USA</span> 
                </div>
                </div>
                </div>
                </div>
                <div class="owl-nav">
                  <button type="button" role="presentation" class="owl-prev">
                  <i class="fa fa-chevron-left">
                  </i>
                </button>
                <button type="button" role="presentation" class="owl-next">
                  <i class="fa fa-chevron-right">
                  </i>
                </button>
                </div>
                <div class="owl-dots">
                  <button role="button" class="owl-dot">
                  <span>
                  </span>
                </button>
                <button role="button" class="owl-dot">
                  <span>
                  </span>
                </button>
                <button role="button" class="owl-dot active">
                  <span>
                  </span>
                </button>
                <button role="button" class="owl-dot">
                  <span>
                  </span>
                </button>
                </div>
                </div>
          </div>
        </div>
      </div>
    </section>
    </>)
}

export default SectionTestimonial
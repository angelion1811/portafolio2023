import CustomImg from "../assets/images/project-2.jpg"
const ProjectDetailModal = () => {
    return (<>
      <div className="project-details-modal">
        <div className="modal fade bg-dark-1 show" tabindex="-1" aria-hidden="true" style={{"display": "block"}}>
          <div className="modal-dialog modal-xl">
            <div className="modal-content rounded-0">
              <div className="modal-body">
                <button type="button" className="btn-close ">
                </button>
                <div className="container ajax-container ">
                  <h2 className="text-6 fw-600 text-center mb-4">Detailed Project 1</h2>
                  <div className="row g-4">
                    <div className="col-md-7">
                      <div className="slick-slider slick-initialized" dir="ltr">
                        <button data-role="none" className="slick-prev slick-arrow" aria-hidden="true" aria-disabled="false" type="button" style={{"display": "block"}}>
                          <i className="fa fa-chevron-left">
                          </i>
                        </button>
                        <div className="slick-list" style={{"height": "672px"}}>
                          <div className="slick-track" style={{"width": "4347px", "opacity": "1", "transform": "translate3d(-1863px, 0px, 0px)"}}>
                            <div data-index="-1" tabindex="-1" className="slick-slide slick-cloned" aria-hidden="true" style={{"width": "621px"}}>
                              <div>
                                <div className="item" tabindex="-1" style={{"width": "100%", "display": "inline-block"}}>
                                  <img className="img-fluid" alt="" src={CustomImg} />
                                </div>
                              </div>
                            </div>
                            <div data-index="0" className="slick-slide" tabindex="-1" aria-hidden="true" style={{"outline": "none", "width": "621px"}}>
                              <div>
                                <div className="item" tabindex="-1" style={{"width": "100%", "display": "inline-block"}}>
                                  <img className="img-fluid" alt="" src={CustomImg} />
                                </div>
                              </div>
                            </div>
                            <div data-index="1" className="slick-slide" tabindex="-1" aria-hidden="true" style={{"outline": "none", "width": "621px"}}>
                              <div>
                                <div className="item" tabindex="-1" style={{"width": "100%", "display": "inline-block"}}>
                                  <img className="img-fluid" alt="" src={CustomImg} />
                                </div>
                              </div>
                            </div>
                            <div data-index="2" className="slick-slide slick-active slick-current" tabindex="-1" aria-hidden="false" style={{"outline": "none", "width": "621px"}}>
                              <div>
                                <div className="item" tabindex="-1" style={{"width": "100%", "display": "inline-block"}}>
                                  <img className="img-fluid" alt="" src={CustomImg} />
                                </div>
                              </div>
                            </div>
                            <div data-index="3" tabindex="-1" className="slick-slide slick-cloned" aria-hidden="true" style={{"width": "621px"}}>
                              <div>
                                <div className="item" tabindex="-1" style={{"width": "100%", "display": "inline-block"}}>
                                  <img className="img-fluid" alt="" src={CustomImg} />
                                </div>
                              </div>
                            </div>
                            <div data-index="4" tabindex="-1" className="slick-slide slick-cloned" aria-hidden="true" style={{"width": "621px"}}>
                              <div>
                                <div className="item" tabindex="-1" style={{"width": "100%", "display": "inline-block"}}>
                                  <img className="img-fluid" alt="" src={CustomImg} />
                                </div>
                              </div>
                            </div>
                            <div data-index="5" tabindex="-1" className="slick-slide slick-cloned" aria-hidden="true" style={{"width": "621px"}}>
                              <div>
                                <div className="item" tabindex="-1" style={{"width": "100%", "display": "inline-block"}}>
                                  <img className="img-fluid" alt="" src={CustomImg} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button data-role="none" className="slick-next slick-arrow slick-disabled" aria-hidden="true" aria-disabled="true" type="button" style={{"display": "block"}}>
                          <i className="fa fa-chevron-right">
                          </i>
                        </button>
                        <ul className="slick-dots" style={{"display": "block"}}>
                          <li className="">
                            <button>1</button>
                          </li>
                          <li className="">
                            <button>2</button>
                          </li>
                          <li className="slick-active">
                            <button>3</button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <h4 className="text-4 fw-600">Project Info:</h4>
                      <p>Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                      <h4 className="text-4 fw-600 mt-4">Project Details:</h4>
                      <ul className="list-style-2 ">
                        <li>
                          <span className="text-dark fw-600 me-2">Client:</span>Ruby Clinton</li>
                        <li>
                          <span className="text-dark fw-600 me-2">Technologies:</span>iOS, HTML5, CSS3, PHP, Java</li>
                        <li>
                          <span className="text-dark fw-600 me-2">Industry:</span>Art &amp; Design</li>
                        <li>
                          <span className="text-dark fw-600 me-2">Date:</span>July 16, 2019</li>
                        <li>
                          <span className="text-dark fw-600 me-2">URL:</span>
                          <a href="https://www.example.com" className="btn btn-primary shadow-none rounded-0 px-3 py-1" target="_blank" rel="noopener noreferrer">
                            www.example.com<i className="fas fa-external-link-alt ms-1"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>)
}
export default ProjectDetailModal
import CustomImg from "../assets/images/project-2.jpg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
const ProjectDetailModal = ({modalData, active, setActive}) => {
    const {t} = useTranslation("projects");
    if (!active) return null

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (<>
      <div className="project-details-modal">
        <div className="modal fade bg-dark-1 show" tabindex="-1" aria-hidden="true" style={{"display": "block"}}>
          <div className="modal-dialog modal-xl">
            <div className="modal-content rounded-0">
              <div className="modal-body">
                <button type="button" className="btn-close " onClick={()=>setActive()}>
                </button>
                <div className="container ajax-container ">
                  <h2 className="text-6 fw-600 text-center mb-4">{t(`ProjectDetail`)}</h2>
                  <div className="row g-4">
                    <div className="col-md-7">
                      <div >
                        <Slider  {...settings}>
                            {
                              modalData?.images?.map(e=> <img src={e} style={{width:"100%", height:"100%", maxHeight: "400px"}}/>)
                            }
                        </Slider>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <h4 className="text-4 fw-600">{t("ProjectInfo")}</h4>
                      <p>{t(modalData.info)}</p>
                      <h4 className="text-4 fw-600 mt-4">{t("ProjectDetail")}</h4>
                      <ul className="list-style-2 ">
                        {modalData?.client&&<li><span className="text-dark fw-600 me-2">{t("Client")}</span>{t(modalData.client)}</li>}
                        {modalData?.tecnologies&&<li><span className="text-dark fw-600 me-2">{t("Technologies")}</span>{t(modalData.tecnologies)}</li>}
                        {modalData?.industry&&<li><span className="text-dark fw-600 me-2">{t("Industry")}</span>{t(modalData.industry)}</li>}
                        {modalData?.date&&<li><span className="text-dark fw-600 me-2">{t("Date")}</span>{t(modalData.date)}</li>}
                        {modalData?.URL&&<li>
                          <span className="text-dark fw-600 me-2">{t("URL")}</span>
                          <a href={`${t(modalData.URL)}`} className="btn btn-primary shadow-none rounded-0 px-3 py-1" target="_blank" rel="noopener noreferrer">
                            {`${t(modalData.URLName)}`}<i className="fas fa-external-link-alt ms-1"></i>
                          </a>
                        </li>
                        }
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
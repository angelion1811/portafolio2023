import { useState } from "react"
const NavBarItem = ({name, hrefName, action}) => {
    return(<>
        <li className="nav-item">
            <a className="nav-link smooth-scroll" href={`${hrefName}`} onClick={()=>action()}>{name}</a>
        </li>
    </>)
}

const SocialLink = ({social, iconClass, hrefName, }) => {
  return(<>
    <li className={`social-icons-${social}`}>
      <a data-bs-toggle="tooltip" href={`${hrefName}`} target="_blank" title="" data-bs-original-title={`${(social).toUpperCase()}`}>
        <i className={`${iconClass??`fab fa-${social}`}`}></i>
      </a>
    </li>
  </>)
}

const Header = ()=>{
    const [showColapse, setShowColapse] = useState(false);
    const closeCollapse = () => setShowColapse(false);
    
    return(<>
        <header id="header" className="sticky-top"> 
          <nav className="primary-menu navbar navbar-expand-none navbar-overlay navbar-overlay-dark bg-transparent border-bottom-0 text-5 fw-600 sticky-on-top">
            <div className="container"> 
              <div className="text-3 ms-auto me-2">
                  <span className="text-4 me-2">
                  <i className="fas fa-phone"></i>
              </span>(+58) 412 4614 009</div>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#header-nav" onClick={()=>setShowColapse(!showColapse)}>
                  <span></span>
                  <span></span>
                  <span></span>
              </button>
              <div id="header-nav" className={`collapse navbar-collapse ${showColapse?'show':''}`}>
                <div className="d-flex flex-column h-100 align-items-center justify-content-center">
                  <ul className="navbar-nav">
                      <NavBarItem name={`About Me`} hrefName={`#about`} action={closeCollapse} />  
                      <NavBarItem name={`What I Do`} hrefName={`#services`} action={closeCollapse} /> 
                      <NavBarItem name={`Resume`} hrefName={`#resume`} action={closeCollapse} /> 
                      <NavBarItem name={`Portfolio`} hrefName={`#portfolio`} action={closeCollapse} /> 
                      <NavBarItem name={`FAQ`} hrefName={`#faq`} action={closeCollapse} /> 
                      {
                        /*/
                      <NavBarItem name={`Client Speak`} hrefName={`#testimonial`} action={closeCollapse} /> 
                        //*/
                      }
                      <NavBarItem name={`Contact Me`} hrefName={`#contact`} action={closeCollapse} /> 
                  </ul>
                  <ul className="social-icons social-icons-light social-icons-lg social-icons-light d-inline-flex mt-4">
                    <SocialLink social={'whatsapp'}   hrefName="https://wa.me/584124614009"  />
                    <SocialLink social={'github'}     hrefName="https://github.com/angelion1811"  />
                    <SocialLink social={'facebook'}   hrefName="https://www.facebook.com/angel.leon1"  />
                    <SocialLink social={'instagram'}  hrefName="https://www.instagram.com/angel.leon1/"  />
                    <SocialLink social={'linkedin'}   hrefName="https://www.linkedin.com/in/angel-leon-164004175" iconClass={`fab fa-linkedin-in`}   />
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </header>
    </>)
}

export default Header;
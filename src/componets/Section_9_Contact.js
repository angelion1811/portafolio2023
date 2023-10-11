
import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
const SectionContact = () => {
  const {t} = useTranslation("Section9ContactMe");
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const helpRef = useRef(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [help, setHelp] = useState('');
  const [message, setMessage] = useState('');

  const  phoneNumber = "(+58) 412 461 40 09";

  const prepareMessage = () => {
    const invalidValues =  [ undefined, null, ''];
    if(invalidValues.includes(name)){
      nameRef.current.focus();
      return;
    }
    if(invalidValues.includes(email)){
      emailRef.current.focus();
      return;
    }
    if(invalidValues.includes(help)){
      helpRef.current.focus();
      return;
    }
    setMessage(`\n *Nombre:*${name} \n *Email:* ${email} \n *Motivo:* ${help}`)
    return;
  }

  const  sendMessage = () =>{
    let url = "https://api.whatsapp.com/send?phone="+phoneNumber+"&text="+encodeURI(message);
    window.open(url);
  }


  useEffect(()=>{
    if(message)
      sendMessage();
  },[message]);
 
    return (<>
    <section id="contact" class="section bg-primary">
      <div class="container">
        <div class="row">
          <div class={`col-lg-5 text-center text-lg-start wow fadeInUp `}>
            <h2 class="text-10 fw-600 mb-5">{t('lets')}</h2>
            <p class="text-5 mb-5">{t('paragraph1')}</p>
            <h3 class="text-5 fw-600">{t("Living")}</h3>
            <address class="text-4">
              Puerto Cabello,
              Carabobo, Venezuela.
            </address>
            <h3 class="text-5 fw-600">{t("Call")}:</h3>
            <p class="text-4">(+58) 412 461 40 09</p>
            <ul class="social-icons social-icons-lg justify-content-center justify-content-lg-start mt-5">
              <li class="social-icons-twitter">
                <a data-bs-toggle="tooltip" href="https://twitter.com/harnishdesign/" target="_blank" title="" data-bs-original-title="Twitter">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li class="social-icons-facebook">
                <a data-bs-toggle="tooltip" href="http://www.facebook.com/harnishdesign/" target="_blank" title="" data-bs-original-title="Facebook">
                  <i class="fab fa-facebook"></i>
                </a>
              </li>
              <li class="social-icons-instagram">
                <a data-bs-toggle="tooltip" href="http://www.instagram.com/" target="_blank" title="" data-bs-original-title="Instagram">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
              <li class="social-icons-github">
                <a data-bs-toggle="tooltip" href="http://www.github.com/" target="_blank" title="" data-bs-original-title="GitHub">
                  <i class="fab fa-github"></i>
                </a>
              </li>
              <li class="social-icons-dribbble">
                <a data-bs-toggle="tooltip" href="http://www.dribbble.com/harnishdesign/" target="_blank" title="" data-bs-original-title="Dribbble">
                  <i class="fab fa-dribbble"></i>
                </a>
              </li>
            </ul>
          </div>"
          <div class={`col-lg-6 ms-auto mt-5 mt-lg-0 wow fadeInUp`} data-wow-delay="0.3s">
            <h2 class="text-10 fw-600 text-center text-lg-start mb-5">{t("Estimate")}</h2>
            {/*<!-- Contact Form -->*/}
            <form id="contact-form" class="form-border" action="php/mail.php" method="post">
              <div class="row g-4">
                <div class="col-12">
                  <label class="form-label" for="name">{t("name")}</label>
                  <input ref={nameRef} id="name" name="name" type="text" class="form-control py-1" required="" onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div class="col-12">
                  <label class="form-label" for="email">{t("email")}</label>
                  <input ref={emailRef} id="email" name="email" type="email" class="form-control py-1" required="" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div class="col-12">
                  <label class="form-label" for="form-message">{t("help")}</label>
                  <textarea ref={helpRef} id="form-message" name="form-message" class="form-control py-1" rows="4" required="" onChange={(e)=>setHelp(e.target.value)}>
                  </textarea>
                </div>
                <div class="col-12 text-center text-lg-start">
                  <button id="submit-btn" class="btn btn-dark rounded-0" type="button"  onClick={()=>prepareMessage()}>{t('send')} <span class="ms-3">
                    <i class="fas fa-arrow-right">
                    </i>
                  </span>
                  </button>
                </div>
              </div>
            </form>
            {/*<!-- Contact Form end -->*/} 
          </div>
        </div>
      </div>
    </section>
    </>)
}

export default SectionContact;
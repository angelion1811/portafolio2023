import CustomImg from "../assets/images/project-2.jpg"
const ProjectDetailModal = () => {
    return (<>
      <div class="project-details-modal">
      <div class="modal fade bg-dark-1 show" tabindex="-1" aria-hidden="true" style="display: block;">
      <div class="modal-dialog modal-xl">
      <div class="modal-content rounded-0">
      <div class="modal-body">
      <button type="button" class="btn-close ">
      </button>
      <div class="container ajax-container ">
      <h2 class="text-6 fw-600 text-center mb-4">Detailed Project 1</h2>
      <div class="row g-4">
      <div class="col-md-7">
      <div class="slick-slider slick-initialized" dir="ltr">
      <button data-role="none" class="slick-prev slick-arrow" aria-hidden="true" aria-disabled="false" type="button" style="display: block;">
      <i class="fa fa-chevron-left">
      </i>
      </button>
      <div class="slick-list" style="height: 672px;">
      <div class="slick-track" style="width: 4347px; opacity: 1; transform: translate3d(-1863px, 0px, 0px);">
      <div data-index="-1" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true" style="width: 621px;">
      <div>
      <div class="item" tabindex="-1" style="width: 100%; display: inline-block;">
      <img class="img-fluid" alt="" src={CustomImg} />
      </div>
      </div>
      </div>
      <div data-index="0" class="slick-slide" tabindex="-1" aria-hidden="true" style="outline: none; width: 621px;">
      <div>
      <div class="item" tabindex="-1" style="width: 100%; display: inline-block;">
      <img class="img-fluid" alt="" src={CustomImg} />
      </div>
      </div>
      </div>
      <div data-index="1" class="slick-slide" tabindex="-1" aria-hidden="true" style="outline: none; width: 621px;">
      <div>
      <div class="item" tabindex="-1" style="width: 100%; display: inline-block;">
      <img class="img-fluid" alt="" src={CustomImg} />
      </div>
      </div>
      </div>
      <div data-index="2" class="slick-slide slick-active slick-current" tabindex="-1" aria-hidden="false" style="outline: none; width: 621px;">
      <div>
      <div class="item" tabindex="-1" style="width: 100%; display: inline-block;">
      <img class="img-fluid" alt="" src={CustomImg} />
      </div>
      </div>
      </div>
      <div data-index="3" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true" style="width: 621px;">
      <div>
      <div class="item" tabindex="-1" style="width: 100%; display: inline-block;">
      <img class="img-fluid" alt="" src={CustomImg} />
      </div>
      </div>
      </div>
      <div data-index="4" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true" style="width: 621px;">
      <div>
      <div class="item" tabindex="-1" style="width: 100%; display: inline-block;">
      <img class="img-fluid" alt="" src={CustomImg} />
      </div>
      </div>
      </div>
      <div data-index="5" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true" style="width: 621px;">
      <div>
      <div class="item" tabindex="-1" style="width: 100%; display: inline-block;">
      <img class="img-fluid" alt="" src={CustomImg} />
      </div>
      </div>
      </div>
      </div>
      </div>
      <button data-role="none" class="slick-next slick-arrow slick-disabled" aria-hidden="true" aria-disabled="true" type="button" style="display: block;">
      <i class="fa fa-chevron-right">
      </i>
      </button>
      <ul class="slick-dots" style="display: block;">
      <li class="">
      <button>1</button>
      </li>
      <li class="">
      <button>2</button>
      </li>
      <li class="slick-active">
      <button>3</button>
      </li>
      </ul>
      </div>
      </div>
      <div class="col-md-5">
      <h4 class="text-4 fw-600">Project Info:</h4>
      <p>Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
      <h4 class="text-4 fw-600 mt-4">Project Details:</h4>
      <ul class="list-style-2 ">
      <li>
      <span class="text-dark fw-600 me-2">Client:</span>Ruby Clinton</li>
      <li>
      <span class="text-dark fw-600 me-2">Technologies:</span>iOS, HTML5, CSS3, PHP, Java</li>
      <li>
      <span class="text-dark fw-600 me-2">Industry:</span>Art &amp; Design</li>
      <li>
      <span class="text-dark fw-600 me-2">Date:</span>July 16, 2019</li>
      <li>
      <span class="text-dark fw-600 me-2">URL:</span>
      <a href="https://www.example.com" class="btn btn-primary shadow-none rounded-0 px-3 py-1" target="_blank" rel="noopener noreferrer">www.example.com<i class="fas fa-external-link-alt ms-1">
      </i>
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
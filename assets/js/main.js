const menubar = document.querySelector('.menu_bar');
const menuList = document.querySelector('.menulist');
const navbar = document.querySelector('.navbar');
menubar.onclick = ()=>{
    menubar.classList.toggle("active");
	menuList.classList.toggle("active");

}

window.onscroll = ()=>{
    this.scrollY > 10 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
  }


  //---------------------------video open----------

  const VidBtn = document.querySelector('.video_btn');
  const VidContainer = document.querySelector('.videocontainer');
  const closevid = document.querySelector('.close');

  VidBtn.addEventListener('click',()=>{
    VidContainer.classList.add('.show');
  })

  closevid.addEventListener('click',()=>{
    VidContainer.classList.remove('.show');
  })



  //--------------------------slider

  $('.subject_slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<button class="slide-arrow prev-arrow"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button class="slide-arrow next-arrow"><i class="fas fa-chevron-right"></i></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  //-------------------------accordian

  const accordionHeaders = document.querySelectorAll(".accordion-header");

  ActivatingFirstAccordion();
  
  function ActivatingFirstAccordion() {
    accordionHeaders[0].parentElement.classList.add("active");
    accordionHeaders[0].nextElementSibling.style.maxHeight =
    accordionHeaders[0].nextElementSibling.scrollHeight + "px";
  }
  
  function toggleActiveAccordion(e, header) {
    const activeAccordion = document.querySelector(".accordion.active");
    const clickedAccordion = header.parentElement;
    const accordionBody = header.nextElementSibling;
  
    if (activeAccordion && activeAccordion != clickedAccordion) {
      activeAccordion.querySelector(".accordion-body").style.maxHeight = 0;
      activeAccordion.classList.remove("active");
    }
  
    clickedAccordion.classList.toggle("active");
  
    if (clickedAccordion.classList.contains("active")) {
      accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
    } else {
      accordionBody.style.maxHeight = 0;
    }
  }
  
  accordionHeaders.forEach(function (header) {
    header.addEventListener("click", function (event) {
      toggleActiveAccordion(event, header);
    });
  });
  
  function resizeActiveAccordionBody() {
    const activeAccordionBody = document.querySelector(
      ".accordion.active .accordion-body"
    );
    if (activeAccordionBody)
      activeAccordionBody.style.maxHeight =
        activeAccordionBody.scrollHeight + "px";
  }
  
  window.addEventListener("resize", function () {
    resizeActiveAccordionBody();
  });


  
  



$(document).ready(function () {

    //CAROUSEL AREA
    $('.container__carousel').slick({
        centerMode: true,
        autoplay: true,
        centerPadding: '60px',
        slidesToShow: 2,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

    //CAROUSEL SOSIAL
    $('.container__carousel-1').slick({
        centerMode: true,
        autoplay: true,
        centerPadding: '30px',
        slidesToShow: 4,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '50px',
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '50px',
                    slidesToShow: 4
                }
            }
        ]
    });



    window.onscroll = function() {fixscroll()};

    var scrollBtn = document.getElementById("btn-arv");
    var arv = 80;
    console.log(arv)

    function fixscroll() {
      if (window.pageYOffset >= arv) {
        console.log(window.pageYOffset) 
        scrollBtn.style.display="block";
      } else {
        scrollBtn.style.display="none";
      }
    }

});
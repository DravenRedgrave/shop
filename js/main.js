$(document).ready(function(){
  $('.slider').slick({
    arrows:false,
    slidesToShow:1,
    infinite:true,
    autoplay:true,
    pauseOnFocus:true,
    adaptiveHeight:true,
    pauseOnHover:true,
    swipe:true,
    customPaging:function(){return ''},
    TouchMove:true,
    responsive:[
      {
        breakpoint: 768,
        settings:{
            arrows:false,
          slidesToShow:1,
        }
      }, {
        breakpoint: 922,
        settings:{
          arrows:false,
          slidesToShow:1
        }
      }, {
        breakpoint: 480,
        settings:{
          arrows:false,
          slidesToShow:1
        }
      }
    ]
  });
    });

    $(document).ready(function(){
      $('.new-product-slider').slick({
        arrows:false,
        slidesToShow:4,
        infinite:true,
        autoplay:true,
        pauseOnFocus:true,
        adaptiveHeight:true,
        pauseOnHover:true,
        swipe:true,
        customPaging:function(){return ''},
        TouchMove:true,
        responsive:[
          {
            breakpoint: 768,
            settings:{
                arrows:false,
              slidesToShow:3,
            }
          }, {
            breakpoint: 922,
            settings:{
              arrows:false,
              slidesToShow:4
            }
          }, {
            breakpoint: 480,
            settings:{
              arrows:false,
              slidesToShow:2
            }
          }
        ]
      });
        });

        $(document).ready(function(){
          $('.special-product-slider').slick({
            arrows:false,
            slidesToShow:4,
            infinite:true,
            autoplay:true,
            pauseOnFocus:true,
            adaptiveHeight:true,
            pauseOnHover:true,
            swipe:true,
            customPaging:function(){return ''},
            TouchMove:true,
            responsive:[
              {
                breakpoint: 768,
                settings:{
                    arrows:false,
                  slidesToShow:3,
                }
              }, {
                breakpoint: 922,
                settings:{
                  arrows:false,
                  slidesToShow:4
                }
              }, {
                breakpoint: 480,
                settings:{
                  arrows:false,
                  slidesToShow:2
                }
              }
            ]
          });
            });

 const menuToggle = document.querySelector('.menu-toggle');
 const nav = document.querySelector('nav');
 menuToggle.addEventListener("click", ()=>{
   if (nav.className !='active') {nav.className  = 'active';}
   else {
     {nav.className = ''}
   }
 });

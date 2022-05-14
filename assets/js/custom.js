$(document).ready(function(){
    // menus
    $(".menu-icon").click(function(){
        $(".menu-items").slideToggle();
    })
    // apps carousel
    $('.apps-carosel').owlCarousel({
        items:4,
        nav:true,
        navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
        dots:false,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:4
            }
        }
    });
    // mixitup
    var gallary = document.querySelector('.mixi-items'); 
    var mixer = mixitup(gallary, {
        load: {
           filter: '.all'
       }
    });

});
// aos-plagin
AOS.init({
    duration: 1000
})
  
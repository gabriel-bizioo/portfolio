// $(window).scroll(function(){
//     if ($(window).scrollTop() >= 460) {
//         $('nav').addClass('fixed-header');
//         $('site-title').addClass('visible-title');
//     }
//     else {
//         $('nav').removeClass('fixed-header');
//         $('site-title').removeClass('visible-title');
//     }
// });

var nav = document.getElementById("header-nav");
var div = document.getElementById("nav-div");

window.addEventListener('scroll', (event)=>{
    if(window.scrollY >= 400){
        nav.classList.add("fixed-header");
        div.classList.add("visible-title");
    }
    else{
        nav.classList.remove("fixed-header");
        div.classList.remove("visible-title");
    }
})

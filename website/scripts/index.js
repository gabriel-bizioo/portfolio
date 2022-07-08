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

var nav = document.getElementById("gay");
var div = document.getElementById("bi");

window.addEventListener('scroll', (event)=>{
    console.log("scrolling...");
    if(window.scrollY >= 400){
        nav.classList.add("fixed-header");
        div.classList.add("visible-title");
    }
    else{
        nav.classList.remove("fixed-header");
        div.classList.remove("visible-title");
    }
})

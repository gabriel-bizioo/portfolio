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
var contentBlocks = document.getElementsByClassName("content-block");

window.addEventListener('scroll', (event)=>{
    if(window.scrollY >= 400){
        nav.classList.add("fixed-header");
        div.classList.add("visible-title");
    }
    else{
        nav.classList.remove("fixed-header");
        div.classList.remove("visible-title");
    }

    for(i = 0; i < 10; i++){
        let coord = contentBlocks[i].getBoundingClientRect().top;
        let block = contentBlocks[i].classList;
        console.log(window.scrollY);
        console.log(coord);
        if(window.scrollY - 400 >= coord){
            block.add("visible-block");
        }
        else{
            block.remove("visible-block");
        }
    }
})

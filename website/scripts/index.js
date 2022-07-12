var nav = document.getElementById("header-nav");
var div = document.getElementById("nav-div");
const contentBlocks = document.querySelectorAll('[data-anime]');

const debounce = function(func, wait, i, immediate){
    let timeout;
    return function(...args){
        const context = this;
        const later = function () {
            timeout = null;
            if(!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout = setTimeout(later, wait);
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context, args);
    }
}

function animeScroll(){
    const windowTop = window.scrollY + ((window.innerHeight * 3.5) / 4);
    contentBlocks.forEach(function(element){
        if((windowTop) > element.offsetTop){
            element.classList.add('animate')
        }else{
            element.classList.remove('animate')    
        }
    })
}

window.addEventListener('scroll', (event)=>{
    if(window.scrollY >= 400){
        nav.classList.add("fixed-header");
        div.classList.add("visible-title");
    }
    else{
        nav.classList.remove("fixed-header");
        div.classList.remove("visible-title");
    }

    if(contentBlocks.length){
        debounce(function(){
            animeScroll();
        }, 200);
    }

})

$(window).scroll(function(){
    if ($(window).scrollTop() >= 200) {
        $('nav').addClass('fixed-header');
        $('site-title').addClass('visible-title');
    }
    else {
        $('nav').removeClass('fixed-header');
        $('site-title').removeClass('visible-title');
    }
});